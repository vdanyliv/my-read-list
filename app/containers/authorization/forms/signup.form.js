import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signupUser } from 'actions/user';

class RegForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: ''
    };
  }

  componentWillReceiveProps(state) {
    if (!('error' in state.user)) {
      browserHistory.push('/');
    }
  }

  createNewUser(event) {
    signupUser(this.props.newUser(this.state));
    event.preventDefault();
  }

  nameChange(event) {
    this.setState({ name: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <form onSubmit={e => this.createNewUser(e)}>
        <div className="row">
          { this.props.user.error && <div className="alert alert-danger">{this.props.user.error}</div> }
        </div>
        <div>
          <h3>Registration</h3>
          <div className="form-group">
          <label htmlFor="name">Your nickname:</label>
          <input type="text" className="form-control" classID="name" required value={this.state.name} onChange={e => this.nameChange(e)} />
          </div>
          <div className="form-group">
          <label htmlFor="password">Your password</label>
          <input type="password" className="form-control" classID="password" required value={this.state.password} onChange={e => this.passwordChange(e)} />
          </div>
          <div className="form-group">
          <button className="btn btn-default" role="button" type="submit">Register</button>
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newUser: bindActionCreators(signupUser, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
