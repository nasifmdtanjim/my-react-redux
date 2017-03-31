import React, { PropTypes } from 'react'
import * as todoStyles from '../styles'
import RemoveTodoButton from './RemoveTodoButton'

const Todo = ({ text, completed, onClick, removeTodo }) => (
  <tr style={todoStyles.todos}>

    {/*Todo text*/}
    <td
      onClick={onClick}
      style={Object.assign({}, todoStyles.td, {textDecoration: completed ? 'line-through' : 'none'})}
    >
      {text}
    </td>

    {/*Remove button*/}
    <RemoveTodoButton onClick={removeTodo} />
  </tr>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired
}

export default Todo