import { Car } from "../types";

const postNewCar = async (newCar : Car) : Promise<Car> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify(newCar);
    
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    return await fetch("http://localhost:3000/car", requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));
  };
  
  export default postNewCar;
  