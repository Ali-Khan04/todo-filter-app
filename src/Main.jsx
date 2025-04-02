import React, { useState } from "react";
import Add from "./Add";
import { TaskContext } from "./Context";
import "./CSS/Main.css";

export default function Main() {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("All");

  function handleInput(newInput) {
    const newTask = {
      id: Date.now(),
      name: newInput,
      completed: false,
    };
    setTaskList([...taskList, newTask]);
  }

  function handleDelete(id) {
    setTaskList(taskList.filter((task) => task.id !== id));
  }

  function toggleComplete(id) {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  const filteredTasks = taskList.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  const contextValue = {
    handleInput,
    handleDelete,
    toggleComplete,
    handleFilterChange,
    filter,
  };

  return (
    <TaskContext.Provider value={contextValue}>
      <Add />
      <div className="filter-section">
        <label>Filter:</label>
        <select onChange={handleFilterChange} value={filter}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="tasks-container">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`task-card ${task.completed ? "completed" : ""}`}
          >
            <span>{task.name}</span>
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </TaskContext.Provider>
  );
}
