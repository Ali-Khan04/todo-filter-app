import React, { useState } from "react";
import Add from "./Add";

export default function Main() {
  const [task, setTask] = useState([]);

  function handleInput(newInput) {
    setTask([...task, newInput]);
  }

  return (
    <>
      <Add passInput={handleInput} />
      <div className="tasks-container">
        {task.map((task, index) => (
          <div key={index} className="task-card">
            {task}
          </div>
        ))}
      </div>
    </>
  );
}
