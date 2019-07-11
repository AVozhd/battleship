import genCharArray from "./genCharArray.js";

describe("test genCharArray", () => {
  it("generate chars array", () => {
    expect(genCharArray()).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J"
    ]);
  });
});
