import React from 'react'
import PropTypes from 'prop-types'
import Name from './Name'
const NameList = ({ names = [], onNameClick}) => {
  console.log(names)
  return(
  <ul>
    {names.map(name =>
      <Name
        key={name.id}
        {...name}
        onClick={ () => onNameClick(name.id)}
      />)}
  </ul>
)}
Name.propTypes = {

}

export default NameList