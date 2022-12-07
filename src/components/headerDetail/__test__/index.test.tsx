import { fireEvent, render, screen } from "@testing-library/react";
import HeaderDetail from "..";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("Render a ", () => {
  const title = "Nuevo titulo";

  test("headerDetail", () => {
    const tree = render(<HeaderDetail title="Nuevo Titulo" />).asFragment();
    expect(tree).toMatchSnapshot();
  });

  test("header title", () => {
    render(<HeaderDetail title={title} />).asFragment();

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test("alt image", () => {
    render(<HeaderDetail title={title} />);

    const testImage = document.querySelector("img") as HTMLImageElement;

    expect(testImage.alt).toContain("Back icon");
  });

  test("back icon src", () => {
    render(<HeaderDetail title={title} />);

    const testImage = document.querySelector("img") as HTMLImageElement;

    expect(testImage.src).toContain(
      "https://configurador.seat.es/seat-cc/assets/icons/unofficial/flat-arrow-left.svg"
    );
  });
});

describe("Click on back icon", () => {
  test("use navigate is called", () => {
    render(<HeaderDetail title="Nuevo Titulo" />);

    const backIcon = screen.getByTestId("backIcon");

    fireEvent.click(backIcon);

    expect(mockedUseNavigate).toBeCalled();
  });

  test("use navigate is called with /", () => {
    render(<HeaderDetail title="Nuevo Titulo" />);

    const backIcon = screen.getByTestId("backIcon");

    fireEvent.click(backIcon);

    expect(mockedUseNavigate).toBeCalledWith("/");
  });
});
