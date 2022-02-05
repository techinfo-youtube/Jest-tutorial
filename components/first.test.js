test("my test 1", () => {
  expect(3 + 3).toBe(6);
});

it("my second test", () => {
  expect(1 + 1).toBe(2);
});

describe("group 1", () => {
  test("first", () => {
    expect(3 + 3).toBe(6);
  });

  it("second", () => {
    expect(1 + 1).toBe(2);
  });
});

describe("group 2", () => {
  test("third", () => {
    expect(3 + 3).toBe(6);
  });

  it("fourth", () => {
    expect(1 + 1).toBe(2);
  });
});
