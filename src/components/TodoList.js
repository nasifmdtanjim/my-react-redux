import React from 'react'
import * as todoStyles from '../styles'

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

export default TodoList