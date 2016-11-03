import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Navigation extends Component {
	createListItem() {

		return this.props.nav.map((item) => {
			return (
				<li key={ item.id }><Link to={ item.link }>{item.name}</Link></li>
			)
		});
	}

	render() {
		return (
			<ul className="nav nav-pills">
				{ this.createListItem() }
			</ul>
		)
	}
}

function mapStateToProps(state) {
	return {
		nav: state.navigation
	}
}

export default connect(mapStateToProps)(Navigation);