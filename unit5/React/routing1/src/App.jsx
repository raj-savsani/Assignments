import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:userid" element={<UserDetails />}></Route>
        <Route path="*" element={<div> 404 no page found </div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
