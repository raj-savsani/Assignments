import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(() => todos.filter((el) => el.id !== id));
  };

  const handleToggle = (id) => {
    let newtodos = todos.map((el) => {
      if (el.id === id && el.status === false) {
        el.status = true;
        return el;
      } else if (el.id === id && el.status === true) {
        el.status = false;
        return el;
      } else {
        return el;
      }
    });

    setTodos([...newtodos]);
  };

  const clearCompleted = () => {
    let taskLeft = todos.filter((el) => el.status === false);
    setTodos([...taskLeft]);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        handleToggle,
        clearCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
