import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editUser, clearAuthState } from '../actions/auth';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      confirmPassword: '',
      editMode: false,
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleChange = (fieldName, val) => {
    this.setState({
      [fieldName]: val, // example = name: "Raj", password: '123'
    });
  };

  handleClick = () => {
    const { name, password, confirmPassword } = this.state;
    const { user } = this.props.auth;

    this.props.dispatch(editUser(name, password, confirmPassword, user._id));
  };

  render() {
    const { user, error } = this.props.auth;
    const { editMode } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>

        {error && <div className="alert error-dailog">{error}</div>}
        {error === false && (
          <div className="alert success-dailog">
            Profile updated successfully !
          </div>
        )}
        <div className="field">
          <div classname="field-label">Email</div>
          <div classname="field-value">{user.email}</div>
        </div>

        <div className="field">
          <div classname="field-label">Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('name', e.target.value)}
              value={this.state.name}
            />
          ) : (
            <div classname="field-value">{user.name}</div>
          )}
        </div>

        {editMode && (
          <div className="field">
            <div classname="field-label">New password</div>

            <input
              type="password"
              onChange={(e) => this.handleChange('password', e.target.value)}
              value={this.state.password}
            />
          </div>
        )}

        {editMode && (
          <div className="field">
            <div classname="field-label">Confirm password</div>

            <input
              type="password"
              onChange={(e) =>
                this.handleChange('confirmPassword', e.target.value)
              }
              value={this.state.confirmPassword}
            />
          </div>
        )}

        <div className="btn-grp">
          {editMode ? (
            <button className="button save-btn" onClick={this.handleClick}>
              Save
            </button>
          ) : (
            <button
              className="button edit-btn"
              onClick={() => this.handleChange('editMode', true)}
            >
              Edit profile
            </button>
          )}

          {editMode && (
            <div
              className="go-back"
              onClick={() => this.handleChange('editMode', false)}
            >
              Go back
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}
export default connect(mapStateToProps)(Settings);
