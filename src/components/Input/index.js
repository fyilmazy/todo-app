import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const Input = () => {
  const { formSubmitHandler, changeHandler, inputVal } = useContext(
    TodoContext,
  );

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          className="todo-input"
          onChange={changeHandler}
          value={inputVal}
        />
        <button className="todo-button" type="submit">
          <i>
            <FontAwesomeIcon icon={faPlusSquare} />
          </i>
        </button>
      </form>
    </div>
  );
};

export default Input;
