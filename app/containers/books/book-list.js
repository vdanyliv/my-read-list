import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectBook } from 'actions/book.select';

class BookList extends Component {
  createListItem() {
    if (this.props.items.length) {
      return this.props.items.map(item => {
        return (
          <div className="col-md-12 book-item" key={ item.id } onClick={ () => selectBook(this.props.selectBook(item)) } >
            <div className="col-md-2 col-xs-2">
            <img className="img-responsive book-img" src={
            item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : 'img/default-img.png'
            } />
            </div>
            <div className="col-md-8 col-xs-8">
              <h3>{ item.volumeInfo.title }</h3>
              <p>{ item.volumeInfo.description ? item.volumeInfo.description.substr(0, 256) + '...' : 'Description empty' }</p>
            </div>
            <div className="col-md-2 col-xs-2">
              <a href="#">To Read</a>
            </div>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div className={
        this.props.searchState ? 'content-container loader' :	'content-container'
      }>
      <div className="row">
      { this.createListItem() }
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.bookSearch.items,
    searchState: state.bookSearch.searchInProgress
  };
}

function mapDispatchToProps(dispatch) {
  return { selectBook: bindActionCreators(selectBook, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
