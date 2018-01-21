import React from 'react'
import { connect } from 'react-redux'
import { inc, desc } from '../actions'
import Count from '../components/Count'

let Counter = ({ dispatch }) => {
  let input;

  return (
    <div>
      <button onClick={e => {e.preventDefault();dispatch(inc(5))}}>+</button>
      <button onClick={e => {e.preventDefault();dispatch(desc(4))}}>-</button>
    </div>
  )
}
const mapStateToProps = (state) => ({
  //todos: getVisibleTodos(state.todos, state.visibilityFilter)
  number: state.counter
})

Counter = connect()(Counter)

export default Counter
