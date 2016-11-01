import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestSearch } from 'actions/books.search';

class Search extends Component {
	constructor() {
		super();
		this.searchDebounce;
	}
	searchInDirectory(keyword) {
		if (keyword.length > 2) {
				clearTimeout(this.searchDebounce);
				this.searchDebounce = setTimeout(() => {
					requestSearch(this.props.requestSearch(keyword));
				}, 800);
		}
	}

	render() {
		return (
			<div className="col-md-12 search-container">
				<input onInput={(e) => {
						this.searchInDirectory(e.currentTarget.value);
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
	return bindActionCreators({ 
		requestSearch: requestSearch
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Search);