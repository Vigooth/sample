import { combineReducers } from 'redux'
import names from './names'
import visibilityFilter from './visibilityFilter'
import counter from './counter'
const todoApp = combineReducers({
  names,
  visibilityFilter,
  counter
})

export default todoApp