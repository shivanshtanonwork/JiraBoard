import TaskCard from "../TaskCard/TaskCard";
import "./TaskColumn.css";

const TaskColumn = ({ title, tasks, status }) => {
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">{title}</h2>
        {tasks.map((task, index) => (
          <TaskCard key={index} />
        ))}
      </section>
    </div>
  );
};

export default TaskColumn;
