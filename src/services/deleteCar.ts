import { Car } from "../types";

const deleteCar = async (carId : string) : Promise<Car> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    
    const requestOptions: RequestInit = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    return await fetch(`http://localhost:3000/car/${carId}`, requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));
  };
  
  export default deleteCar;
  