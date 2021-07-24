import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        <div className="field">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required />
        </div>

        <div className="field">
          <input type="password" placeholder="Confirm password" required />
        </div>

        <div className="field">
          <button onClick={this.handleFormSubmit}>Sign Up</button>
        </div>
      </form>
    );
  }
}

export default Signup;
