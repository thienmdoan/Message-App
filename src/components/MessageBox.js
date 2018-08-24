import React from 'react';

import MessageList from './MessageList';
import AddButton from './AddButton';

require('../styles/MessageBox.css');

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messageList: [] };
  }

  addMessage() {
    const messageList = this.state.messageList;
    const message = {
      message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      date: (Date.now()).toString(),
    }
    messageList.push(message);
    this.setState({ messageList });
  }

  render() {
    return (
      <div className="container">
        <MessageList messageList={this.state.messageList} />
        <AddButton onAdd={this.addMessage.bind(this)} />
      </div>
    );
  }

}

export default MessageBox;
