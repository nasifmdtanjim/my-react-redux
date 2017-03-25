import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import * as todoStyles from './styles'
import { addTodo, removeTodo } from './actions'
import reducer from './reducers'
import data from './data'

const store = createStore(reducer, data)

let AddTodo = ({ dispatch }) => {
  let input

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
      {/*<button type="submit" style={{display: 'none'}} >Add Todo</button>*/}
    </form>
  )
}

AddTodo = connect()(AddTodo)

const TodoList = ({ todos, removeTodo }) => (
  <table style={todoStyles.table}>
    <tbody>
      {todos.map(todo =>
        <tr key={todo.id} style={todoStyles.todos}>
          <td style={todoStyles.td}>{todo.text}</td>
          <td><button style={todoStyles.crossButton} onClick={() => removeTodo(todo)}>X</button></td>
        </tr>
      )}
    </tbody>
  </table>
)

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = ({
  removeTodo: removeTodo
})

const ListTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

ReactDOM.render(
  <Provider store={store}>
    <div style={todoStyles.app}>
      <AddTodo />
      <ListTodos />
    </div>
  </Provider>,
  document.getElementById('root')
)