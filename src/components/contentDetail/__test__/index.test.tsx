import { render, screen } from "@testing-library/react";
import ContentDetail from "..";
import { Car } from "../../../types";

describe("Renders a ", () => {
  const carItem: Car = {
    title: "Coche",
    euroPrice: "29.870 €",
    image: "someImageUrl",
    description: "someDescription",
  };

  test("Content Detail", () => {
    const tree = render(<ContentDetail car={carItem} />).asFragment();
    expect(tree).toMatchSnapshot();
  });

  test("euro price text", () => {
    render(<ContentDetail car={carItem} />);

    const euroPriceTextElement = screen.getByText(/29.870 €/i);

    expect(euroPriceTextElement).toBeInTheDocument();
  });

  test("description text", () => {
    render(<ContentDetail car={carItem} />);

    const descriptionTextElement = screen.getByText(/someDescription/i);

    expect(descriptionTextElement).toBeInTheDocument();
  });

  test("from text", () => {
    render(<ContentDetail car={carItem} />);

    const desdeTextElement = screen.getByText(/desde/i);

    expect(desdeTextElement).toBeInTheDocument();
  });

  test("alt image", () => {
    render(<ContentDetail car={carItem} />);

    const testImage = document.querySelector("img") as HTMLImageElement;

    expect(testImage.alt).toContain("Image for Coche");
  });

  test("src image", () => {
    render(<ContentDetail car={carItem} />);

    const testImage = document.querySelector("img") as HTMLImageElement;

    expect(testImage.src).toContain("http://localhost/someImageUrl");
  });
});
