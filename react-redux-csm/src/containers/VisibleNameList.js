import { connect } from 'react-redux'
import _ from 'lodash'
import { toggleTodo } from '../actions'
import NameList from '../components/NameList'

const getVisibleNames = (names, filter) => {
  console.log('--------'+filter)
  console.log(names)

  switch (filter) {
    case 'SHOW_ALL':
      console.log(names)
      return names ;
    case 'SHOW_TEST':
      return _.filter(names, t => {console.log(t);return t.text==='test'});
    case 'SHOW_COMPLETED':
      return names.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return names.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  //todos: getVisibleTodos(state.todos, state.visibilityFilter)
  names: getVisibleNames(state.names, state.visibilityFilter)
})


const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameList)

export default VisibleTodoList
