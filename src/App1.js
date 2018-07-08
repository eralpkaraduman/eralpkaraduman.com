import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import ProfilePicture from './profilePicture.png';
import HomeText from './content/home.md';

const containerStyle = {
  margin: 20,
};

const imageStyle = {
  cursor: 'normal',
  height: 'auto',
  width: 'auto',
  maxWidth: 140,
  maxHeight: 'auto',
};


class App extends Component {
  render() {
    return (
      <div className="row center-xs" style={containerStyle}>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="box">
            <img
              style={imageStyle}
              src={ProfilePicture}
              alt="profile"
            />
          </div>
          <div className="box">
            <h1>Eralp Karaduman</h1>
          </div>
          <div className="row left-xs" style={{ marginTop: 30 }}>
            <div className="box" >
              <div style={{ textAlign: 'left' }}>
                <ReactMarkdown
                  source={HomeText}
                  skipHtml={false}
                  escapeHtml={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
