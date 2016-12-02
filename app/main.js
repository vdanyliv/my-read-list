import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers';
import Main from './components/books/app';
import MyBooks from './components/mybooks/app';
import Auth from './components/authorization/app';
import loginRequired from './services/route-auth';

const store = applyMiddleware(thunk)(createStore)(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const rootElement = document.getElementById('root');

class App extends Component {
  constructor() {
    super();

    this.state = {
      checkAuthorization: false
    };
  }

  componentDidMount() {
    const navigationStore = store.getState().navigation;

    loginRequired(store.dispatch, navigationStore, this);
  }

  render() {
    return (
      <div>
        { this.state.checkAuthorization ? this.renderApplication() : this.renderLoader() }
      </div>
    );
  }

  renderLoader() {
    return (
      <div>Cheking authorization</div>
    );
  }

  renderApplication() {
    return (
      <Router history={ browserHistory }>
        <Route path="/" component={Main}></Route>
        <Route path="mybooks" component={MyBooks}></Route>
        <Route path="signin" component={Auth}></Route>
      </Router>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
