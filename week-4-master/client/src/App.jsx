import React from "react";
import "./App.css";
import Card from "./components/Card";
import Login from "./pages/Login";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Cube from "./ui/Cube";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cube" element={<Cube />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
