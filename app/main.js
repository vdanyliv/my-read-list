import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from "./reducers";
import App from './components/books/app';

const store = createStore(allReducers);
let rootElement =  document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
rootElement);