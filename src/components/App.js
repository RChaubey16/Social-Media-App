import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { fetchPosts } from '../actions/posts';
import { PostsList, Navbar } from '.';

const Home = () => <div>Home</div>;

const Login = () => <div>Login</div>;

const Signup = () => <div>Signup</div>;

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    console.log('Props >>> ', this.props);
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
          {/* <PostsList posts={posts} /> */}

          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
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
