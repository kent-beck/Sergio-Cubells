import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import ContentDetail from "../../components/contentDetail";
import HeaderDetail from "../../components/headerDetail";
import RotableImage from "../../components/rotableImage";
import getCarFromId from "../../services/getCarFromId";
import { Car } from "../../types";
import deleteCar from "../../services/deleteCar";
import "./styles.css";
import { CAR_INITIAL_STATE } from "../../hooks/useNewCarForm";

const DetailScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [car, setCar] = useState<Car>(CAR_INITIAL_STATE);
  const navigate = useNavigate();

  const { title, imageList, euroPrice, id } = car;

  const getCarFromApi = async () => {
    const carId = searchParams.get("id");

    if (carId) {
      const result = await getCarFromId(carId);

      setCar(result);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();

    getCarFromApi();

    return () => {
      abortController.abort();
    };
  }, []);

  const handleDeleteCar = () => {
    //TODO: make a confirm modal to avoid user mitakes.
    if (id) {
      deleteCar(id);
      navigate("/");
    }
  };

  return (
    <div className="detailContainer">
      <HeaderDetail title={title} />
      <div className="detailBodyContainer">
        {imageList ? <RotableImage imageList={imageList} /> : null}
        {euroPrice ? <ContentDetail car={car} /> : null}
        <div className="deleteCarContainer">
          <a onClick={handleDeleteCar} className="deleteCarText">
            Eliminar coche
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
