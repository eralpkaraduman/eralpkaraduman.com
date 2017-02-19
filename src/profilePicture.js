import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

const imageStyle = {
  cursor: 'pointer',
};

class ProfilePicture extends Component {

  handleClick = () => {
    console.log('lol');
  }

  render() {
    return (
      <Image
        src="https://gravatar.com/avatar/0612a1a35de3e5d07bb2d5b58a254005?s=200"
        circle
        thumbnail
        onClick={this.handleClick}
        style={imageStyle}
      />
    );
  }
}

export default ProfilePicture;
