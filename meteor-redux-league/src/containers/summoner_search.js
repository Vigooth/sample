import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSummoner } from '../actions'
class SummonerSearch extends Component {

  componentDidMount(){
    console.log(this.props.fetchSummoner());
  }
  onFormSubmit(event) {
    event.preventDefault();
  }
  onInputChange(event) {
    console.log(event.target.value);
  }

  render(){
    console.log(this.props.summoners);
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
function mapStateToProps(state) {
  return {
    summoners: state.summoners
  }
}
function mapDispatchToProps() {

}
export default connect(null, { fetchSummoner })(SummonerSearch);