import React from 'react'
import PropTypes from 'prop-types'
const Name = ({onClick, completed, text}) => {
  console.log(text)
  return(
  <li
    onClick={onClick}
  >
    {text}
  </li>
)}
Name.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Name