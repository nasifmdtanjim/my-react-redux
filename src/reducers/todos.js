const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          todo: action.todo,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo, id) => {
        return (id === action.index) ? Object.assign({}, todo, {
          completed: !todo.completed
        }) : todo;
      });
    default:
      return state;
  }
}

export default todos;