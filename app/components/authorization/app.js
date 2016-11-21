import React, { Component } from 'react';
import Navigation from 'containers/common/navigation';
import SignIn from 'containers/authorization/signin';

class App extends Component {
  render() {
    return (
      <div className="row main-container">
        <div className="row nav-container">
          <Navigation />
        </div>
        <div className="row col-md-12">
          <SignIn />
        </div>
      </div>
    );
  }
}

export default App;
