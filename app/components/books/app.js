import React, { Component } from 'react';
import Navigation from 'containers/common/navigation';
import Search from 'containers/books/search';
import BookList from 'containers/books/book-list';

require('common/style/css/bootstrap.css');
require('common/style/css/custom.css');

class App extends Component {
  render() {
    return (
      <div className="row main-container">
        <div className="row nav-container">
          <Navigation />
        </div>
        <div className="row col-md-12">
          <Search />
        </div>
        <div className="row col-md-12">
          <BookList />
        </div>
      </div>
    );
  }
}

export default App;

