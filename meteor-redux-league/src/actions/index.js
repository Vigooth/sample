import axios from 'axios';
export const FETCH_CHAMPIONS = 'FETCH_CHAMPIONS';
export const FETCH_SUMMONER = 'FETCH_SUMMONER';
export const FETCH_RECENT_MATCHES = 'FETCH_RECENT_MATCHES';
export const FETCH_MATCH = 'FETCH_MATCH';
//const url = `${ROOT_URL}/summoner/v3/summoners/by-name/${summonerName}${API_KEY}`;

export function fetchChampions() {
  const url = `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json`;

  //const url2 = `https://euw1.api.riotgames.com/lol/platform/v3/champions?freeToPlay=false&api_key=RGAPI-4fbb1974-67ca-4760-af2a-2efb8a673165`;
  Meteor.call('fetchLol', (err, res) => {if(!err){return res}});
  const request =  axios.get(url).then(response =>  response);
  //const request2 =  axios.get(url2).then(response =>  response);
  console.log('Request: ', request);
  return {
    type: FETCH_CHAMPIONS,
    payload: request
  }
}

export function fetchSummoner(name) {
  return dispatch => {Meteor.call('fetchSummoner', name, (err, res) => {
    if(!err){
      dispatch({
        type: FETCH_SUMMONER,
        payload: res
      })
    }
  })}
}
export function fetchLeague(name) {
  return dispatch => {Meteor.call('fetchSummoner', name, (err, res) => {
    if(!err){
      dispatch({
        type: FETCH_SUMMONER,
        payload: res
      })
    }
  })}
}
export function fetchRecentMatches() {

  return (dispatch, getState) => {
    const { summoners: { accountId } } = getState();
    Meteor.call('fetchRecentMatches', accountId, (err, res) => {
      if(!err){
        console.log(res.data.matches);
        Meteor.call('fetchMatches',res.data.matches, (err, res) => {
          if(!err){
            console.log(res)
            dispatch({
              type: FETCH_RECENT_MATCHES,
              payload: res
            })
          }})
      }
    })}
}
export function fetchMatch(gameId) {

  return (dispatch) => {
    console.log(gameId)
    Meteor.call('fetchMatch', gameId, (err, res) => {
      if(!err){
        console.log(res)
        dispatch({
          type: FETCH_RECENT_MATCHES,
          payload: res
        })
      }
    })}
}
