import { connect } from 'react-redux'
import _ from 'lodash'
import Count from '../components/Count'
import { inc } from '../actions'

const getCounter = (number) => {
  console.log(number)
  return (number>=0 ? number : 0 )
}
const mapStateToProps = (state) => ({
  //todos: getVisibleTodos(state.todos, state.visibilityFilter)
  number: getCounter(state.counter)
})
const mapDispatchToProps = {
  onCountClick: inc
}
const VisibleCounter = connect(mapStateToProps, mapDispatchToProps)(Count)


export default VisibleCounter
