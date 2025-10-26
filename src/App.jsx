import React from "react";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <header className="app_header">Jira Board</header>
      <main className="app_main">
        <section className="task_column">Section 1</section>
        <section className="task_column">Section 2</section>
        <section className="task_column">Section 3</section>
        <section className="task_column">Section 4</section>
      </main>
    </div>
  );
};

export default App;
