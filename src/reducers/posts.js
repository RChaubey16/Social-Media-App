// Will handle all the actions related to posts and take necessary steps

import { UPDATE_POSTS, ADD_POST } from '../actions/actionTypes';

export default function posts(state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
    case ADD_POST:
      return [action.post, ...state];
    default:
      return state;
    // we may switch the post reducer from array to JSON
  }
}
