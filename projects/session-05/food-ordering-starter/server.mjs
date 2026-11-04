import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const files = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/app.js', ['app.js', 'text/javascript; charset=utf-8']],
  ['/cart.js', ['cart.js', 'text/javascript; charset=utf-8']],
  ['/styles.css', ['styles.css', 'text/css; charset=utf-8']],
]);
const port = Number(process.env.PORT || 8085);
if (!Number.isInteger(port) || port < 1024 || port > 65535) throw new Error('Choose a valid development port.');
http.createServer(async (request, response) => {
  const entry = files.get(new URL(request.url, 'http://127.0.0.1').pathname);
  if (request.method !== 'GET' || !entry) { response.writeHead(404); response.end('Not found'); return; }
  try { response.writeHead(200, {'Content-Type': entry[1], 'Cache-Control': 'no-store'}); response.end(await fs.readFile(path.join(root, entry[0]))); }
  catch { response.writeHead(500); response.end('Could not read the local app file.'); }
}).listen(port, '127.0.0.1', () => console.log(`BGS Food Lab: http://127.0.0.1:${port} (local development only)`));
