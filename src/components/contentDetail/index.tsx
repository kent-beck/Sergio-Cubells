import { useState } from "react";
import patchCar from "../../services/patchCar";
import { Car } from "../../types";
import "./styles.css";

const ContentDetail = ({ car }: { car: Car }) => {
  const { title, euroPrice, image, description } = car;

  const [descriptionValue, setDescriptionValue] = useState<string | undefined>(
    description
  );

  const handleOnBlur = () => {
    const updatedCar = { ...car, description: descriptionValue };
    patchCar(updatedCar);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;

    setDescriptionValue(value);
  };

  return (
    <main className="detailContentContainer">
      <img className="detailMainImage" src={image} alt={`Image for ${title}`} />
      <textarea
        className="detailDescriptionTextArea"
        value={descriptionValue}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
      />
      <div className="detailPriceContent">
        <div className="detailPriceFrom">desde</div>
        <div className="detailPrice">{euroPrice}</div>
      </div>
    </main>
  );
};

export default ContentDetail;
