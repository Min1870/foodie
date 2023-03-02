import "./index.css";
import { Routes, Route } from "react-router-dom";
import Meals from "./pages/Meals";
import Detail from "./pages/Detail";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Meals />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
