import { useLocalStorage } from "./useLocalStorage"

/**
 * @typedef {Object} ToDo
 * @property {string} id
 * @property {string} todo
 * @property {boolean} done
 */

export const useTodos = () => {
  const [todos, setTodos] = useLocalStorage('todos')

  /**
   * 
   * @returns {ToDo[]}
   */
  function getAll() {
    if (todos === null) {
      setTodos([])
      return
    }

    return todos
  }

  /**
   * 
   * @param {string} id 
   */
  function getById(id) {
    if (todos === null)
      return null

    const idx = todos.findIndex(td => td.id === id)

    if (idx === -1)
      return null

    return todos[idx]
  }

  /**
   * @param {string} todo 
   */
  function add(todo) {
    const newTodo = {
      done: false,
      todo,
      id: window.crypto.randomUUID()
    }

    if (todos === null) {
      setTodos([newTodo])
      return
    }

    const data = [...todos]
    data.push(newTodo)

    setTodos(data)
  }

  /**
   * 
   * @param {string} id 
   * @param {boolean} done
   */
  function updateStatusById(id, done) {
    if (todos === null)
      return

    const data = [...todos]
    const idx = data.findIndex(td => td.id === id)

    if (idx === -1)
      return

    data[idx].done = done

    setTodos(data)
  }

  /**
   * 
   * @param {string} id 
   */
  function deleteById(id) {
    if (todos === null)
      return

    const data = [...todos]
    const idx = data.findIndex(td => td.id === id)

    if (idx === -1)
      return

    data.splice(idx, 1)

    setTodos(data)
  }

  return {
    getAll,
    getById,
    add,
    updateStatusById,
    deleteById
  }
}