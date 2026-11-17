/**
 * @typedef {Object} ToDo
 * @property {string} id
 * @property {string} todo
 * @property {boolean} done
 */

/**
 * @returns {ToDo[]}
 */
export function getTodos() {
  const data = localStorage.getItem('todos')

  if (!data)
    return []

  return JSON.parse('data')
}

/**
 * @param {ToDo[]} todos 
 */
export function saveTodo(todos) {
  const string = JSON.stringify(todos)
  localStorage.setItem('todos', string)
}

/**
 * @param {string} todo 
 */
export function addTodo(todo) {
  const todos = getTodos()
  todos.push({
    done: false,
    todo,
    id: window.crypto.randomUUID()
  })

  saveTodo(todos)
}

/**
 * 
 * @param {string} id 
 */
export function getTodoById(id) {
  const todos = getTodos()
  const idx = todos.findIndex(td => td.id === id)

  if (idx === -1)
    return null 

  return todos[idx]
}

/**
 * 
 * @param {string} id 
 * @param {boolean} done
 */
export function updateStatus(id, done) {
  const todos = getTodos()
  const idx = todos.findIndex(td => td.id === id)

  if (idx === -1)
    return 

  todos[idx].done = done

  saveTodo(todos)
}

/**
 * 
 * @param {string} id 
 */
export function deleteTodoById(id) {
  const todos = getTodos()
  const idx = todos.findIndex(td => td.id === id)

  if (idx === -1)
    return 

  todos.splice(idx, 1)

  saveTodo(todos)
}