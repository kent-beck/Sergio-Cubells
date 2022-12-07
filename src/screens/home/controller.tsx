import { Car } from "../../types";

export const filterFunction = (car: Car, valueToFilter: string) => {
  const condition = car.title
    .toUpperCase()
    .includes(valueToFilter.toUpperCase());
  return condition;
};
