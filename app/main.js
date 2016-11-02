import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from "./reducers";
import Main from './components/books/app';
import MyBooks from './components/mybooks/app';

const store = applyMiddleware(thunk)(createStore)(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let rootElement =  document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
		    <Route path="/" component={Main}></Route>
		    <Route path="mybooks" component={MyBooks}></Route>
		</Router>
	</Provider>, 
rootElement);