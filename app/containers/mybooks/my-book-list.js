import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { bookGetFavorite } from 'actions/book.favorite';

class MyBookList extends Component {
  componentDidMount() {
    bookGetFavorite(this.props.bookGetFavorite(this.props.user));
  }
  getBookList() {
    return this.props.bookList.books.map(item => {
      return (
        <div key={item._id}>
          <div>{item.volumeInfo.title}</div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        {this.props.bookList ? this.getBookList() : 'No data'}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    bookList: state.bookToFavorite.bookList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    bookGetFavorite: bindActionCreators(bookGetFavorite, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBookList);
