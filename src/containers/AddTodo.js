import { connect } from 'react-redux'
import { addTodo } from '../actions'
import React from 'react'

let AddTodo = ({ size, dispatch }) => {
  let input

  return (
    <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value, size))
        input.value = ''
      }}
    >
      <input type="text" ref={node => input = node} />
    </form>
  )
}

const mapStateToProps = state => ({
  size: state.todos.length
})

AddTodo = connect(
  mapStateToProps,
)(AddTodo)

export default AddTodo