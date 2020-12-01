import React, { useContext } from "react";
import { TodoListContext } from "./TodoListContext";
import AddList from "./AddList";
import TodoList from "./TodoList";
import "./Panel.css";

function Panel() {
  const { todoListsContext } = React.useContext(TodoListContext);
  const [todoLists, setTodoLists] = todoListsContext;

  function getTodoLists() {
    const sortedLists = [...todoLists];
    sortedLists.sort((a, b) => a.key - b.key);
    console.log(sortedLists);

    const tdLists = sortedLists.map((todoList) => {
      console.log(`1 list: ${todoList.id}`);
      return <TodoList todoList={todoList} />;
    });
    return tdLists;
  }

  return (
    <div className="panel">
      <div className="panel-todo-cards">
        {getTodoLists()}
        <AddList />
      </div>
    </div>
  );
}
export default Panel;
