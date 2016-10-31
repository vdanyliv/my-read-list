import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectBook } from 'actions/book.select';
import { bookSearch } from 'actions/books.search';

class Books extends Component {
	createListItem() {
		if (this.props.items.length) {
		return this.props.items.map((item) => {
			return (
				<div 
					key={ item.id }
					onClick={ () => selectBook(this.props.selectBook(item)) }
				>
					<div>Title: { item.volumeInfo.title }</div>
					<div>Description: { item.volumeInfo.description }</div>
				</div>
			)
		});
		}
	}

	render() {
		return (
			<div className="content-container">
				<div>Is loader active: { console.error(this.props.searchState) }</div>
				{ this.createListItem() }
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		items: state.bookSearch.items,
		searchState: state.bookSearch.searchInProgress
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Books);