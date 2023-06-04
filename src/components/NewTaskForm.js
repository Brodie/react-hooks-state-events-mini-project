import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const ourCategories = categories.slice(1);
  const categoryList = ourCategories.map((cat) => {
    return (
      <option key={cat} value={cat}>
        {cat}
      </option>
    );
  });

  const [text, setText] = useState("");
  const [catValue, setCatValue] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    let newTask = {
      text: text,
      category: catValue,
    };
    onTaskFormSubmit(newTask);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setText(e.target.value)} value={text} />
      </label>
      <label>
        Category
        <select value={catValue} onChange={(e) => setCatValue(e.target.value)} name="category">
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
