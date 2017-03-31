export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export const addTodo = (text, size) => ({
  type: ADD_TODO,
  id: size,
  text: text,
  completed: false
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id: id
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})