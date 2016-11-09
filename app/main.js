import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import Main from './components/books/app';
import MyBooks from './components/mybooks/app';
import Auth from './components/authorization/app';

const store = applyMiddleware(thunk)(createStore)(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
      <Route path="/" component={Main}></Route>
      <Route path="mybooks" component={MyBooks}></Route>
      <Route path="signin" component={Auth}></Route>
		</Router>
	</Provider>,
rootElement);
