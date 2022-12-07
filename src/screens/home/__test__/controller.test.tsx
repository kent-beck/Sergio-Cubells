import { filterFunction } from "../controller";
import { Car } from "../../../types";

describe("filter function", () => {
  test("falsy case", () => {
    const car: Car = { title: "Ibiza", euroPrice: "34.899 €", image: "" };
    const valueToFilter = "Hola";

    const result = filterFunction(car, valueToFilter);

    expect(result).toBeFalsy();
  });

  test("truthy case", () => {
    const car: Car = { title: "Ibiza", euroPrice: "34.899 €", image: "" };
    const valueToFilter = "biza";

    const result = filterFunction(car, valueToFilter);

    expect(result).toBeTruthy();
  });

  test("empty case", () => {
    const car: Car = { title: "Ibiza", euroPrice: "34.899 €", image: "" };
    const valueToFilter = "";

    const result = filterFunction(car, valueToFilter);

    expect(result).toBeTruthy();
  });
});
