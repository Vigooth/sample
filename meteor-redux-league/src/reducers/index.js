import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SummonersReducer from './reducer_summoners';

const rootReducer = combineReducers({
  summoners: SummonersReducer,
  form: formReducer
});

export default rootReducer;
