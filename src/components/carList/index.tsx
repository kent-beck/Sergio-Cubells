import { Car } from "../../types";
import CarItem from "../carItem";
import "./styles.css";

interface Props {
  carList: Array<Car>;
  onClickItem?: (car: Car) => void;
}

const List = ({ carList, onClickItem }: Props) => {
  return (
    <div className="carListContainer">
      {carList.map((car) => {
        return <CarItem key={car.id} carItem={car} onClick={onClickItem} />;
      })}
    </div>
  );
};

export default List;
