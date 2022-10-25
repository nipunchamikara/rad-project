import React from "react";

function Todo(props) {
  function handleOnChange(e) {
    props.handleCompleted(props.todo._id, !props.todo.isCompleted);
  }

  return (
    <div>
      <div
        style={{ textDecoration: props.todo.isCompleted && "line-through" }}
        className="card-hover d-flex align-items-center justify-content-between p-3 mb-2 shadow-sm rounded-3"
      >
        <div>
          <input
            type="checkbox"
            checked={props.todo.isCompleted}
            onChange={(e) => handleOnChange(e)}
            className="form-check-input me-2"
          />
          {props.todo.task}
        </div>

        <div>
          <button
            className="btn btn-outline-primary me-2"
            onClick={(e) => props.handleTodoEdit(props.todo._id)}
            type="reset"
          >
            Edit
          </button>

          <button
            className="btn btn-outline-danger"
            type="button"
            onClick={(e) => props.handleDelete(props.todo._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
