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
				<div className="col-md-12 book-item"
					key={ item.id }
					onClick={ () => selectBook(this.props.selectBook(item)) }
				>
					<div className="row">
						<div className="col-md-2">
							<img src={ item.volumeInfo.imageLinks.thumbnail } className="img-thumbnail"/>
						</div>
						<div className="col-md-8">
							<div><h2>{ item.volumeInfo.title }</h2></div>
							<div><h5>{ item.volumeInfo.description }</h5></div>
						</div>
					</div>
				</div>
			)
		});
		}
	}

	render() {
		return (
			<div className="content-container">
				{ console.error(this.props.searchState) }
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