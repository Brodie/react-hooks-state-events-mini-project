import React from "react";

function Task({ text, category, handleRemoveTask }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleRemoveTask} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;
