import { useContext } from "react";
import styles from "./TodoElement.module.css";
import { TodoContext } from "../../contexts/TodoContext";

const TodoElement = ({ item }) => {
  const { removeHandler, checkBoxHandler } = useContext(TodoContext);

  return (
    <div className={styles.todoContainer}>
      <div className={styles.completeContainer}>
        <input
          className={styles.completeCheckbox}
          defaultChecked={item.completed === true ? "checked" : "un-checked"}
          type="checkbox"
          onChange={() => checkBoxHandler(item)}
        />
      </div>
      <li className={styles.todoText} key={item.id}>
        {item.name}
      </li>
      <div className={styles.removeContainer}>
        <button
          className={styles.removeButton}
          onClick={() => removeHandler(item)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TodoElement;
