function Todo(props) {
  function handleOnChange(e) {
    props.handleCompleted(props.todo._id, !props.todo.isCompleted)
  }

  return (
    <div>
      <div style={{textDecoration: props.todo.isCompleted && "line-through"} }>
        <input
          type="checkbox"
          checked={ props.todo.isCompleted }
          onChange={ (e) => handleOnChange(e) }
          className="form-check-input bg-secondary mx-2"
        />
          { props.todo.task }
      </div>       
          
      <input
        className="btn btn-link btn-sm text-secondary"
        onClick={ (e) => props.handleTodoEdit(props.todo._id) }
        type="reset"
        value="Edit"
      />

      <button
        type="button"
        onClick={ (e) => props.handleDelete(props.todo._id) }
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
