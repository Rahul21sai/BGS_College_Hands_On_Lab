import {MENU, calculateCart, orderSummary} from './cart.js';

const menu = document.querySelector('#menu');
const cartLines = document.querySelector('#cart-lines');
const total = document.querySelector('#total');
const summary = document.querySelector('#summary');
const error = document.querySelector('#error');
const summaryButton = document.querySelector('#summary-button');
const currency = value => new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR', maximumFractionDigits: 0}).format(value);

for (const [itemId, item] of Object.entries(MENU)) {
  const row = document.createElement('div');
  row.className = 'menu-row';
  row.innerHTML = `<div><p class="item-name">${item.name}</p><p class="price">${currency(item.priceInr)} each</p></div><label>Qty <input aria-label="${item.name} quantity" data-item="${itemId}" type="number" min="0" max="10" step="1" value="0"></label>`;
  menu.append(row);
}

function renderCart() {
  error.textContent = '';
  summary.textContent = '';
  try {
    const cart = Object.fromEntries([...menu.querySelectorAll('input')].map(input => [input.dataset.item, Number(input.value)]));
    const result = calculateCart(cart);
    cartLines.replaceChildren();
    if (!result.items.length) {
      const empty = document.createElement('p');
      empty.className = 'empty';
      empty.textContent = 'Your cart is empty. Choose an item to begin.';
      cartLines.append(empty);
    }
    for (const item of result.items) {
      const line = document.createElement('div');
      line.className = 'cart-line';
      line.innerHTML = `<span>${item.quantity} × ${item.name}</span><span>${currency(item.subtotalInr)}</span>`;
      cartLines.append(line);
    }
    total.textContent = currency(result.totalInr);
    summaryButton.disabled = result.items.length === 0;
    summaryButton.onclick = () => { summary.textContent = orderSummary(result); };
  } catch (problem) {
    error.textContent = problem.message;
    summaryButton.disabled = true;
  }
}
menu.addEventListener('input', renderCart);
renderCart();
