export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export const addTodo = (text, size) => ({
  type: ADD_TODO,
  id: size,
  text: text
})

export const removeTodo = todo => Object.assign(
  {},
  {type: REMOVE_TODO},
  todo
)