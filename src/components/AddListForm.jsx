import React, { useState, useContext } from "react";
import styles from "./AddListForm.css";
import { TodoListContext } from "./TodoListContext";

import Colors from "./Colors";
import { colorsDefault } from "./InitialData";

function AddListForm({ setShowListForm }) {
  const [colors, setColors] = useState(colorsDefault);
  const [headlineInput, setHeadlineInput] = useState("Standard List");
  const { todoListsContext } = useContext(TodoListContext);
  const [todoLists, setTodoLists] = todoListsContext;

  const selectColor = (colorId) => {
    const newColors = colors.map((color) => {
      return {
        ...color,
        isSelected: color.id === colorId,
      };
    });

    setColors(newColors);
  };

  const getSelectedColor = () =>
    colors.find(({ isSelected }) => isSelected === true).id;

  function handleSubmit() {
    setTodoLists([
      ...todoLists,
      {
        color: getSelectedColor(),
        headline: headlineInput,
        key: Date.now(),
        todos: [],
      },
    ]);
    setShowListForm(false);
  }

  function handleOnKey(e) {
    if (e.keyCode === 13) {
      setTodoLists([
        ...todoLists,
        {
          color: getSelectedColor(),
          headline: headlineInput,
          key: Date.now(),
          todos: [],
        },
      ]);
      setShowListForm(false);
    }
  }

  function handleHeadlineInput(e) {
    setHeadlineInput(e.target.value);
  }

  function handleCancel() {
    setShowListForm(false);
  }

  return (
    <div
      className="form-container"
      style={{ backgroundColor: getSelectedColor() }}
    >
      <h1 className="list-form-h1">Create Todo List</h1>
      <input
        autoFocus
        className="list-form-input"
        placeholder="name of list"
        onChange={handleHeadlineInput}
        onKeyDown={handleOnKey}
      ></input>
      <div className="color-items-box">
        <Colors items={colors} action={selectColor} />
      </div>
      <div className="listform-buttons">
        <button type="submit" onClick={handleSubmit}>
          Done
        </button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default AddListForm;
