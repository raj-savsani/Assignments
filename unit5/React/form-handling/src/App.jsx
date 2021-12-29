import React, { useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";


function App() {
  const [formdata, setFromdata] = React.useState([]);

  return (
    <div className="App">
      <Form formdata={formdata} setFromdata={setFromdata}/>
      <Table formdata={formdata}/>
    </div>
  );
}

export default App;
