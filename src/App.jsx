import React, { useState } from "react";
import "./app.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskColumn from "./components/TaskColumn/TaskColumn";

const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="Ready for Development"
          tasks={tasks}
          status="Ready for Development"
        />
        <TaskColumn
          title="In Progress"
          tasks={tasks}
          status="Ready for Development"
        />
        <TaskColumn
          title="Ready for test"
          tasks={tasks}
          status="Ready for Development"
        />
        <TaskColumn
          title="✅Closed"
          tasks={tasks}
          status="Ready for Development"
        />
      </main>
    </div>
  );
};

export default App;
