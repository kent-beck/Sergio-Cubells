import getAllCars from "../getAllCars";

describe("getAllCars", () => {
  test("return an array", async () => {
    const result = await getAllCars();

    expect(result).toBeInstanceOf(Array);
  });
});
