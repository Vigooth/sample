import { FETCH_SUMMONER, FILTER_CHAMPION } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  console.log('Action received ', action);
  console.log('State sent ', state);
  switch(action.type){
    case FETCH_SUMMONER:
      return  action.payload.data
    case FILTER_CHAMPION:
      //TODO filtrage dans action le filtre doit de no
      console.log(action.payload.data)
      const filtred =_.filter(action.payload.data, champion => _.includes(champion.id, action.filter))
      console.log(filtred)
      return {...action.payload, data:filtred}
  }
  return state
}
