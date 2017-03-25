import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { removeTodo } from '../actions'

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = ({
  removeTodo: removeTodo
})

const ListTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default ListTodos