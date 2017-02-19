import ReactMarkdown from 'react-markdown';
import React, { Component } from 'react';

const markdownText =
`I'm a **full stack mobile software developer** based in Helsinki, Finland.
I build mostly **iOS** apps along with their **backend** and **Android** counterparts.
When I'm not working on apps, I like **making games** at our own [Super Damage Games](http://superdamage.com)

**[Download my CV](http://goo.gl/zau5pb)** (not looking for work currently)

Best ways to contact me would be;  
**Email:** [eralp@eralpkaraduman.com](mailto:eralp@eralpkaraduman.com)  
**Twitter:** [@eralpkaraduman](http://twitter.com/eralpkaraduman)  

[PGP Key](https://keybase.io/eralp/key.asc) FingerPrint:  
0350 3E22 3153 4F9F CB96 9513 CF03 F1AB 4549 DF7F
`;

class MarkdownContent extends Component {

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
        <ReactMarkdown source={markdownText} />
      </div>
    );
  }
}

export default MarkdownContent;
