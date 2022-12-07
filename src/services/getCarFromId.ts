const getCarFromId = async (carId: string) => {
  return await fetch(`http://localhost:3000/car/${carId}`)
    .then((res) => res.json())
    .then((car) => {
      return car;
    }).catch(error => console.log('error', error));
};

export default getCarFromId;
