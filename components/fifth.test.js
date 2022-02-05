var numbers = [
  [1, 2, 3],
  [2, 2, 4],
  [3, 2, 5],
];

function add(x, y) {
  return x + y;
}

test.each(numbers)("Add %i to %i should be %i", (a, b, total) => {
  expect(add(a, b)).toBe(total);
});
