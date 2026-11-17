import { LuPlus } from "react-icons/lu"
import Todo from "./components/Todo"
import { useRef, useSyncExternalStore } from "react"
import NewDialog from "./components/NewDialog"

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function subscribe(notify) {
  window.addEventListener('storage', notify)

  return () => window.removeEventListener('storage', notify)
}

function getList() {
  const rawString = localStorage.getItem('todos')

  return rawString
}

function App() {
  const rawString = useSyncExternalStore(subscribe, getList, () => null)
  const todos = JSON.parse(rawString)

  const newDialogRef = useRef()

  function handleNewTodo() {
    newDialogRef.current?.showModal()
  }

  const d = new Date()
  return (
    <>
      <NewDialog ref={newDialogRef} />
      <main className="min-h-screen flex items-center justify-center">
        <div className="container w-50 rounded-2xl shadow-md px-4 pt-4 pb-8 bg-surface text-on-surface relative">
          <hgroup>
            <h1 className="sr-only">To Do</h1>
            <time dateTime="" className="flex gap-1 items-center font-semibold">
              <span className="text-4xl">{d.getDate()}</span>
              <span className="flex flex-col grow text-xs">
                <span>{MONTHS[d.getMonth()]}</span>
                <span className="font-normal text-on-surface-low">{d.getFullYear()}</span>
              </span>
              <span className="text-sm">{WEEKDAYS[d.getDay()]}</span>
            </time>
          </hgroup>
          <form className="mt-4">
            <ul className="h-67 overflow-y-auto flex flex-col gap-2 text-xs">
              {todos && todos.length > 0 && todos.map((td) => <li key={`todo-${td.id}`}>
                <Todo {...td} />
              </li>)}
            </ul>
          </form>
          <div className="flex justify-center absolute w-full left-0">
            <button type="button" onClick={handleNewTodo} className="mx-auto shadow-sm cursor-pointer translate-y-[25%] inline-flex h-10 w-10 items-center justify-center bg-primary text-on-primary rounded-full">
              <span className="sr-only">New to do</span>
              <LuPlus />
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App