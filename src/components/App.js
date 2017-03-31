import React from 'react'
import AddTodo from '../containers/AddTodo'
import ListTodos from '../containers/ListTodos'
import Footer from '../components/Footer'
import * as todoStyles from '../styles'

const TodoApp = () => (
  <div style={todoStyles.app}>
    <AddTodo />
    <ListTodos />
    <Footer />
  </div>
)

export default TodoApp