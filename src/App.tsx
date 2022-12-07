import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DetailScreen from "./screens/detail";
import HomeScreen from "./screens/home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/car" element={<DetailScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
