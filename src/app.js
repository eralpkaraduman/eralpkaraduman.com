import React, { Component } from 'react';
import ProfilePicture from './profilePicture';

const containerStyle = {
  margin: 20,
};

const titleStyle = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
};

class App extends Component {

  render() {
    return (
      <div className="row center-xs" style={containerStyle}>
        <div className="col-xs-6">
          <div className="box">
            <ProfilePicture />
          </div>
          <div className="box">
            <h1 style={titleStyle} >Eralp Karaduman</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
