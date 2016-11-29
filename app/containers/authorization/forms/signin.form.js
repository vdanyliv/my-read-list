import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signinUser } from 'actions/user';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: '',
      token: ''
    };
  }

  componentWillReceiveProps(state) {
    if (!('error' in state.user)) {
      browserHistory.push('/');
    }
  }

  authorizeUser(e) {
    signinUser(this.props.authUser(this.state));
    e.preventDefault();
  }

  nameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  passwordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={e => this.authorizeUser(e)}>
        <div className="row">
          { this.props.user.error && <div className="alert alert-danger">{this.props.user.error}</div> }
        </div>
        <div>
          <h3>Login</h3>
          <div className="form-group">
          <label htmlFor="name">Your nickname:</label>
          <input type="text" className="form-control" classID="name" required value={this.state.name} onChange={e => this.nameChange(e)} />
          </div>
          <div className="form-group">
          <label htmlFor="password">Your password</label>
          <input type="password" className="form-control" classID="password" required value={this.state.password} onChange={e => this.passwordChange(e)} />
          </div>
          <div className="form-group">
          <button className="btn btn-default" role="button" type="submit">Login</button>
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
    authUser: bindActionCreators(signinUser, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
