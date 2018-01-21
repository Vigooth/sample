let nextTodoId = 0;
export const addName = (text) => ({
  type: 'ADD_NAME',
  id: nextTodoId++,
  text
})
export const inc = (number) => ({
  type: 'INCREMENT',
  number});
export const desc = (number) => ({
  type: 'DECREMENT',
  number});
export const removeName = (text) => ({
  type: 'REMOVE_NAME',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
