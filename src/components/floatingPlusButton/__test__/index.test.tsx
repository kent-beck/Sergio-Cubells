import { fireEvent, render, screen } from "@testing-library/react";
import FloatingPlusButton from "..";

test("Render a floating plus button", () => {
  const tree = render(<FloatingPlusButton onClick={() => {}} />).asFragment();
  expect(tree).toMatchSnapshot();
});

describe("onClick Floating button", () => {
  const onClickSpy = jest.fn();

  test("onClick is called", () => {
    render(<FloatingPlusButton onClick={onClickSpy} />);
    const floatingPlusButton = screen.getByTestId("floatingPlusButton");
    fireEvent.click(floatingPlusButton);

    expect(onClickSpy).toBeCalled();
  });

  test("onClick is called 3 times", () => {
    render(<FloatingPlusButton onClick={onClickSpy} />);
    const floatingPlusButton = screen.getByTestId("floatingPlusButton");

    fireEvent.click(floatingPlusButton);
    fireEvent.click(floatingPlusButton);
    fireEvent.click(floatingPlusButton);

    expect(onClickSpy).toBeCalledTimes(3);
  });
});
