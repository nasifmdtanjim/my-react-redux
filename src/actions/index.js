let nextTodoId = 0

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text: text
})

export const removeTodo = todo => Object.assign(
  {},
  {type: REMOVE_TODO},
  todo
)