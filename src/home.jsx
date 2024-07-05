import React from "react";
import Create from "./create";
import List from "./List";

function home() {
  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      <List />
    </div>
  );
}

export default home;
