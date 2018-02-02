import React, { Component } from 'react';
class Home extends Component {

  onFormSubmit(event) {
    event.preventDefault();
  }
  onInputChange(event) {
    console.log(event.target.value);
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in you favorite cities"
          className="form-control"
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>)
  }
}
export default Home;