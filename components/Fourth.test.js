test("first", () => {
  console.log("first");
});
// test.only("second", () => {
//   console.log("second");
// });

// jest.setTimeout(15000)

test("second", () => {
  console.log("second");
}, 3000);
test.skip("third", () => {
  console.log("third");
});
test("fourth", () => {
  console.log("fourth");
});
