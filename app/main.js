import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from "./reducers";
import App from './components/books/app';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let rootElement =  document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
rootElement);