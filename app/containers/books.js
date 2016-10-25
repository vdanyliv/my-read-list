import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectBook } from 'actions/book.select'

class Books extends Component {
	createListItem() {

		return this.props.books.map((item) => {
			return (
				<div 
					key={ item.id }
					onClick={ () => selectBook(this.props.selectBook(item)) }
				>
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

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Books);