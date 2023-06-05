import React from "react";
import Task from "./Task";

function TaskList({ tasks, filter, setNewTasks }) {
  function handleRemoveTask(event) {
    setNewTasks(
      tasks.filter((task) => {
        return task.text !== event.target.parentElement.children[1].innerText;
      })
    );
  }

  const ourTasks = tasks.filter((task) => {
    if (filter === "All") {
      return true;
    }
    if (filter === "") {
      return true;
    }
    return task.category === filter;
  });

  const taskList = ourTasks.map((task) => {
    return <Task key={task.text} text={task.text} category={task.category} handleRemoveTask={handleRemoveTask} />;
  });

  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
