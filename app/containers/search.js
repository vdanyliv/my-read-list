import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { bookSearch } from 'actions/book.select';

class Search extends Component {
	showSelected() {
		if (this.props.founded.length) {
			return this.props.founded.map((item) => {
				return(
					<div key={ item.id }>
						<div>{ item.author }</div>
					</div>
				)
			})
		}
	}

	render() {
		return (
			<div className="col-md-12 search-container">
				<input onInput={(e) => {
						bookSearch(this.props.bookSearch({ value: e.currentTarget.value, books: this.props.books}))
					}} type="text" className="form-control" placeholder="Search book!" />

				<div>you typed: { this.showSelected() }</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		books: state.books,
		founded: state.bookSearch
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ bookSearch: bookSearch }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Search);