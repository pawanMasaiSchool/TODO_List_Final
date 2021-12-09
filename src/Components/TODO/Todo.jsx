import { useState } from "react";
import { TodoInput } from "../TodoInput/TodoInput";
import { TodoItem } from "../TodoItem/TodoItem";
import { CompletedItem } from "../TodoItem/CompletedItem";
import { v4 as uuid } from "uuid";
import styling from "./Todo.module.css";

function Todo() {
  const [data, setData] = useState([]);
  const [done, setDone] = useState([]);
  const [hidden, setHidden] = useState(false);

  const handleDeleteFromData = (id) => {
    // console.log("Deleting", id);
    setData(data.filter((item) => item.id !== id));
  };

  const handleDoneTask = (id) => {
    // console.log("id", id);
    setData(
      data.map((item) =>
        item.id === id ? ((item.status = "Done"), item) : item
      )
    );
    setDone([...done, ...data.filter((item) => item.id === id)]);

    setTimeout(setData(data.filter((item) => item.id !== id)), 2000);
  };

  const handleAddTask = (task) => {
    if (task === "") {
      alert("Task Cannot be EMPTY! Please Add Something");
      return;
    }
    let payload = {
      title: task,
      status: "Pending",
      id: uuid()
    };
    setData([...data, payload]);
  };

  // console.log("Pending", data);
  // console.log("Done", done);

  // console.log(hidden);
  return (
    <div className={styling.todo}>
      <h1>Todo App on React</h1>
      <TodoInput onSubmit={handleAddTask} />

      {data.map((item) => (
        <TodoItem
          handleDoneTask={handleDoneTask}
          name={item.title}
          id={item.id}
          status={item.status}
          key={item.id}
          handleDeleteFromData={handleDeleteFromData}
        />
      ))}

      {hidden === true ? (
        <button
          className={styling.myHideBtn}
          onClick={() => setHidden(!hidden)}
        >
          Show Completed
        </button>
      ) : (
        <button
          className={styling.myHideBtn}
          onClick={() => setHidden(!hidden)}
        >
          Hide Completed
        </button>
      )}

      {hidden === false ? (
        done.map((item) => (
          <CompletedItem name={item.title} id={item.id} key={item.id} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export { Todo };
