/**
 * @typedef {ToDo} TodoProps
 */

import { useRef, useState } from "react"
import { LuCircle, LuCircleCheck, LuTrash } from "react-icons/lu"
import { deleteTodoById, updateStatus } from "../libs/todo"

/**
 * 
 * @param {TodoProps} props 
 * @returns 
 */
function Todo(props) {
  const [checked, setChecked] = useState(false)

  const inputRef = useRef()

  function handleClick() {
    if (!inputRef.current)
      return

    updateStatus(inputRef.current.value, inputRef.current.checked)
    setChecked(inputRef.current.checked)
  }

  function handleDelete() {
    if (!inputRef.current)
      return

    deleteTodoById(inputRef.current.value)
  }

  return (
    <label className="flex items-center gap-2">
      <span className={`line-clamp-2 grow ${checked && 'text-on-surface-low line-through'}`}>{props.todo}</span>
      {checked ? <LuCircleCheck className="text-primary" /> : <LuCircle />}
      <input ref={inputRef} type="checkbox" name="done" value={props.id} className="hidden" onClick={handleClick} />
      <button type="button" onClick={handleDelete}>
        <LuTrash />
      </button>
    </label >
  )
}

export default Todo