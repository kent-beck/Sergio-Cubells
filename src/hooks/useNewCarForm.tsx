import { useCallback, useReducer } from "react";
import { Car, ChangeValuePayload } from "../types";

type FormReducerAction =
  | {
      type: "change_value";
      payload: ChangeValuePayload;
    }
  | { type: "clear" };

export const CAR_INITIAL_STATE = {
  title: "",
  euroPrice: "",
  image: "",
  description: "",
};

export const getChangedValue = (state: Car, payload: ChangeValuePayload) => {
  const { inputName, inputValue } = payload;
  return {
    ...state,
    [inputName]: inputValue,
  };
};

const formReducer = (state: Car, action: FormReducerAction) => {
  switch (action.type) {
    case "change_value":
      return getChangedValue(state, action.payload);
    case "clear":
      return CAR_INITIAL_STATE;
  }
};

const useNewCarForm = () => {
  const [inputValues, dispatch] = useReducer(formReducer, CAR_INITIAL_STATE);

  const clearForm = useCallback(() => dispatch({ type: "clear" }), []);

  const changeValue = useCallback(
    (name: string, value: string) =>
      dispatch({
        type: "change_value",
        payload: {
          inputName: name,
          inputValue: value,
        },
      }),
    []
  );

  return {
    formState: inputValues,
    clearForm,
    changeValue,
  };
};

export default useNewCarForm;
