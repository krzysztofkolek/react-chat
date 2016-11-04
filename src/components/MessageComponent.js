'use strict';

import React from 'react';

require('styles//Message.css');

class MessageComponent extends React.Component {
  render() {
    return (
      <div className="message-component">
        <div>
          {this.props.author}
        </div>
        <div>
          {this.props.dateTime}  
        </div>
        <div>
          {this.props.message}  
        </div>
      </div>
    );
  }
}

MessageComponent.displayName = 'MessageComponent';

// Uncomment properties you need
// MessageComponent.propTypes = {};
// MessageComponent.defaultProps = {};

export default MessageComponent;
