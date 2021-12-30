import "./App.css";
import { useState } from "react";
import Timer from "./components/Timer";

import Todo from "./components/Todo";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <Timer intial={5} goTill={20}/>
      {/* {show ? <Timer /> : null} */}
      {/* <Todo/> */}
      {/* { show ? } */}
      {/* <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? `hide` : `show`}
      </button> */}
    </div>
  );
}

export default App;
