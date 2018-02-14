import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
const API_KEY = '?api_key=RGAPI-41e83154-bf77-49d7-8925-ed0b54c746f8';
const ROOT_URL = `https://euw1.api.riotgames.com/lol`;
var Future = Npm.require( 'fibers/future' );
import { HTTP } from 'meteor/http';
import { WebApp } from 'meteor/webapp';
import axios from 'axios';
import { JsonRoutes } from 'meteor/simple:json-routes';
Meteor.startup(() => {
  // code to run on server at startup
}
)

Meteor.methods({
  'fetchLol':()=>{
    const CHAMPIONS = '/static-data/v3/champions';
    const request = `${ROOT_URL}${CHAMPIONS}${API_KEY}&locale=en_US&champListData=spells&champListData=stats&champListData=tags&tags=spells&tags=stats&dataById=false`;

     return HTTP.call('GET', request, {})
  },
  "fetchSummoner":(name, ...options) => {
    console.log(...options)
    const settings = {...options, requestType:'by-name'};
    const summonerName = encodeURI(name);
    const request = `${ROOT_URL}/summoner/v3/summoners/${settings.requestType}/${summonerName}${API_KEY}`;

    return HTTP.call('GET', request, {})
  },
  "fetchLeague":(summonerId) => {
    const request = `${ROOT_URL}/league/v3/positions/by-summoner/${summonerId}${API_KEY}`;
    return HTTP.call('GET', request, {})
  },
  "fetchMatch":(matchId) => {
    const request = `${ROOT_URL}/match/v3/matches/${matchId}${API_KEY}`;
    return HTTP.call('GET', request, {})
  },
  "fetchMatches":(matchesId = []) => {
    const request =(matchId)=> `${ROOT_URL}/match/v3/matches/${matchId}${API_KEY}`;

    const res = _.map(matchesId, match => HTTP.call('GET',request(match.gameId), {}) );
    return res
  },
  "fetchRecentMatches":(accountId) => {
    const request = `${ROOT_URL}/match/v3/matchlists/by-account/${accountId}/recent${API_KEY}`;
    return HTTP.call('GET', request, {})
  }
})
