import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import ListUsers from "./components/ListUsers";

function App() {
  // useEffect(() => {
  //   getData();
  // });

  // const getData = async () => {
  //   let {data} = await axios.get("https://listdatabase.herokuapp.com/user");
  //   console.log(data);
  // };

  return <div className="App">
    <ListUsers />
    </div>;
}

export default App;
