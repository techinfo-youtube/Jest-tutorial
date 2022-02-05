let myVal = 4;
let name = "techinfoyt";
let mern = ["mongodb", "expressjs", "React", "Nodejs"];

test("First", () => {
  expect(myVal).toBe(4);
  expect(myVal).toEqual(4);

  expect(myVal).toBeGreaterThan(2);
  expect(myVal).toBeGreaterThanOrEqual(2);

  expect(name).toMatch(/tech/i);
  expect(mern).toContain("vscode");
});
