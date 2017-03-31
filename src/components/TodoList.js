import React from 'react'
import * as todoStyles from '../styles'
import Todo from '../components/Todo'

const TodoList = ({ todos, onClick, removeTodo }) => (
  <table style={todoStyles.table}>
    <thead>
      <tr>
        <th>Todo</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onClick(todo.id)}
          removeTodo={() => removeTodo(todo.id)}
        />
      )}
    </tbody>
  </table>
)

export default TodoList