import React from 'react'
import * as todoStyles from '../styles'
import Todo from '../components/Todo'

const TodoList = ({ todos, removeTodo }) => (
  <table style={todoStyles.table}>
    <tbody>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => removeTodo(todo.id)}
        />
      )}
    </tbody>
  </table>
)

export default TodoList