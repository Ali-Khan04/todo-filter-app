import React, { useState, useContext } from "react";
import { TaskContext } from "./Context";
import "./CSS/Add.css";

export default function Add() {
  const { handleInput } = useContext(TaskContext);
  const [userInput, setUserInput] = useState("");

  function handleButtonAdd() {
    if (userInput) {
      handleInput(userInput);
      setUserInput("");
    }
  }

  return (
    <div className="main-input">
      <label>Add Task</label>
      <input
        type="text"
        required
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button onClick={handleButtonAdd}>Add</button>
    </div>
  );
}
