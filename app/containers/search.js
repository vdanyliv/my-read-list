import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Search extends Component {
	render() {
		return (
			<div className="col-md-12 search-container">
				<input type="email" className="form-control" placeholder="Search book!" />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		books: state.search
	}
}

export default connect(mapStateToProps)(Search);