'use strict';

require('styles//Chat.css');

import React from 'react';

import MessageComponent from './MessageComponent'
import * as ChatActions from '../actions/ChatActions'
import ChatStore from '../stores/ChatStore'

class ChatComponent extends React.Component {
  //#region constructor
  constructor(props) {
    super(props);

    this.state = {
      messages: ChatStore.getAll(),
      inputMessage: ''
    }
  }
  //#endregion constructor

  //#region methods
  rendercustomView(messagesList) {
    var self = this;
    return messagesList.map(function(message) {
      return <MessageComponent key={message.id}
                               author={message.author}
                               dateTime={message.dateTime}
                               message={message.message}/>
    });
  }

  onInputValueChange(e) {
    this.setState({
      inputMessage: e.target.value
    });
  }

  onAddBtnClick() {
    var self = this;
    ChatStore.addMessage({
      author: self.props.author,
      dateTime: '123',
      message: self.state.inputMessage
    });
  }
  //#endregion methods

  //#region events  
  componentWillMount () {
    ChatStore.on('change', () => {
      this.setState({
        messages: ChatStore.getAll()
      })
    });
  } 

  render() {
    return (
      <div className="chat-component">
        <input type="text" name="message"               
               onChange={this.onInputValueChange.bind(this)}
               placeholder="Write a message..." />
        <button onClick={this.onAddBtnClick.bind(this)}>Add</button>
        {this.rendercustomView(this.state.messages)}
      </div>
    );
  }
  //#endregion events
}

ChatComponent.displayName = 'ChatComponent';

// Uncomment properties you need
// ChatComponent.propTypes = {};
// ChatComponent.defaultProps = {};

export default ChatComponent;
