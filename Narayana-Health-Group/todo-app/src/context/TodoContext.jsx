import React, { createContext, useContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [completedtodos, setCompletedTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const addToCompleted = (todo) => {
    setCompletedTodos([...completedtodos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(() => todos.filter((el) => el.id !== id));
    setCompletedTodos(() => completedtodos.filter((el) => el.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, addToCompleted, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
