import React from "react";
import useNewCarForm from "../../hooks/useNewCarForm";
import { Car } from "../../types";
import "./styles.css";
import ClosePng from "../../assets/close.png";

interface FormProps {
  onNewCar: (newCar: Car) => void;
  onClose: () => void;
  isVisible: boolean;
}

const NewCarForm = ({ onNewCar, isVisible, onClose }: FormProps) => {
  const { formState, changeValue } = useNewCarForm();
  const { title, euroPrice, image, description } = formState;

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNewCar(formState);
    onClose();
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    changeValue(name, value);
  };

  return (
    <>
      {isVisible ? (
        <div className="modalContainer">
          <form className="newCarForm" onSubmit={handleSubmit}>
            <div className="formTitleContainer">
              <div className="formTitleText">Nuevo Coche</div>
              <img
                data-testid="closeFormIcon"
                className="closeFormIcon"
                src={ClosePng}
                onClick={onClose}
              />
            </div>
            <input
              data-testid="inputForm"
              className="inputBorderBottom"
              onChange={handleChange}
              value={title}
              type="text"
              name="title"
              placeholder="Nombre del coche"
            />
            <input
              data-testid="inputForm"
              className="inputBorderBottom"
              onChange={handleChange}
              value={euroPrice}
              type="text"
              name="euroPrice"
              placeholder="Precio en Euros"
            />
            <input
              data-testid="inputForm"
              className="inputBorderBottom"
              onChange={handleChange}
              value={image}
              type="text"
              name="image"
              placeholder="Url de la imagen"
            />
            <textarea
              data-testid="textAreaForm"
              className="inputBorderBottom"
              onChange={handleChange}
              value={description}
              name="description"
              placeholder="Descripción"
            />
            <button
              data-testid="saveCarButton"
              className="addCarButton"
              type="submit"
            >
              Guardar
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default NewCarForm;
