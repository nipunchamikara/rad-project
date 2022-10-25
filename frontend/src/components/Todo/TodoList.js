import Todo from "./Todo"

function TodoList(props) {
  return (
      props.todos?.map((todo) => <Todo key={ todo._id } todo={ todo } handleTodoEdit={ props.handleTodoEdit } handleCompleted = { props.handleCompleted } handleDelete={ props.handleDelete }/>)
  );
}

export default TodoList;