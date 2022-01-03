import React, { useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [formdata, setFormdata] = React.useState([]);
  const [data, setData] = React.useState([]);
  

  return (
    <div className="App">
      <Form
        data={data}
        setData={setData}
        formdata={formdata}
        setFormdata={setFormdata}
      />
      <Table data={data} />
    </div>
  );
}

export default App;
