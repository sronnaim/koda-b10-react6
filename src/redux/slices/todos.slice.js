import { createSlice } from '@reduxjs/toolkit'

/**
 * @typedef {import('../../types/todo.type').ToDo} ToDo
 */

/**
 * 
 * @param {ToDo[]} prev 
 * @param {{ payload: string }} action 
 */
function rAddtask(prev, { payload: todo }) {
  return [...prev, {
    id: window.crypto.randomUUID(),
    todo: todo,
    done: false
  }]
}

/**
 * 
 * @param {ToDo[]} prev 
 * @param {{ payload: string }} action 
 */
function rRemoveTask(prev, { payload: id }) {
  return prev.filter(todo => todo.id !== id)
}

/**
 * 
 * @param {ToDo[]} prev 
 * @param {{ payload: ToDo }}
 */
function rEditTask(prev, { payload: { id, ...update } }) {
  return prev.map(todo => {
    if (todo.id === id)
      return { id, ...todo, ...update }

    return todo
  })
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTask: rAddtask,
    removeTask: rRemoveTask,
    editTask: rEditTask
  }
})

export const { addTask, removeTask, editTask } = todosSlice.actions
export default todosSlice.reducer