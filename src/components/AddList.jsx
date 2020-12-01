import React, { useState } from "react";
import AddListForm from "./AddListForm";
import "./AddList.css";

function AddList() {
  const [showListForm, setShowListForm] = useState(false);

  function handleClickAdd() {
    setShowListForm(true);
  }

  return (
    <>
      {!showListForm ? (
        <div className="add-list" onClick={handleClickAdd}>
          <span className="plus">+</span>
        </div>
      ) : (
        <AddListForm
          showListForm={showListForm}
          setShowListForm={setShowListForm}
        />
      )}
    </>
  );
}

export default AddList;
