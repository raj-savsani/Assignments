import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import axios from "axios";

import {
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getData,
} from "../Feature/Todos/action";

function Todo() {
  const [text, setText] = useState("");
  const { loading, error, todos } = useSelector(
    (state) => ({
      loading: state.todosState.loading,
      error: state.todosState.error,
      todos: state.todosState.todos,
    }),
    function (prev, curr) {
      if (prev.loading === curr.loading && prev.error === curr.error) {
        return true;
      } else {
        return false;
      }
    }
  );
  const dispatch = useDispatch();
  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    dispatch(getData());
  }

  const addTodo = () => {
    dispatch(addTodoLoading());
    fetch("http://localhost:3006/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: text, status: false }),
    })
      .then((d) => d.json())
      .then((res) => {
        dispatch(addTodoSuccess(res));
        getTodos();
        setText("");
      })
      .catch((err) => {
        dispatch(addTodoError(err));
      });
  };

  const deleteTodo = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3006/todos/${id}`);

      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error...</div>
  ) : (
    <div>
      <Input
        autoFocus
        value={text}
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={addTodo}>Add Todo</Button>
      <div>
        {todos.map((todo) => (
          <Div key={todo.id}>
            {todo.title} - {todo.status ? "Done" : "Not Done"}
            <Button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete Task
            </Button>
          </Div>
        ))}
      </div>
    </div>
  );
}

export default Todo;

const Input = styled.input`
  font-size: 15px;
  margin: 5px;
  padding: 5px;
`;

const Button = styled.button`
  background-color: #baabda;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  padding: 5px;
  margin: 5px;
`;

const Div = styled.div`
  background-color: #d6e5fa;
  margin: 10px;
  font-size: 20px;
`;
