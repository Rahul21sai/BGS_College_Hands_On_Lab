import test from 'node:test';
import assert from 'node:assert/strict';
import {calculateCart, orderSummary} from './cart.js';

test('an empty cart totals zero and has a useful summary', () => {
  const result = calculateCart({});
  assert.equal(result.totalInr, 0);
  assert.deepEqual(result.items, []);
  assert.equal(orderSummary(result), 'Your cart is empty.');
});

test('one dosa and one tea use their stated prices', () => {
  const result = calculateCart({dosa: 1, tea: 1});
  assert.equal(result.totalInr, 60);
  assert.equal(result.currency, 'INR');
  assert.equal(result.simulation, true);
});

test('quantity contributes to each subtotal and total', () => {
  const result = calculateCart({dosa: 2, tea: 1});
  assert.equal(result.items[0].subtotalInr, 80);
  assert.equal(result.totalInr, 100);
  assert.equal(orderSummary(result), '2 × Dosa, 1 × Tea — INR 100 (simulation)');
});

test('zero quantity removes a line', () => {
  assert.deepEqual(calculateCart({dosa: 0}).items, []);
});

test('unknown item IDs are rejected', () => {
  assert.throws(() => calculateCart({burger: 1}), /Unknown menu item/);
});

test('negative, fractional, excessive and nonnumeric quantities are rejected', () => {
  for (const quantity of [-1, 1.5, 11, '2', true, null, NaN]) {
    assert.throws(() => calculateCart({dosa: quantity}), /Quantity must/);
  }
});

test('invalid cart containers are rejected', () => {
  for (const cart of [null, [], 'dosa', 1]) {
    assert.throws(() => calculateCart(cart), /Cart must/);
  }
});
