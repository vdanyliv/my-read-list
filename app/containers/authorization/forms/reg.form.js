import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { user } from 'reducers/index';

class RegForm extends Component {
	render() {
		return (
      <div>
        <h3>Registration</h3>
  			<div className="form-group">
          <label htmlFor="name">Your name</label>
          <input type="text" className="form-control" classID="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your email</label>
          <input type="email" className="form-control" classID="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Your password</label>
          <input type="password" className="form-control" classID="password" />
        </div>
        <div className="form-group">
          <a className="btn btn-default" role="button">Register</a>
        </div>
      </div>
		)
	}
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ userAcion: user }, dispatch);
}



export default connect(mapStateToProps, matchDispatchToProps)(RegForm);