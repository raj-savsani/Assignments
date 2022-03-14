import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { Table, Tag, Space } from "antd";

function ListTodos() {
  const { todos } = useContext(TodoContext);
  console.log("todos:", todos);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.name}</td>
              <td>{todo.date}</td>
              <td>{todo.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListTodos;
