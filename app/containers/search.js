import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { bookSearch } from 'actions/book.select';

class Search extends Component {

	render() {
		return (
			<div className="col-md-12 search-container">
				<input onInput={(e) => {
						bookSearch(this.props.bookSearch(e.currentTarget.value))
					}} type="text" className="form-control" placeholder="Search book!" />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		books: state.books
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ bookSearch: bookSearch }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Search);