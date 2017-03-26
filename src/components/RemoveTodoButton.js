import React from 'react'
import * as todoStyles from '../styles'

const RemoveTodoButton = ({ onClick }) => (
  <td><button style={todoStyles.crossButton} onClick={onClick}>X</button></td>
)

export default RemoveTodoButton