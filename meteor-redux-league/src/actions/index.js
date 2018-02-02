import axios from 'axios';
export const FETCH_SUMMONER = 'FETCH_SUMMONER';
export const FILTER_CHAMPION = 'FILTER_CHAMPION';
const API_KEY = '?api_key=RGAPI-9729fb22-2d8f-471f-b3bf-4ca9336e37ff';
const ROOT_URL = `https://euw1.api.riotgames.com/lol`;
const summonerName = 'chibredélaissé';
//const url = `${ROOT_URL}/summoner/v3/summoners/by-name/${summonerName}${API_KEY}`;

export function fetchSummoner() {

  const url = `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json`;

  //const url = `${ROOT_URL}/status/v3/shard-data${API_KEY}`;
  Meteor.call('fetchLol',url, (err,res)=>{console.log(res);console.log(err)});
  const request =  axios.get(url).then((response)=>{console.log(response); return response});
  console.log('Request: ', request);
  return {
    type: FETCH_SUMMONER,
    payload: request
  }
}
export function filterChampion(data,filter) {
  const url = `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json`;
  Meteor.call('fetchLol',url, (err,res)=>{console.log(res);console.log(err)});
  const request =  axios.get(url).then((response)=>{ return response});
  return {
    type: FILTER_CHAMPION,
    filter,
    payload: request
  }
}
