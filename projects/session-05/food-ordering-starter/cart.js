export const MENU = Object.freeze({
  dosa: Object.freeze({name: 'Dosa', priceInr: 40}),
  tea: Object.freeze({name: 'Tea', priceInr: 20}),
  idli: Object.freeze({name: 'Idli plate', priceInr: 30}),
});

export function calculateCart(cart) {
  if (!cart || Array.isArray(cart) || typeof cart !== 'object') {
    throw new TypeError('Cart must be an object of item IDs and quantities.');
  }
  const items = [];
  for (const [itemId, quantity] of Object.entries(cart)) {
    if (!Object.hasOwn(MENU, itemId)) throw new RangeError('Unknown menu item.');
    if (!Number.isInteger(quantity) || quantity < 0 || quantity > 10) {
      throw new RangeError('Quantity must be an integer from 0 to 10.');
    }
    if (quantity === 0) continue;
    const item = MENU[itemId];
    const subtotal = item.priceInr;
    items.push({itemId, name: item.name, quantity, unitPriceInr: item.priceInr, subtotalInr: subtotal});
  }
  return {items, totalInr: items.reduce((total, item) => total + item.subtotalInr, 0), currency: 'INR', simulation: true};
}

export function orderSummary(result) {
  return result.items.length
    ? result.items.map(item => `${item.quantity} × ${item.name}`).join(', ') + ` — INR ${result.totalInr} (simulation)`
    : 'Your cart is empty.';
}
