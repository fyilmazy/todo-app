import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoElement from "../TodoElement";

const TodoList = () => {
  const { todos, visibleTodos } = useContext(TodoContext);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos !== []
          ? todos.map((item, i) => {
              return (
                <TodoElement
                  item={item}
                  key={item.id}
                  completed={item.completed}
                />
              );
            })
          : ""}
      </ul>
    </div>
  );
};

export default TodoList;
