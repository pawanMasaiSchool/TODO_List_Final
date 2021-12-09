import styling from "./TodoItem.module.css";

function CompletedItem({ name, id }) {
  return (
    <div className={styling.myItem}>
      <input
        id={id}
        type="checkbox"
        value={name}
        defaultChecked
        onChange={() => {}}
        checked
        className={styling.myCheckBox}
      />
      <strike>{name}</strike>
    </div>
  );
}

export { CompletedItem };
