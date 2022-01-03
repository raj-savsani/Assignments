import React from "react";

function TableBody({ data }) {
  console.log('data:', data)
  return (
    <>
      {data.map((person) => (
        <tr key={person.id}>
          <td>{person.name}</td>
          <td>{person.age}</td>
          <td>{person.address}</td>
          <td>{person.department}</td>
          <td>{person.salary}</td>
          <td>{person.marital}</td>
          <td>{person.photo}</td>
        </tr>
      ))}
    </>
  );
}

export default TableBody;
