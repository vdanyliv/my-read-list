import React, { Component } from 'react';
import Navigation from 'containers/navigation';
import Search from 'containers/search';
import Books from 'containers/books';

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
						<Books />
					</div>
				</div>
		);
	}
}

export default App;