import posts from './posts';
import { combineReducers } from 'redux';

// root reducer passed to the store, which contains the posts reducer
export default combineReducers({
  posts,
});
