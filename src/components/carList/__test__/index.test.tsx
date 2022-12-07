import { render, screen } from "@testing-library/react";
import List from "..";
import { Car } from "../../../types";

describe("Renders a ", () => {
  const carList: Car[] = [
    {
      id: "0",
      title: "Coche",
      euroPrice: "29.870 €",
      image: "someImageUrl",
    },
    {
      id: "1",
      title: "Coche",
      euroPrice: "39.170 €",
      image: "someImageUrl",
    },
  ];

  test("Car list", () => {
    const tree = render(<List carList={carList} />).asFragment();
    expect(tree).toMatchSnapshot();
  });

  test("2 cars", () => {
    render(<List carList={carList} />);

    const expectedCars = 2;

    const result = screen.getAllByText("Coche");

    expect(result.length).toBe(expectedCars);
  });
});
