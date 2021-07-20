import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { PostsList } from '.';
import { fetchPosts } from '../actions/posts';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('Props >>> ', this.props);
    const { posts } = this.props;
    return (
      <div>
        <PostsList posts={posts} />
      </div>
    );
  }
}

// gets the state from the redux-store via ContextAPI
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

// mapStateToProps gets the necessary data(here, posts) from redux-store-state and passes it as props to App
export default connect(mapStateToProps)(App);
