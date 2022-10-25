import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../../state/actions/todos";

import TodoList from "./TodoList";
import TodoEdit from "./TodoEdit";
import ErrorToast from "./ErrorToast";

function Todos() {
  const [currentEditingTodo, setCurrentEditingTodo] = useState(null);
  const [isWarning, setIsWarning] = useState(false);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos(setIsWarning));
  }, []);

  const handleTodoEdit = (id) => {
    if (id) {
      setCurrentEditingTodo(todos.find((todo) => todo._id === id));
    } else {
      setCurrentEditingTodo({
        task: "",
        _id: null,
        isCompleted: false,
      });
    }
  };

  const handleCompleted = (id, isCompleted) => {
    dispatch(updateTodo(id, { isCompleted }, setIsWarning));
  };

  const handleAccept = (editedTask, id) => {
    if (id) {
      dispatch(updateTodo(id, { task: editedTask }, setIsWarning));
    } else {
      dispatch(createTodo({ task: editedTask }, setIsWarning));
    }
    setCurrentEditingTodo(null);
  };

  const handleCancel = () => {
    setCurrentEditingTodo(null);
  };

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Confirm delete");
    if (isConfirmed) {
      dispatch(deleteTodo(id, setIsWarning));
    }
  };

  return (
    <div className="container shadow my-5 p-5">
      <h1>Todo</h1>

      {isWarning && <ErrorToast message={isWarning} />}

      <div className="overflow-auto" style={{ maxHeight: "300px" }}>
        {!currentEditingTodo && (
          <TodoList
            todos={todos}
            handleTodoEdit={handleTodoEdit}
            handleCompleted={handleCompleted}
            handleDelete={handleDelete}
          />
        )}
      </div>

      <div className="p-2 text-center">
        {!currentEditingTodo && (
          <button
            type="button"
            onClick={() => handleTodoEdit(null)}
            className="btn btn-outline-primary col-3 mt-3"
          >
            Add New
          </button>
        )}
      </div>

      {currentEditingTodo && (
        <TodoEdit
          editOrNew={currentEditingTodo}
          handleAccept={handleAccept}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default Todos;
