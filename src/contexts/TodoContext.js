import React, { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [inputVal, setInputVal] = useState("");
  const [visibleTodos, setVisibleTodos] = useState([]);
  const [todoSwitch, setTodoSwitch] = useState("All");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setVisibleTodos(...todos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setVisibleTodos(
      todoSwitch === "All"
        ? todos
        : todoSwitch === "Completed"
        ? todos.map((item) => {
            return item.completed === true;
          })
        : todos.map((item) => {
            return item.completed === false;
          }),
    );
  }, [todoSwitch]);

  const formSubmitHandler = (e) => {
    const value = inputVal;
    e.preventDefault();
    if (inputVal !== "") {
      const newId = uuidv4();
      console.log(newId);
      setTodos([...todos, { name: value, id: newId, completed: false }]);
      setInputVal("");
    }
  };

  const removeHandler = (item) => {
    const newTodos = todos.filter((todo) => todo.id !== item.id);
    setTodos(newTodos);
  };

  const checkBoxHandler = (item) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === item.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    );
  };

  console.log(todos);

  const changeHandler = (e) => {
    setInputVal(e.target.value);
  };

  const values = {
    todos,
    setTodos,
    changeHandler,
    formSubmitHandler,
    inputVal,
    setInputVal,
    removeHandler,
    checkBoxHandler,
    visibleTodos,
    setVisibleTodos,
    todoSwitch,
    setTodoSwitch,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
