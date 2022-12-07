import { render, screen } from "@testing-library/react";
import HomeScreen from "..";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

test("renders Home title", () => {
  render(<HomeScreen />);
  const titleElement = screen.getByText(/Selecciona tu nuevo modelo SEAT/i);
  expect(titleElement).toBeInTheDocument();
});
