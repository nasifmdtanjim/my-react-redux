import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../filters'

const visibileTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
    default:
      throw new Error(`Unknown filter ${filter}`)
  }
}

export default visibileTodos