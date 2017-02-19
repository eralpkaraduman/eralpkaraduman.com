import React, { Component } from 'react';
import ProfilePicture from './profilePicture';

const containerStyle = {
  margin: 20,
};

class App extends Component {

  render() {
    return (
      <div className="row center-xs" style={containerStyle}>
        <div className="col-xs-6">
          <div className="box">
            <ProfilePicture />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
