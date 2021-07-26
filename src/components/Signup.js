import React, { Component } from 'react';
import { startSignup, signup } from '../actions/auth';
import { connect } from 'react-redux';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, name } = this.state;
    if (email && password && confirmPassword && name) {
      this.props.dispatch(startSignup());
      this.props.dispatch(signup(email, password, confirmPassword, name));
    }
  };
  render() {
    const { inProgress, error } = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            placeholder="Name"
            type="text"
            required
            onChange={(e) => this.handleInputChange('name', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => this.handleInputChange('email', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => this.handleInputChange('password', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            type="password"
            placeholder="Confirm password"
            required
            onChange={(e) =>
              this.handleInputChange('confirmPassword', e.target.value)
            }
          />
        </div>

        <div className="field">
          <button onClick={this.onFormSubmit} disabled={inProgress}>
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Signup);
