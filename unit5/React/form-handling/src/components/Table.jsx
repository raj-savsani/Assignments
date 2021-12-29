import React from "react";
import TableBody from "./TableBody";
import("./CSS/Table.css");

function Table({ formdata }) {
  console.log("formdata:", formdata);

  return (
    <div className="table-div">
      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Address</td>
            <td>Department</td>
            <td>Salary</td>
            <td>Marital state</td>
            <td>Profile photo</td>
          </tr>
        </thead>
        <tbody>
          <TableBody formdata={formdata} />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
