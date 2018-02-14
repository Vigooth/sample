import { FETCH_CHAMPIONS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type){
    case FETCH_CHAMPIONS:
      return  action.payload.data
  }
  return state
}
