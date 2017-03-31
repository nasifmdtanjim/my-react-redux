import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo, removeTodo } from '../actions'
import visibleTodos from './visibleTodos'

const mapStateToProps = state => ({
  todos: visibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = ({
  onClick: toggleTodo,
  removeTodo: removeTodo
})

const ListTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default ListTodos