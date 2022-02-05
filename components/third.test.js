// beforeEach(() => {
//   console.log("before every test");
// });

// beforeAll(() => {
//   console.log("before all test");
// });

afterAll(() => {
  console.log("after test run ");
});

test("first", () => {
  console.log("Inner of first test");
});
test("second", () => {
  console.log("Inner of second test");
});
