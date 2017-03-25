import React from 'react'
import AddTodo from '../containers/AddTodo'
import ListTodos from '../containers/ListTodos'
import * as todoStyles from '../styles'

const TodoApp = () => (
  <div style={todoStyles.app}>
    <AddTodo />
    <ListTodos />
  </div>
)

export default TodoApp