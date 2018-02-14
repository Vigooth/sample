import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchChampions } from '../actions';

class ChampionSearch extends Component {
 state = {
      filterChampions:""
    };

  componentDidMount() {
    this.props.fetchChampions();
  }
  onFormSubmit(event) {
    event.preventDefault();
  }

  onInputChange = (event) => {
    this.setState({filterChampions: event.target.value})
  };

  summonerFilter(champions) {
    return _.filter(champions, champion => _.includes(champion.id, this.state.filterChampions))
  }
  renderChampions() {
    const { champions } = this.props;

    return  _.map(this.summonerFilter(champions.data), champion => <li key={champion.id}>{champion.id} <img src={`https://ddragon.leagueoflegends.com/cdn/8.2.1/img/champion/${champion.image.full}`}/></li>)
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in you favorite cities"
          className="form-control"
          onChange={this.onInputChange}
        />
        <ul>
          {this.renderChampions()}
        </ul>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>)
  }
}
const mapStateToProps = state => (
  {champions: state.champions}
);

export default connect(mapStateToProps, { fetchChampions })(ChampionSearch);