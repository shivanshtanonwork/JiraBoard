import "./TaskColumn.css";

const TaskColumn = ({ title }) => {
  return (
    <div>
      <section className="task_column">
        <h2 className="task_column_heading">{title}</h2>
      </section>
    </div>
  );
};

export default TaskColumn;
