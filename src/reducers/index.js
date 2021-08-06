import posts from './posts';
import auth from './auth';
import profile from './profile';
import friends from './friends';

import { combineReducers } from 'redux';

// root reducer passed to the store, which contains the posts reducer
export default combineReducers({
  posts,
  auth,
  profile,
  friends,
});
