import {createStore, combineReducers} from 'redux';
import {cardReducer} from './reducers/card';

const rootReducer = combineReducers({
  card: cardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);
