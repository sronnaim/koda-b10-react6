import { useRef } from "react"
import { LuCircle, LuCircleCheck, LuTrash } from "react-icons/lu"
import { useTodos } from "../hooks/useTodos";

/**
 * @typedef {import("../hooks/useTodos").ToDo} TodoProps
 */

/**
 * 
 * @param {TodoProps} props 
 * @returns 
 */
function Todo(props) {
  const inputRef = useRef()
  const todos = useTodos();

  function handleClick(e) {
    if (!inputRef.current)
      return

    todos.updateStatusById(inputRef.current.value, e.currentTarget.checked)
  }

  function handleDelete() {
    todos.deleteById(props.id)
  }

  return (
    <label className="flex items-center gap-2">
      <span className={`line-clamp-2 grow ${props.done && 'text-on-surface-low line-through'}`}>{props.todo}</span>
      {props.done ? <LuCircleCheck className="text-primary" /> : <LuCircle />}
      <input ref={inputRef} type="checkbox" name="done" value={props.id} className="hidden" onClick={handleClick} />
      <button type="button" onClick={handleDelete}>
        <LuTrash />
      </button>
    </label >
  )
}

export default Todo