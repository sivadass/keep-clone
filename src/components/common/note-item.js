import React from "react";

class NoteItem extends React.Component {
  render() {
    const { message, isCompleted } = this.props;
    return (
      <div className="note-item">
        <h3>{message}</h3>
      </div>
    );
  }
}

export default NoteItem;
