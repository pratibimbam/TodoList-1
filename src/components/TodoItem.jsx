import React, { useContext } from "react";
import "./TodoItem.css";
import { FaTrashAlt, FaCheck, FaStar } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { TodoListContext } from "./TodoListContext";

function TodoItem({ todo, todoClassName, todoList }) {
  const { todoListsContext } = useContext(TodoListContext);
  const [todoLists, setTodoLists] = todoListsContext;

  function handleRemove() {
    const newTodoList = {
      ...todoList,
      todos: todoList.todos.filter((td) => td.key !== todo.key),
    };
    setTodoLists((tdLists) => [
      ...tdLists.filter((tdl) => tdl.key !== todoList.key),
      newTodoList,
    ]);
  }

  function handleCheck() {
    //get current todo and change finished to true
    const updatedTodos = todoList.todos.map((el) => {
      if (el.key === todo.key) {
        el.finished = !el.finished;
        el.time = Date.now();
        return { ...el };
      } else return el;
    });

    const newTodoList = {
      ...todoList,
      todos: [...updatedTodos],
    };
    setTodoLists((tdLists) => [
      ...tdLists.filter((tdl) => tdl.key !== todoList.key),
      newTodoList,
    ]);

    // //set Timeout - so the done item will disappear after a period of time
    // setTimeout(function () {
    //   setTodos(todos.filter((el) => el.key !== todo.key)); //kick out current todo, cause its done
    //   setAllTodos(
    //     allTodos.map((el) => ({
    //       ...el,
    //       finished: el.key === todo.key ? !el.finished : el.finished,
    //     }))
    //   );
    // }, 1500);
  }

  function starClickHandler() {
    const updatedPrioTodos = todoList.todos.map((el) => ({
      ...el,
      prio: el.key === todo.key ? !el.prio : el.prio,
    }));

    const newTodoList = {
      ...todoList,
      todos: [...updatedPrioTodos],
    };

    setTodoLists((tdLists) => [
      ...tdLists.filter((tdl) => tdl.key !== todoList.key),
      newTodoList,
    ]);
  }

  function handlePrioStar() {
    if (todo.prio) {
      return "star-active";
    }
    if (!todo.prio) {
      return "star";
    } else return "star";
  }

  return (
    <div className="item-container">
      <span
        className={`${
          !todo.prio ? "todo-item-text-std" : "todo-item-text-prio"
        } ${todoClassName}`}
      >
        {todo.text}
      </span>
      <div className="buttons">
        <span className={handlePrioStar()} onClick={starClickHandler}>
          <FaStar />
        </span>
        <button className="complete-btn" onClick={handleCheck}>
          {!todo.finished ? (
            <FaCheck />
          ) : (
            <span id="close-button">
              <AiFillCloseCircle />
            </span>
          )}
        </button>
        <button className="trash-btn" onClick={handleRemove}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
