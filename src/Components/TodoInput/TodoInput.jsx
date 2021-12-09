import { useState } from "react";
import styling from "./TodoInput.module.css";

function TodoInput({ onSubmit }) {
  const [inp, setInp] = useState("");

  function handleChange(e) {
    setInp(e.target.value);
  }

  function handleAdd() {
    // console.log("Added a Task", inp);
    onSubmit(inp);
  }

  return (
    <div>
      <button onClick={handleAdd} className={styling.myAddBtn}>
        +
      </button>
      <input
        className={styling.myInp}
        placeholder="Add Task to do"
        value={inp}
        onChange={handleChange}
      />
    </div>
  );
}

export { TodoInput };
