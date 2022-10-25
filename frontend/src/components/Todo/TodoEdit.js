import { useState, useEffect } from "react";

function TodoEdit(props) {
  const [editedTask, setEditedTask] = useState("");

  useEffect(() => {
    setEditedTask(props.editOrNew.task);
  }, []);

  function handleDone() {
    if (props.editOrNew._id) {
      props.handleAccept(editedTask, props.editOrNew._id);
    } else {
      props.handleAccept(editedTask, null);
    }
  }

  return (
    <div>
      <h3>{props.editOrNew._id ? "Edit Todo" : "Add new"}</h3>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="task"
          placeholder="Enter Task"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
        <label htmlFor="task">Enter Task</label>
      </div>
      <button className="btn btn-outline-primary me-2" onClick={handleDone}>
        Done
      </button>
      <button className="btn btn-outline-danger" onClick={props.handleCancel}>
        Cancel
      </button>
    </div>
  );
}

export default TodoEdit;
