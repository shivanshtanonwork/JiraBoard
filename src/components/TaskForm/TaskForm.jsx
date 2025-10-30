import "./TaskForm.css";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form action="">
        <input
          type="text"
          className="task_input"
          placeholder="Enter Task Detail"
        />
        <div className="task_form_bottom">
          <div>
            <button className="tag">DEV</button>
            <button className="tag">QA</button>
            <button className="tag">Product Owner</button>
          </div>
          <div>
            <select className="task_status">
              <option value="Ready for Development">
                Ready for Development
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Ready for test">Ready for test</option>
              <option value="Closed">Closed</option>
            </select>
            <button className="task_submit" type="submit">
              + Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
