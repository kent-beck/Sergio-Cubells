import { Car } from "../../types";
import "./styles.css";

interface Props {
  carItem: Car;
  onClick?: (car: Car) => void;
}

const CarItem = ({ carItem, onClick }: Props) => {
  const { id, title, image, euroPrice } = carItem;

  const handleClick = () => {
    onClick && onClick(carItem);
  };

  return (
    <section className="carItemSection" key={id} onClick={handleClick}>
      <div className="carItemContent">
        <img className="carItemImage" src={image} alt={`Image for ${title}`} />
        <main className="carItemTextContainer">
          <div className="carItemTitle">{title}</div>
          <div className="carItemFrom">desde</div>
          <div className="carItemPrice">{euroPrice}</div>
        </main>
      </div>
    </section>
  );
};

export default CarItem;
