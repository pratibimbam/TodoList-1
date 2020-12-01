import React, { useState, createContext, useEffect } from "react";
import { todoListsDefault } from "./InitialData";

export const TodoListContext = createContext();

export function TodoListProvider(props) {
  const [todoLists, setTodoLists] = useState(todoListsDefault);

  useEffect(() => {
    const localData = localStorage.getItem("todoLists");
    if (localData) {
      setTodoLists(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoLists", JSON.stringify(todoLists));
  }, [todoLists]);

  return (
    <TodoListContext.Provider
      value={{
        todoListsContext: [todoLists, setTodoLists],
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
}
