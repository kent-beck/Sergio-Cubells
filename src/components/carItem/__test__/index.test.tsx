import { render, screen } from "@testing-library/react";
import CarItem from "..";
import { Car } from "../../../types";

describe("Renders a ", () => {
  const carItem: Car = {
    id: "0",
    title: "Coche",
    euroPrice: "29.870 €",
    image: "someImageUrl",
  };

  test("Car item", () => {
    const tree = render(<CarItem carItem={carItem} />).asFragment();
    expect(tree).toMatchSnapshot();
  });

  test("euro price text", () => {
    render(<CarItem carItem={carItem} />);

    const euroPriceTextElement = screen.getByText(/29.870 €/i);

    expect(euroPriceTextElement).toBeInTheDocument();
  });

  test("from text", () => {
    render(<CarItem carItem={carItem} />);

    const desdeTextElement = screen.getByText(/desde/i);

    expect(desdeTextElement).toBeInTheDocument();
  });

  test("title text", () => {
    render(<CarItem carItem={carItem} />);

    const titleTextElement = screen.getByText(/Coche/i);

    expect(titleTextElement).toBeInTheDocument();
  });

  test("alt image", () => {
    render(<CarItem carItem={carItem} />);

    const testImage = document.querySelector("img") as HTMLImageElement;

    expect(testImage.alt).toContain("Image for Coche");
  });

  test("src image", () => {
    render(<CarItem carItem={carItem} />);

    const testImage = document.querySelector("img") as HTMLImageElement;

    expect(testImage.src).toContain("http://localhost/someImageUrl");
  });
});
