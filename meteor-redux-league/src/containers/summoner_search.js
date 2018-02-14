import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'reactstrap';
import SummonerFound from '../components/summoner_found';
import SummonerRecentMatches from '../components/summoner_recent_matches';
import _ from 'lodash';
import { fetchSummoner } from '../actions';

class SummonerSearch extends Component {
  state = {
    filterChampions:""
  };

  componentDidMount() {
    const obj =
      {
        applicants:[
          {teamId:100, name:"john"},
          {teamId:100, name:"john2"},
          {teamId:200, name:"gauth"},
          {teamId:200, name:"gauth2"},
          ],
        teams:[
          {teamId:100,  win:'fail'},
          {teamId:200, win:'win'}]}
     const keyByTeamId = (obj) => {
        console.log(_.mapKeys(obj.teams, 'teamId'));
      return _.assign(_.mapKeys(obj.applicants,'teamId'), _.mapKeys(obj.teams,'teamId'))
    };

    let groupByTeamId = _.flow([keyByTeamId]);
    console.log(obj);
    console.log(groupByTeamId(obj));
    //this.props.fetchSummoner("chibredélaissé")
  }
  onSubmit(form) {
    console.log(form);
    this.props.fetchSummoner(form.name)
  }
  renderSummoner(){
    return _.size(this.props.summoners) ?<SummonerFound/> : null;
  }
  renderRecentMatches(){
    return _.size(this.props.matches) ?<SummonerRecentMatches {...this.props}/> : null;
  }
  render() {
    const { handleSubmit, summoners } = this.props;
    console.log(summoners)
    return (
      <div className="container-fluid">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="input-group">
          <Field
            label="Summoner name"
            placeholder="Summoner name"
            className="form-control"
            name="name"
            component="input"
          />
          <span className="input-group-btn">
          <Button type="submit" color="secondary">Submit</Button>
        </span>
        </form>
        {this.renderSummoner()}
        {this.renderRecentMatches()}
      </div>)
  }
}
const mapStateToProps = state => (
  {summoners: state.summoners,
    matches: state.matches}
);
export default reduxForm({
  form: 'summonerForm', // a unique identifier for this form
})(
  connect(mapStateToProps, { fetchSummoner })(SummonerSearch)
);