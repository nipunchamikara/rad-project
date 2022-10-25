import { useState, useEffect } from "react"
import TodoList from "./TodoList"
import TodoEdit from "./TodoEdit"
import ErrorToast from "./ErrorToast"

function Todos(props) {
  const [todos, setTodos] = useState([])
  const [currentEditingTodo, setcurrentEditingTodo] = useState(null)
  const [isWarning, setisWarning] = useState(false)

  let token = '';
  let profile = localStorage.getItem('profile')
  if(profile) {
    profile = JSON.parse(profile)
    token = profile.token
  }

  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch('http://localhost:3030/todo/all', {
        headers: {
          'x-access-token': token
        }
      })
      
      const data = await res.json()
      if(res.status === 200) {
        setisWarning(false)
        setTodos(data.todos)
      }else {
        console.log(res.status)
        setisWarning(data.error)
      }
    }
    fetchTodos()
  }, [])
  
  const handleTodoEdit =  id => {
    if(id) {
      setcurrentEditingTodo({
        _id: id,
        task: todos.filter(todo => todo._id === id)[0].task
      })
    }else {
      setcurrentEditingTodo({
        _id: null,
        task: ""
      })
    }
  }

  const handleCompleted = (id, isCompleted) => {
    handleAccept("", id, isCompleted ? "true": "false")
    
  }

  const handleAccept = async (editedTask, id = null, isCompleted = null) => {
    if(id) {
      let body
      // Request body if todo is done or not
      if(isCompleted){
        body = JSON.stringify({
          isCompleted: isCompleted === "true" ? true : false,
          _id: id
        })
      }else {
        body = JSON.stringify({
          task: editedTask,
          _id: id
        })
      }
      const res = await fetch('http://localhost:3030/todo/', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'x-access-token': token
        },
        body: body
      })

      const data = await res.json()
      if(res.status === 200) {
        const currentTodos = todos.slice()
        const editedTodos = currentTodos.map(todo => {
          if(todo._id === id) {
            return data.todo
          }else {
            return todo
          }
        })
        setTodos(editedTodos)
      }else {
        setisWarning(data.error)
        setTimeout(() => setisWarning(false), 2000)
      }

      setcurrentEditingTodo(null)

    }else {
      const res = await fetch('http://localhost:3030/todo/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'x-access-token': token
        },
        body: JSON.stringify({
          task: editedTask
        })
      })

      const data = await res.json()
      if(res.status === 200) {
        const currentTodos = todos.slice()
        currentTodos.push(data.todo)
        setTodos(currentTodos)
      }else {
        setisWarning(data.error)
        setTimeout(() => setisWarning(false), 2000)
      }

      setcurrentEditingTodo(null)
    }
  }

  const handleCancel = () => {
    setcurrentEditingTodo(null)
  }

  const handleDelete = async id => {
    const isConfirmed = window.confirm("Confrim delete")
    if(isConfirmed) {
      const res = await fetch('http://localhost:3030/todo/' + id, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          'x-access-token': token
        }
      })
      const data = await res.json()
      if(res.status === 200) {
        const currentTodos = todos.slice()
        const editedTodos = currentTodos.filter(todo => todo._id !== id)
        setTodos(editedTodos)
      }else {
        setisWarning(data.error)
        setTimeout(() => setisWarning(false), 2000)
      }
    }
  }


  return (
    <div className="container">
      <h2 className="mx-1">Todo</h2>

      { isWarning && <ErrorToast message={ isWarning } /> }

      <div className="container">
        { !currentEditingTodo && <TodoList todos={ todos } handleTodoEdit={ handleTodoEdit } handleCompleted={ handleCompleted } handleDelete={ handleDelete } /> }
      </div>

      <div className="row p-2">
        { !currentEditingTodo && <button type="button" onClick={ () => handleTodoEdit(null) } className="btn btn-secondary col-4 offset-4">Add new</button> }
      </div>

      { currentEditingTodo && <TodoEdit editOrNew={ currentEditingTodo } handleAccept={ handleAccept } handleCancel={ handleCancel } /> }
    </div>
  );
}

export default Todos;