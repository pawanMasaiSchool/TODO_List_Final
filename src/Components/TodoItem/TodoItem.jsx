import styling from "./TodoItem.module.css";

function TodoItem({ name, id, status, handleDoneTask, handleDeleteFromData }) {
  function handleCheckBox() {
    handleDoneTask(id);
    // console.log("Done with task ", id, status);
  }

  return (
    <div className={styling.myItem}>
      <input
        key={id}
        type="checkbox"
        onChange={handleCheckBox}
        className={styling.myCheckBox}
      />
      {name}
      <button
        className={styling.myDeleteBtn}
        onClick={() => handleDeleteFromData(id)}
      >
        X
      </button>
    </div>
  );
}

export { TodoItem };
