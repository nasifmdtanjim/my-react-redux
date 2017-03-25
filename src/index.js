import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { combineReducers } from 'redux';
import { crossButtonStyle, todosStyle, appStyle } from './styles';

let nextTodoId = 0;

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text: text
});

const removeTodo = todo => Object.assign(
  {},
  {type: REMOVE_TODO},
  todo
);

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const reducer = combineReducers({
  todos
});

const store = createStore(reducer);

// const unsubscribe = store.subscribe(() => console.log(store.getState()));

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}
    >
      <input type="text" ref={node => input = node} />
      &nbsp;<button type="submit" style={{display: 'none'}} >Add Todo</button>
    </form>
  );
};

AddTodo = connect()(AddTodo);

const TodoList = ({ todos, removeTodo }) => (
  <table style={{margin: '0 auto'}}>
    <tbody>
      {todos.map(todo =>
        <tr key={todo.id} style={todosStyle}>
          <td>{todo.text}</td>
          <td><button style={crossButtonStyle} onClick={() => removeTodo(todo)}>X</button></td>
        </tr>
      )}
    </tbody>
  </table>
);

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = ({
  removeTodo: removeTodo
});

const ListTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

ReactDOM.render(
  <Provider store={store}>
    <div style={appStyle}>
      <AddTodo />
      <ListTodos />
    </div>
  </Provider>,
  document.getElementById('root')
);