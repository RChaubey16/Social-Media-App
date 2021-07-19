import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('Props >>> ', this.props);
    return <div>App</div>;
  }
}

// gets the state from the redux-store via ContextAPI
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

// mapStateToProps gets the necessary data(here, posts) from redux-store-state and passes it as props to App
export default connect(mapStateToProps)(App);
