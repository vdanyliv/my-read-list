import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Books extends Component {
	createListItem() {

		return this.props.books.map((item) => {
			return (
				<div key={ item.id }>
					<div>{ item.book }</div>
					<li>Name: { item.author }</li>
				</div>
			)
		});
	}

	render() {
		return (
			<div className="content-container">
				{ this.createListItem() }
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		books: state.search
	}
}

export default connect(mapStateToProps)(Books);