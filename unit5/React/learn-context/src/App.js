import React, { createContext } from "react";
import CompA from "./components/CompA";

export const NameContext = createContext();

function App() {

  const name = {
    fname:"Raj",
    lname:"Savsani"
  }

  return (
    <div className="App">
      <NameContext.Provider value={{name}} >
        <CompA />
      </NameContext.Provider>
    </div>
  );
}

export default App;
