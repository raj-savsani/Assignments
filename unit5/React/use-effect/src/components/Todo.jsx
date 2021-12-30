import React, { useState, useEffect } from "react";
// import { useState } from "react/cjs/react.development";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTodo();
  }, [page]);

  const getTodo = () => {
    fetch(`http://localhost:3006/todos?_page=${page}&_limit=3`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setTodos(response);
      });
  };

  const addTodo = () => {
    const payload = {
      title: text,
      status: false,
    };

    fetch("http://localhost:3006/todos", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "content-type": "application/json" },
    });
    getTodo();
    setText("");
  };

  
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Todo"
      ></input>
      <button onClick={addTodo}>ADD TODO</button>
      <div>
        {todos.map((todo) => (
          <h3 key={todo.id}>{todo.title}</h3>
        ))}
      </div>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        prev
      </button>
      <button onClick={() => setPage(page + 1)}>next</button>
    </div>
  );
}

export default Todo;
