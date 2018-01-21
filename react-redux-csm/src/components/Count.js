import React from 'react'
import PropTypes from 'prop-types'
const Count = ({number = 0, onCountClick}) => {
  console.log(number)
  return(
  <h1
    onClick = {()=>onCountClick(number)}
  >
    {number}
  </h1>
)}
Count.propTypes = {
}

export default Count