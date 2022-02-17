import React, { useContext } from "react";
import { NameContext } from "../App";

function CompC() {


    const  {name} = useContext(NameContext)
    


  return <h1>My FistName is {name.fname} , Last name is {name.lname}</h1>;
}

export default CompC;
