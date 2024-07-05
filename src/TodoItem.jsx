import React from "react";
import {
  BsCircleFill,
  BsFillTrashFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";

function TodoItem(props) {
  const { todo, handleEdit, handleDelete } = props;

  return (
    <div className="task">
      <div className="checkbox" onClick={() => handleEdit(todo._id)}>
        {todo.done ? (
          <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill>
        ) : (
          <BsCircleFill className="icon" />
        )}
        <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
      </div>
      <div>
        <span>
          <BsFillTrashFill
            className="icon"
            onClick={() => handleDelete(todo._id)}
          />
        </span>
      </div>
    </div>
  );
}

export default TodoItem;
