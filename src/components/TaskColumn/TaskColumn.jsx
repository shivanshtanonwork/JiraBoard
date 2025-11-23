import React from "react";
import DropArea from "../DropArea/DropArea";
import TaskCard from "../TaskCard/TaskCard";
import "./TaskColumn.css";

const TaskColumn = ({ title, tasks, status, handleDelete, setActiveCard }) => {
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">{title}</h2>
        <DropArea />
        {tasks.map(
          (task, index) =>
            task.status === status && (
              <React.Fragment key={index}>
                <TaskCard
                  title={task.task}
                  tags={task.tags}
                  handleDelete={handleDelete}
                  index={index}
                  setActiveCard={setActiveCard}
                />
                <DropArea />
              </React.Fragment>
            )
        )}
      </section>
    </div>
  );
};

export default TaskColumn;
