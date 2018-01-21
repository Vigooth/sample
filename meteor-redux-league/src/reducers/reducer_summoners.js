import { FETCH_SUMMONER } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  console.log('Action received ', action);
  console.log('State sent ', state);
  switch(action.type){
    case FETCH_SUMMONER:
      return  action.payload
  }
  return state
}
