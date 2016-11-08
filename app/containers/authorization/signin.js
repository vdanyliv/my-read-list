import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from './forms/login.form';
import RegForm from './forms/reg.form'

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      activeState: null
    }
  }
  
  showAuthForm(type) {
    this.setState({ activeState: type });
  }

  render() {
    return (
      <div className="row col-md-12">
        <h3>Authorization</h3>
        <div className="col-md-6">
          <div className="col-md-2">
           <button onClick={() => this.showAuthForm('reg') }>Regirtration</button>
          </div>
          <div className="col-md-2">
           <button onClick={() => this.showAuthForm('login') }>Login</button>
          </div>
        </div>
        <div className="col-md-6">
          { this.state.activeState === 'reg' && <RegForm /> }
          { this.state.activeState === 'login' && <LoginForm /> }
        </div>
      </div>
    )
  }
}

export default SignIn;