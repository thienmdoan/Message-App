import React from 'react';
import Message from './Message';
require('../styles/MessageBox.css');

class MessageList extends React.Component {
  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {

    // Make a message component everytime but add button is created with a time stamp associciated
    const messageList = this.props.messageList.map((message, i) => {
        return (
          <Message
            key={i}
            message={message.message}
            date={message.date}
          />
        );
      });

    return (
      <div className={'messageList'} id='messageList'>
        { messageList }
      </div>
    );
  }
}

MessageList.defaultProps = {
  messageList: []
};

export default MessageList;
