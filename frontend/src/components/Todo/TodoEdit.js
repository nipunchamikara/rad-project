import { useState, useEffect } from "react"

function TodoEdit(props) {
  const [editedTask, seteditedTask] = useState("")

  useEffect(() => {
    seteditedTask(props.editOrNew.task)
  }, [])

  function handleDone() {
    if(props.editOrNew._id) {
      props.handleAccept(editedTask, props.editOrNew._id)
    }else {
      props.handleAccept(editedTask, null)
    }
  }

  return (
    <div>
      <h3>{ props.editOrNew._id ? "Edit Todo" : "Add new" }</h3>
      <input
        type="text"
        onChange={ (e) => seteditedTask(e.target.value) }
        value={ editedTask }
      />
      <button onClick={ () => handleDone() } >Done</button>
      <button onClick={ props.handleCancel }>Cancel</button>
    </div>
  )
}

export default TodoEdit;