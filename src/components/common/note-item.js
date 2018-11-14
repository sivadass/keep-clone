import React from "react";
import Icon from "./icons";

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }
  toggleEditing = e => {
    e.preventDefault();
    this.setState({
      isEditing: !this.state.isEditing
    });
  };
  render() {
    const { message, isCompleted } = this.props;
    const { isEditing } = this.state;
    return (
      <div className="note-item">
        <div className="status">
          <Icon name={isCompleted ? "checked" : "check-circle"} size="24" />
        </div>
        <div className="message">
          {isEditing ? (
            <input className="message-input" defaultValue={message} />
          ) : (
            <h3>{message}</h3>
          )}
        </div>
        <div className="actions">
          <a href="#" onClick={this.toggleEditing}>
            <Icon name="edit" size="24" />
          </a>
          <a href="#">
            <Icon name="trash" size="24" />
          </a>
        </div>
      </div>
    );
  }
}

export default NoteItem;
