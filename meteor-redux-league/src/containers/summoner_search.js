import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchSummoner, filterChampion } from '../actions'
class SummonerSearch extends Component {

  componentDidMount(){
    console.log(this.props.fetchSummoner());
  }
  onFormSubmit(event) {
    event.preventDefault();
  }
  onInputChange(event) {
    console.log(...this.props.summoners.data)
    console.log(_.filter(this.props.summoners.data, champion => _.includes(champion.id, event.target.value)))
    this.props.filterChampion(this.props.summoners, event.target.value)
  }

  render(){
    console.log(this.props.summoners);
    const { summoners } = this.props;
    const mapSummoners = _.map(summoners.data, summoner => <li key={summoner.id}>{summoner.id} <img src={`https://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${summoner.image.full}`}/></li>)
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in you favorite cities"
          className="form-control"
          onChange={this.onInputChange.bind(this)}
        />
        <ul>
          {mapSummoners}
        </ul>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>)
  }
}
 const mapStateToProps = state => (
  {summoners: state.summoners}
)
function mapDispatchToProps() {

}
export default connect(mapStateToProps, { fetchSummoner,filterChampion })(SummonerSearch);