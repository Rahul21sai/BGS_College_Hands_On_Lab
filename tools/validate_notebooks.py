"""Check the student release without running notebook cells or model requests."""

from __future__ import annotations

import ast
import hashlib
import json
from pathlib import Path
import re
import subprocess
import sys

try:
    import nbformat
except ImportError:
    print('Install the validator dependency: python -m pip install "nbformat>=5.10,<6"')
    raise SystemExit(1) from None


ROOT = Path(__file__).resolve().parents[1]
EXPECTED_CODE_IDS = {
    1: ["install", "imports", "key", "request", "first", "roles", "chat_function",
        "chat_ui", "inspect", "bug", "repair", "json", "missing", "prompts", "evidence"],
    2: ["s2-001", "s2-003", "s2-004", "s2-006", "s2-008", "s2-009", "s2-011",
        "s2-013", "s2-015", "s2-017", "s2-019", "s2-021", "s2-023"],
    3: ["s3-001", "s3-003", "s3-004", "s3-006", "s3-008", "s3-010", "s3-012",
        "s3-014", "s3-016", "s3-018", "s3-020", "s3-022", "s3-024", "s3-026",
        "s3-028", "s3-030", "s3-032", "s3-034"],
    4: ["install", "server-source", "connect", "discover", "schema", "bill", "invalid",
        "resource", "prompt", "new-tool", "challenge", "bridge-source", "key", "agent", "evidence"],
    5: ["setup", "baseline-tests", "preview-before", "inspect-context", "edit-cart",
        "verify-repair", "preview-after-repair", "edit-feature", "verify-feature",
        "save-evidence", "download-project"],
    6: ["setup", "imports", "key", "model", "schemas", "http", "tools", "discover",
        "state", "plan", "papers", "web", "reflection", "write_judge", "graph",
        "start", "resume", "report", "evidence"],
}
EXPECTED_NOTEBOOKS = {
    f"notebooks/BGS_Session_{session:02}_Student.ipynb": session
    for session in EXPECTED_CODE_IDS
}
FORBIDDEN_METADATA_KEYS = {
    "executioninfo", "outputid", "userid", "displayname", "widgets",
}
CREDENTIAL_PATTERNS = {
    "Google API key": re.compile(rb"AIza[0-9A-Za-z_-]{25,}"),
    "OpenAI API key": re.compile(rb"\bsk-(?:proj-)?[A-Za-z0-9_-]{25,}"),
    "GitHub token": re.compile(rb"\b(?:ghp_|github_pat_)[A-Za-z0-9_]{20,}"),
    "AWS access key": re.compile(rb"\b(?:AKIA|ASIA)[0-9A-Z]{16}\b"),
    "Private key": re.compile(rb"-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----"),
}
FORBIDDEN_RELEASE_NAME = re.compile(r"instructor|solution|private|rehearsal", re.IGNORECASE)
STARTER = "projects/session-05/food-ordering-starter"
REQUIRED_STARTER_FILES = {
    ".gitignore", "AGENTS.md", "CLAUDE.md", "GEMINI.md", "README.md",
    "SETUP_HANDOUT.md", "TASK_PROMPTS.md", "app.js", "cart.js", "cart.test.js",
    "index.html", "package.json", "server.mjs", "styles.css",
}


def guided_project_records() -> list[dict]:
    """Load the additional Day 2 starters without changing the original lab contract."""
    index_path = ROOT / "day2-projects/PROJECT_INDEX.json"
    if not index_path.exists():
        return []
    data = json.loads(index_path.read_text(encoding="utf-8"))
    records = data["projects"]
    if not isinstance(records, list) or len(records) != 6:
        raise ValueError("Expected six guided Day 2 projects")
    if {record["id"] for record in records} != {"04A", "04B", "05A", "05B", "06A", "06B"}:
        raise ValueError("Unexpected guided project IDs")
    paths = [record["notebook"] for record in records]
    if len(set(paths)) != 6 or any(not path.startswith("day2-projects/session-") or not path.endswith(".ipynb") for path in paths):
        raise ValueError("Unexpected guided notebook paths")
    return records


def metadata_has_private_state(value: object) -> bool:
    if isinstance(value, dict):
        return any(
            str(key).casefold() in FORBIDDEN_METADATA_KEYS or metadata_has_private_state(item)
            for key, item in value.items()
        )
    if isinstance(value, list):
        return any(metadata_has_private_state(item) for item in value)
    return False


def release_paths() -> set[str]:
    # Inspect only files eligible for Git publication, excluding ignored local secrets/builds.
    result = subprocess.run(
        ["git", "ls-files", "-z", "--cached", "--others", "--exclude-standard"],
        cwd=ROOT, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
    )
    return {name.decode("utf-8") for name in result.stdout.split(b"\0") if name}


def main() -> int:
    errors: list[str] = []
    try:
        paths = release_paths()
    except (OSError, subprocess.CalledProcessError):
        print("Run this check from a Git checkout with Git installed.")
        return 1

    try:
        guided_records = guided_project_records()
    except (OSError, ValueError, KeyError, TypeError):
        errors.append("Day 2 PROJECT_INDEX.json must describe the six guided student projects.")
        guided_records = []
    actual_notebooks = {name for name in paths if name.endswith(".ipynb")}
    expected_notebooks = set(EXPECTED_NOTEBOOKS) | {record["notebook"] for record in guided_records}
    if actual_notebooks != expected_notebooks:
        errors.append("The release notebook paths must match the original labs and the Day 2 project index.")

    for relative in sorted(paths):
        path = ROOT / relative
        if not path.is_file():
            errors.append(f"Release file is missing: {relative}")
            continue
        if not path.resolve().is_relative_to(ROOT.resolve()):
            errors.append(f"Release path leaves the repository: {relative}")
            continue
        if FORBIDDEN_RELEASE_NAME.search(relative):
            errors.append(f"Teacher-only or private material must not be published: {relative}")
        raw = path.read_bytes()
        for label, pattern in CREDENTIAL_PATTERNS.items():
            if pattern.search(raw):
                # Never echo the matched token, source line or surrounding file contents.
                errors.append(f"Possible {label} pattern in {relative}; remove it before publishing.")

    try:
        manifest = json.loads((ROOT / "LAB_INDEX.json").read_text(encoding="utf-8"))
        sessions = manifest["sessions"]
        if not isinstance(sessions, list) or len(sessions) != 6:
            raise ValueError("Wrong session list")
        if any(type(record.get("session")) is not int for record in sessions):
            raise ValueError("Wrong session type")
        records = {record["session"]: record for record in sessions}
        if set(records) != set(EXPECTED_CODE_IDS):
            raise ValueError("Wrong session IDs")
    except (OSError, ValueError, KeyError, TypeError, AttributeError):
        errors.append("LAB_INDEX.json must describe each session from 1 to 6 exactly once.")
        records = {}

    total_code_cells = 0
    for relative, session in EXPECTED_NOTEBOOKS.items():
        path = ROOT / relative
        if not path.is_file():
            continue
        raw = path.read_bytes()
        try:
            book = json.loads(raw)
            cells = book["cells"]
            if not isinstance(cells, list):
                raise ValueError("Wrong cells type")
            cell_ids = [cell.get("id") for cell in cells]
            if any(not isinstance(identity, str) or not identity for identity in cell_ids):
                raise ValueError("Missing cell IDs")
            if len(set(cell_ids)) != len(cell_ids):
                raise ValueError("Duplicate cell IDs")
        except (ValueError, KeyError, TypeError, AttributeError):
            errors.append(f"Invalid notebook JSON or missing/duplicate cell IDs: {relative}")
            continue

        try:
            nbformat.validate(nbformat.from_dict(book))
        except Exception:
            # Schema errors can include full cell contents, so keep the failure message bounded.
            errors.append(f"Notebook format validation failed: {relative}")
            continue

        if metadata_has_private_state(book.get("metadata", {})):
            errors.append(f"Remove saved execution/user/widget metadata from {relative}.")

        code_cells = [cell for cell in cells if cell["cell_type"] == "code"]
        total_code_cells += len(code_cells)
        if [cell["id"] for cell in code_cells] != EXPECTED_CODE_IDS[session]:
            errors.append(f"Code cell IDs or order changed in {relative}; review the release definition.")

        for cell in cells:
            if metadata_has_private_state(cell.get("metadata", {})):
                errors.append(f"Remove saved execution/user/widget metadata: {relative}, cell {cell['id']}.")
            if cell["cell_type"] != "code":
                continue
            if cell.get("outputs") != [] or cell.get("execution_count") is not None:
                errors.append(f"Clear saved outputs and execution counts: {relative}, cell {cell['id']}.")
            source = cell["source"]
            if isinstance(source, list):
                source = "".join(source)
            try:
                compile(source, f"{relative}:{cell['id']}", "exec", flags=ast.PyCF_ALLOW_TOP_LEVEL_AWAIT)
            except (SyntaxError, TypeError, ValueError):
                errors.append(f"Python syntax check failed: {relative}, cell {cell['id']}.")

        record = records.get(session)
        if record is not None:
            if record.get("notebook") != relative:
                errors.append(f"LAB_INDEX.json has the wrong notebook path for Session {session}.")
            if record.get("code_cells") != len(code_cells):
                errors.append(f"LAB_INDEX.json has the wrong code cell count for Session {session}.")
            if record.get("github_sha256") != hashlib.sha256(raw).hexdigest():
                errors.append(f"Notebook hash differs from LAB_INDEX.json: {relative}.")

    if total_code_cells != 91:
        errors.append("The six release notebooks must contain 91 code cells in total.")

    guided_code_cells = 0
    for record in guided_records:
        relative = record["notebook"]
        path = ROOT / relative
        try:
            raw = path.read_bytes()
            book = json.loads(raw)
            nbformat.validate(nbformat.from_dict(book))
            cells = book["cells"]
            identities = [cell.get("id") for cell in cells]
            if any(not identity for identity in identities) or len(set(identities)) != len(identities):
                raise ValueError("Missing or duplicate cell IDs")
            if metadata_has_private_state(book.get("metadata", {})):
                raise ValueError("Private notebook metadata")
            code_cells = [cell for cell in cells if cell["cell_type"] == "code"]
            guided_code_cells += len(code_cells)
            if len(code_cells) != record["code_cells"] or hashlib.sha256(raw).hexdigest() != record["sha256"]:
                raise ValueError("Project count or hash differs")
            for cell in cells:
                if metadata_has_private_state(cell.get("metadata", {})):
                    raise ValueError("Private cell metadata")
                if cell["cell_type"] != "code":
                    continue
                if cell.get("outputs") != [] or cell.get("execution_count") is not None:
                    raise ValueError("Saved outputs")
                code = cell["source"] if isinstance(cell["source"], str) else "".join(cell["source"])
                compile(code, f"{relative}:{cell['id']}", "exec", flags=ast.PyCF_ALLOW_TOP_LEVEL_AWAIT)
        except Exception:
            # Keep source, account details and provider responses out of validation logs.
            errors.append(f"Guided project validation failed: {relative}.")

    for filename in sorted(REQUIRED_STARTER_FILES):
        relative = f"{STARTER}/{filename}"
        if relative not in paths or not (ROOT / relative).is_file():
            errors.append(f"Session 5 starter asset is missing from the release: {relative}")

    if errors:
        print(f"Student release validation failed ({len(errors)} issue(s)):")
        for error in errors:
            print(f"- {error}")
        return 1
    print(f"Validated 6 original labs (91 code cells) and {len(guided_records)} Day 2 starters ({guided_code_cells} code cells), release hashes and 14 Session 5 assets.")
    print("Outputs and private execution metadata are clear; no credential patterns or teacher-only files were found.")
    print("Static checks only: no notebook cells, installations or model requests were executed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
