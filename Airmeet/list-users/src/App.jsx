import axios from "axios";
import { useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import Favourite from "./components/Favourite";
import ListUsers from "./components/ListUsers";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListUsers />}></Route>
        <Route path="/favourite" element={<Favourite />}></Route>
      </Routes>
    </div>
  );
}

export default App;
