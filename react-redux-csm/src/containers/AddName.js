import React from 'react'
import { connect } from 'react-redux'
import { addName } from '../actions'

let AddName = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!this.input.value.trim()) {return
        }
        dispatch(addName(this.input.value))
        this.input.value = ''
      }}>
        <input ref={node => {this.input = node}} />
        <button type="submit">Add Name</button>
      </form>
    </div>
  )
}
AddName = connect()(AddName)

export default AddName
