import { Car } from "../types";

const patchCar = async (updatedCar : Car) : Promise<Car> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify(updatedCar);
    
    const requestOptions: RequestInit = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const carId = updatedCar.id;
    
    return await fetch(`http://localhost:3000/car/${carId}`, requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));
  };
  
  export default patchCar;
  