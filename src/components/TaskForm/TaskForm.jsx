import { useState } from "react";
import Tag from "../Tag/Tag";
import "./TaskForm.css";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "Ready for Development",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };
  const selectedTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };
  console.log(taskData);
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("");
  // const handleTask = (e) => {
  //   setTask(e.target.value);
  // };
  // const handleStatus = (e) => {
  //   setStatus(e.target.value);
  // };
  // console.log(task, status);
  return (
    <header className="app_header">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter Task Detail"
          onChange={handleChange}
        />
        <div className="task_form_bottom">
          <div>
            <Tag
              tagName="DEV"
              selectedTag={selectedTag}
              selected={checkTag("DEV")}
            />
            <Tag
              tagName="QA"
              selectedTag={selectedTag}
              selected={checkTag("QA")}
            />
            <Tag
              tagName="Product Owner"
              selectedTag={selectedTag}
              selected={checkTag("Product Owner")}
            />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              onChange={handleChange}
            >
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
