import React, { useState, createContext, useEffect } from "react";
import { todoListsDefault } from "./InitialData";

export const TodoListContext = createContext();

export function TodoListProvider(props) {
  const [todoLists, setTodoLists] = useState(todoListsDefault);
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    let allTds = todoLists.map((list) => list.todos);
    allTds = [].concat(...allTds);
    setAllTodos(allTds);
  }, [todoLists]);

  return (
    <TodoListContext.Provider
      value={{
        todoListsContext: [todoLists, setTodoLists],
        allTodosContext: [allTodos, setAllTodos],
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
}
