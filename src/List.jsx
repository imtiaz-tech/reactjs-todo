import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

function List() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return todos.length === 0 ? (
    <h2>No Record</h2>
  ) : (
    todos.map((todo) => (
      <TodoItem
        todo={todo}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    ))
  );
}

export default List;
