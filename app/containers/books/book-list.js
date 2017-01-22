import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectBook } from 'actions/book.select';
import { bookToFavorite } from 'actions/book.favorite';

class BookList extends Component {
  createListItem() {
    if (this.props.items.length) {
      return this.props.items.map(item => {
        return (
          <div className="col-md-12 book-item" key={ item.id } >
            <div className="col-md-2 col-xs-2">
            <img className="img-responsive book-img" src={
            item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail ? item.volumeInfo.imageLinks.thumbnail : 'img/default-img.png'
            } />
            </div>
            <div className="col-md-8 col-xs-8">
              <h3 onClick={ () => selectBook(this.props.selectBook(item)) }>{ item.volumeInfo.title }</h3>
              <p>{ item.volumeInfo.description ? item.volumeInfo.description.substr(0, 256) + '...' : 'Description empty' }</p>
            </div>
            <div className="col-md-2 col-xs-2">
              <a className="sep-link" href="#">To Read</a>
              <a className="sep-link" href="#" onClick={
                e => this.addBookToFavorite(e, item)
              }>To Favorite</a>
            </div>
          </div>
        );
      });
    }
  }
  addBookToFavorite(e, item) {
    e.preventDefault();
    return bookToFavorite(this.props.bookToFavorite(this.props.user, item));
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
    searchState: state.bookSearch.searchInProgress,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectBook: bindActionCreators(selectBook, dispatch),
    bookToFavorite: bindActionCreators(bookToFavorite, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
