// falsy = false 0 null undefined NaN ""

let a;

test("first", () => {
  expect(a).not.toBeNull();
  expect(a).toBeUndefined();
  expect(a).toBeFalsy();
  expect(a).not.toBeTruthy();
});
