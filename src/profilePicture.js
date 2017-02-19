import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

const imageStyle = {
  cursor: 'normal',
};

class ProfilePicture extends Component {

  render() {
    return (
      <Image
        src="https://gravatar.com/avatar/0612a1a35de3e5d07bb2d5b58a254005?s=140"
        circle
        thumbnail
        style={imageStyle}
      />
    );
  }
}

export default ProfilePicture;
