import React, { PropTypes } from 'react'
import * as todoStyles from '../styles'
import RemoveTodoButton from './RemoveTodoButton'

const Todo = ({ id, text, onClick }) => (
  <tr style={todoStyles.todos}>
    <td style={todoStyles.td}>{text}</td>
    <RemoveTodoButton onClick={onClick} />
  </tr>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired
}

export default Todo