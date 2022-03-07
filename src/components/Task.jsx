import React from "react";
import { TaskItem } from "./TaskItem";

function Task() {
  const [query, setQuery] = React.useState("");
  const [tasks, setTasks] = React.useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleAdd = () => {
    const payload = {
      title: query,
      status: false
    };
    let newTasks = [...tasks, payload];
    setTasks(newTasks);
  };
  console.log(tasks);
  return (
    <div>
      <h1>Task</h1>
      <input
        value={query}
        onChange={handleChange}
        placeholder=" enter Task here"
      />
      <button onClick={handleAdd}>Add</button>
      <div>
        {tasks.map((item, index) => {
          return (
            <TaskItem color={index % 2 === 0 ? "blue" : "red"} {...item} />
          );
        })}
      </div>
    </div>
  );
}

export { Task };
