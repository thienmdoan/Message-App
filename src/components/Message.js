import React from 'react';
require('../styles/MessageBox.css');

class Message extends React.Component {
  render() {
    return (
      <div>
        <div className={'date'}>
          { this.props.date }
        </div>
        <div className={'message'}>
          { this.props.message }
        </div>
      </div>
    );
  }
}

Message.defaultProps = {
  message: '',
  date: '',
};

export default Message;
