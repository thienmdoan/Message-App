import React from 'react';

class AddButton extends React.Component {
  buttonClickHandler(event) {
    event.preventDefault();
    this.props.onAdd();
  }

  render() {
    return (
      <button className={'button'} onClick={this.buttonClickHandler.bind(this)}>
        Keep Adding
      </button>
    );
  }
}

AddButton.defaultProps = {
};

export default AddButton;
