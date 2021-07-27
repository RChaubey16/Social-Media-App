import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Page404, Login, Signup } from '.';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);
      console.log('user : ', user);
    }
  }

  render() {
    console.log('Props >>> ', this.props);
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                // render is used to render the desired component along with necessary props.
                // props argument stores the default props such as history, location, matched, params
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={Page404} />
          </Switch>
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
