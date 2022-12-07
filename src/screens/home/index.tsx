import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "../../components/carList";
import FloatingPlusButton from "../../components/floatingPlusButton";
import NewCarForm from "../../components/newCarForm";
import getAllCars from "../../services/getAllCars";
import postNewCar from "../../services/postNewCar";
import { Car } from "../../types";
import { filterFunction } from "./controller";
import "./styles.css";

const HomeScreen = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [carList, setCarList] = useState<Car[]>([]);
  const [filteredCarList, setFilteredCarList] = useState<Car[]>([]);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  const navigate = useNavigate();

  const setAllCarsFromApi = async () => {
    const carListFromApi = await getAllCars();
    setCarList(carListFromApi);
  };

  useEffect(() => {
    setAllCarsFromApi();
  }, []);

  useEffect(() => {
    filterCarList({
      carList: carList,
      setFilteredCarList: setFilteredCarList,
      valueToFilter: searchValue,
    });
  }, [carList]);

  const filterCarList = ({
    carList,
    setFilteredCarList,
    valueToFilter,
  }: {
    carList: Car[];
    setFilteredCarList: (carList: Car[]) => void;
    valueToFilter: string;
  }) => {
    const filterList = carList.filter((car) =>
      filterFunction(car, valueToFilter)
    );

    setFilteredCarList(filterList);
  };

  const handleNewCar = async (newCar: Car) => {
    const newCarFromApi = await postNewCar(newCar);
    setCarList((carList) => [...carList, newCarFromApi]);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleOnClickCar = (car: Car) => {
    navigate(`../car?id=${car.id}`);
  };

  const handleOnPlusIcon = () => {
    setIsFormVisible(true);
  };

  const handleOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    filterCarList({
      carList: carList,
      setFilteredCarList: setFilteredCarList,
      valueToFilter: value,
    });
  };

  return (
    <div className="homeContainer">
      <h1>Selecciona tu nuevo modelo SEAT</h1>
      <div className="searchBarContainer">
        <input
          className="inputBorderBottom"
          placeholder="Buscar..."
          onChange={handleOnChangeSearch}
        />
      </div>

      <List carList={filteredCarList} onClickItem={handleOnClickCar} />
      <FloatingPlusButton onClick={handleOnPlusIcon} />
      <NewCarForm
        onNewCar={handleNewCar}
        isVisible={isFormVisible}
        onClose={handleCloseForm}
      />
    </div>
  );
};

export default HomeScreen;
