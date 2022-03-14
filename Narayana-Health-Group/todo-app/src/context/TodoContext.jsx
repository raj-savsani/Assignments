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

  const handleToggle = (id, status) => {
    if (!status) {
      let completed = todos.filter((el) => el.id === id);
      let inCompleted = todos.filter((el) => el.id !== completed.id);

      setTodos(inCompleted);
      setCompletedTodos([...completedtodos, completed]);
    } else {
      let inCompleted = completedtodos.filter((el) => el.id === id);
      let completed = completedtodos.filter((el) => el.id !== inCompleted.id);

      setTodos([...todos, inCompleted]);
      setCompletedTodos(completed);
    }
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, addToCompleted, deleteTodo, handleToggle }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
