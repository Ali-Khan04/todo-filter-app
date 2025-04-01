import React, { useState } from "react";

export default function Add({ passInput }) {
  const [userInput, setUserInput] = useState("");

  function handleButtonAdd() {
    if (userInput) {
      passInput(userInput);
      setUserInput("");
    }
  }

  return (
    <>
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
    </>
  );
}
