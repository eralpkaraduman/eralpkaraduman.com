import React, { Component } from 'react';
import ProfilePicture from './profilePicture';
import MarkdownContent from './markdownContent';

const containerStyle = {
  margin: 20,
};

const titleStyle = {
  fontSize: '2em',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
};

class App extends Component {

  render() {
    return (
      <div className="row center-xs" style={containerStyle}>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="box">
            <ProfilePicture />
          </div>
          <div className="box">
            <h1 style={titleStyle} >Eralp Karaduman</h1>
          </div>
          <div className="row left-xs" style={{ marginTop: 30 }}>
            <div className="box" >
              <MarkdownContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
