const getAllCars = async () => {
  return await fetch("http://localhost:3000/car")
    .then((res) => res.json())
    .then((carList) => {
      return carList;
    });
};

export default getAllCars;
