/**
 * @typedef {Object} NewDialogProps
 * @property {import("react").RefObject} ref
 */

import { useEffect, useRef } from "react"
import { LuX } from "react-icons/lu"
import { useTodos } from "../hooks/useTodos"

/**
 * 
 * @param {NewDialogProps} props 
 * @returns 
 */
function NewDialog({ ref }) {
  const inputRef = useRef()

  const todos = useTodos()

  useEffect(() => {
    ref.current?.close()
  }, [ref])

  function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)

    todos.add(fd.get('todo'))

    if (inputRef.current)
      inputRef.current.value = ""

    ref.current?.close()
  }

  return (
    <dialog ref={ref} className="justify-center gap-2 items-start absolute inset-0 w-5 h-5 z-100 [&::backdrop]:bg-on-surface-high/25  [&::backdrop]:backdrop-blur-lg open:flex open:flex-col w-fit bg-surface overflow-hidden rounded-2xl p-4 h-fit m-auto">
      <span className="flex justify-between w-full">
        <label htmlFor="new-todo">What to do?</label>
        <button type="button" onClick={() => ref.current?.close()}>
          <LuX />
        </button>
      </span>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" id="new-todo" name="todo" className="w-full bg-surface-container rounded-xl p-2 shadow-sm" />
      </form>
    </dialog>
  )
}

export default NewDialog