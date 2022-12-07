import { Car, ChangeValuePayload } from "../../types";
import { getChangedValue } from "../useNewCarForm";

describe("getChangedValue", () => {
  test("succesfully case", () => {
    const expectedResult = {
      title: "Furgoneta",
      euroPrice: "34.689 €",
      image: "",
    };

    const state: Car = { title: "coche", euroPrice: "34.689 €", image: "" };
    const newTitle = "Furgoneta";
    const payload: ChangeValuePayload = {
      inputName: "title",
      inputValue: newTitle,
    };

    const result = getChangedValue(state, payload);

    expect(result).toEqual(expectedResult);
  });

  test("empty title case", () => {
    const expectedResult = {
      title: "Furgoneta",
      euroPrice: "",
      image: "",
    };

    const state: Car = { title: "", euroPrice: "", image: "" };
    const newTitle = "Furgoneta";
    const payload: ChangeValuePayload = {
      inputName: "title",
      inputValue: newTitle,
    };

    const result = getChangedValue(state, payload);

    expect(result).toEqual(expectedResult);
  });

  test("wrong case", () => {
    const notExpectedTitle = "coche";
    const state: Car = { title: "coche", euroPrice: "34.689 €", image: "" };

    const newTitle = "Furgoneta";
    const payload: ChangeValuePayload = {
      inputName: "title",
      inputValue: newTitle,
    };

    const result = getChangedValue(state, payload);
    const titleFromResult = result.title;

    expect(titleFromResult).not.toBe(notExpectedTitle);
  });
});
