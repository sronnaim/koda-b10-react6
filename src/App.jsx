import { LuPlus } from "react-icons/lu"

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container w-50 rounded-2xl shadow-md px-4 pt-4 pb-8 bg-surface text-on-surface relative">
        <hgroup>
          <h1 className="sr-only">To Do</h1>
          <time datetime="" className="flex gap-1 items-center font-semibold">
            <span className="text-4xl">12</span>
            <span className="flex flex-col grow text-xs">
              <span>Jan</span>
              <span className="font-normal text-on-surface-low">2026</span>
            </span>
            <span className="text-sm">Tuesday</span>
          </time>
        </hgroup>
        <form className="mt-4">
          <ul className="h-67 overflow-y-scroll flex flex-col gap-2 text-xs">
            <li>
              <label className="flex items-center gap-2">
                <span className="line-clamp-2 grow">Buy new sweatshirt Buy new sweatshirt Buy new sweatshirt</span>
                <input type="checkbox" name="done" value="todo1" />
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <span className="line-clamp-2 grow">Buy new sweatshirt</span>
                <input type="checkbox" name="done" value="todo1" />
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <span className="line-clamp-2 grow">Buy new sweatshirt</span>
                <input type="checkbox" name="done" value="todo1" />
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <span className="line-clamp-2 grow">Buy new sweatshirt</span>
                <input type="checkbox" name="done" value="todo1" />
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <span className="line-clamp-2 grow">Buy new sweatshirt</span>
                <input type="checkbox" name="done" value="todo1" />
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <span className="line-clamp-2 grow">Buy new sweatshirt</span>
                <input type="checkbox" name="done" value="todo1" />
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <span className="line-clamp-2 grow">Buy new sweatshirt</span>
                <input type="checkbox" name="done" value="todo1" />
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <span className="line-clamp-2 grow">Buy new sweatshirt</span>
                <input type="checkbox" name="done" value="todo1" />
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <span className="line-clamp-2 grow">Buy new sweatshirt</span>
                <input type="checkbox" name="done" value="todo1" />
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <span className="line-clamp-2 grow">Buy new sweatshirt</span>
                <input type="checkbox" name="done" value="todo1" />
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <span className="line-clamp-2 grow">Buy new sweatshirt</span>
                <input type="checkbox" name="done" value="todo1" />
              </label>
            </li>
          </ul>
        </form>
        <div className="flex justify-center absolute w-full left-0">
          <button type="button" className="mx-auto shadow-sm cursor-pointer translate-y-[25%] inline-flex h-10 w-10 items-center justify-center bg-primary text-on-primary rounded-full">
            <span className="sr-only">New to do</span>
            <LuPlus />
          </button>
        </div>
      </div>
    </main>
  )
}

export default App