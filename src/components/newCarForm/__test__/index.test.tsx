import { fireEvent, render, screen } from "@testing-library/react";
import NewCarForm from "..";
import HeaderDetail from "..";
import { CAR_INITIAL_STATE } from "../../../hooks/useNewCarForm";

const onCloseSpy = jest.fn();
const onNewCar = jest.fn();

const newCarForm = (
  <NewCarForm isVisible={true} onClose={onCloseSpy} onNewCar={onNewCar} />
);

describe("Render a ", () => {
  test("New Car Form", () => {
    const tree = render(newCarForm).asFragment();
    expect(tree).toMatchSnapshot();
  });

  test("empty fragment, form is not visible", () => {
    const tree = render(
      <NewCarForm isVisible={false} onClose={onCloseSpy} onNewCar={onNewCar} />
    ).asFragment();

    expect(tree).toBeInstanceOf(DocumentFragment);
    expect(tree.childNodes.length).toBe(0);
  });

  test("new car text", () => {
    render(newCarForm);

    const newCarTextElement = screen.getByText("Nuevo Coche");

    expect(newCarTextElement).toBeInTheDocument();
  });

  test("save text", () => {
    render(newCarForm);

    const saveTextElement = screen.getByText("Guardar");

    expect(saveTextElement).toBeInTheDocument();
  });

  test(" 3 inputs ", () => {
    render(newCarForm);

    const inputFormList = screen.getAllByTestId("inputForm");

    expect(inputFormList.length).toBe(3);
  });

  test(" a textArea", () => {
    render(newCarForm);

    const textAreaList = screen.getAllByTestId("textAreaForm");

    expect(textAreaList.length).toBe(1);
    expect(textAreaList[0]).toBeInstanceOf(HTMLTextAreaElement);
  });
});

describe("Click on back icon", () => {
  test("close icon called", () => {
    render(newCarForm);

    const closeFormIcon = screen.getByTestId("closeFormIcon");

    fireEvent.click(closeFormIcon);

    expect(onCloseSpy).toBeCalled();
  });

  describe("saveCarButton clicked", () => {
    test("onClose is called", () => {
      render(newCarForm);

      const saveCarButton = screen.getByTestId("saveCarButton");

      fireEvent.click(saveCarButton);

      expect(onCloseSpy).toBeCalled();
    });

    test("onNewCar is called", () => {
      render(newCarForm);

      const saveCarButton = screen.getByTestId("saveCarButton");

      fireEvent.click(saveCarButton);

      expect(onNewCar).toBeCalled();
      expect(onNewCar).toBeCalledWith(CAR_INITIAL_STATE);
    });
  });
});
