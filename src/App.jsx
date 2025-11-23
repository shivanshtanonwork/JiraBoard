import React, { useEffect, useState } from "react";
import "./app.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskColumn from "./components/TaskColumn/TaskColumn";

const existingTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(existingTasks) || []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [activeCard, setActiveCard] = useState(null);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="Ready for Development"
          tasks={tasks}
          status="Ready for Development"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
        />
        <TaskColumn
          title="In Progress"
          tasks={tasks}
          status="In Progress"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
        />
        <TaskColumn
          title="Ready for test"
          tasks={tasks}
          status="Ready for test"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
        />
        <TaskColumn
          title="✅Closed"
          tasks={tasks}
          status="Closed"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
        />
      </main>
      <h2>Active Card{activeCard}</h2>
    </div>
  );
};

export default App;
