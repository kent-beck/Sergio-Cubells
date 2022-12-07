# Welcome to Seat Code

This project is a Technical Test with React and TypeScript.

We are using json-server to mocked a local api.

## Available Scripts

In the project directory, you can run:

### `json-server db.json`

Runs a json-server to consume the api created in this project.
The json-server will start at [http://localhost:3000](http://localhost:3000).

#### Available endpoints used in the project:

- getAllCars GET [http://localhost:3000/car](http://localhost:3000/car)
- getCarFromId GET http://localhost:3000/car/id
- deleteCar DELETE http://localhost:3000/car/id
- patchCar PATCH http://localhost:3000/car/id
- postNewCar POST http://localhost:3000/car

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

Because json-server is running in port 3000, be sure to run npm start in another port. by default 3001 if you press enter.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

To launch all the test files.\
