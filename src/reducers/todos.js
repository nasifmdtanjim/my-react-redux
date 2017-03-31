import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.id ?
        Object.assign({}, todo, {completed: !todo.completed}) :
        todo
      )
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default todos