import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home/Home";
import Landing from "./Views/Landing/Landing";
import Detail from "./Views/Details/Detail";
import Create from "./Views/Create/Create";
import AboutMe from "./Views/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
