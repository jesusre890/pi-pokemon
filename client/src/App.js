import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home/Home";
import Landing from "./Views/Landing/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Detail from "./Views/Details/Detail";
import Create from "./Views/Create/Create";

function App() {
  return (
    <div className="App">
      <h3>app</h3>
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/landing"} element={<Landing />} />
        <Route path={"/detail"} element={<Detail />} />
        <Route path={"/create"} element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
