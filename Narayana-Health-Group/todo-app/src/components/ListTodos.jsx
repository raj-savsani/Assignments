import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

import { Button } from "antd";

function ListTodos() {
  const { todos, completedtodos, handleToggle, deleteTodo,clearCompleted } =
    useContext(TodoContext);
  /*

    */

  return (
    <>
      <Button onClick={clearCompleted} type="primary">Clear All Completed</Button>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              if (!todo.status) {
                return (
                  <tr className="notdone" key={todo.id}>
                    <td>{todo.name}</td>
                    <td>{todo.date}</td>
                    <td>{todo.time}</td>
                    <td>
                      <Button
                        onClick={() => handleToggle(todo.id)}
                        type="primary"
                      >
                        {todo.status ? "Done" : "Not Done"}
                      </Button>
                    </td>
                    <td>
                      <Button
                        style={{ background: "#F44336" }}
                        onClick={() => deleteTodo(todo.id)}
                        type="primary"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              }
            })}
            {todos.map((todo) => {
              if (todo.status) {
                return (
                  <tr className="done" key={todo.id}>
                    <td>{todo.name}</td>
                    <td>{todo.date}</td>
                    <td>{todo.time}</td>
                    <td>
                      <Button
                        style={{ background: "#76FF03" }}
                        onClick={() => handleToggle(todo.id)}
                        type="primary"
                      >
                        {todo.status ? "Done" : "Not Done"}
                      </Button>
                    </td>
                    <td>
                      <Button
                        style={{ background: "#F44336" }}
                        onClick={() => deleteTodo(todo.id)}
                        type="primary"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListTodos;
