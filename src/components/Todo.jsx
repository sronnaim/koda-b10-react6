/**
 * @typedef {ToDo} TodoProps
 */

import { useRef, useState } from "react"
import { LuCircle, LuCircleCheck } from "react-icons/lu"

/**
 * 
 * @param {TodoProps} props 
 * @returns 
 */
function Todo(props) {
  const [checked, setChecked] = useState(false)

  const inputRef = useRef()

  function handleClick() {
    setChecked(inputRef.current.checked)
  }

  return (
    <label className="flex items-center gap-2">
      <span className={`line-clamp-2 grow ${checked && 'text-on-surface-low'}`}>{props.todo}</span>
      {checked ? <LuCircleCheck className="text-primary" /> : <LuCircle />}
      <input ref={inputRef} type="checkbox" name="done" value={props.id} className="hidden" onClick={handleClick} />
    </label>
  )
}

export default Todo