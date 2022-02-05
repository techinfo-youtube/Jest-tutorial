let myVar = 4;
function add(x, y) {
  return x + y;
}

test("second test", () => {
  let myVar2 = 2;
  expect(myVar2).toBe(2);
});

test("addition", () => {
  expect(add(2, 4)).toBe(4);
});
