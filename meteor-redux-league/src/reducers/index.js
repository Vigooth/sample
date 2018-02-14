import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ChampionsReducer from './reducer_champions';
import SummonersReducer from './reducer_summoners';
import MatchesReducer from './reducer_matches';

const rootReducer = combineReducers({
  champions: ChampionsReducer,
  summoners: SummonersReducer,
  matches: MatchesReducer,
  form: formReducer
});

export default rootReducer;
