import React from "react";
import Icon from "./icons";

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.inputRef = React.createRef();
    this.parentRef = React.createRef();
  }
  toggleEditing = e => {
    e.preventDefault();
    this.setState({
      isEditing: !this.state.isEditing
    }, () => {
      if(this.state.isEditing){
        this.inputRef.current.focus();
      }
    });
  };
  handleStatus = (e) => {
    console.log('clicked');
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }
  handleClickOutside = (e) => {
    if(!this.parentRef.current.contains(e.target)){
      this.setState({
        isEditing: false
      })
    }
  }
  render() {
    const { message, isCompleted } = this.props;
    const { isEditing } = this.state;
    return (
      <div className={isCompleted ? "note-item completed" : "note-item"} ref={this.parentRef}>
        <div className="status">
          <a href="#" onClick={this.handleStatus} title={isCompleted ? "Mark as incomplete" : "Mark as complete"}>
            <Icon name={isCompleted ? "checked" : "check-circle"} size="24" />
          </a>
        </div>
        <div className="message">
          {isEditing ? (
            <input ref={this.inputRef} className="form-control" defaultValue={message} />
          ) : (
            <h3>{message}</h3>
          )}
        </div>
        <div className="actions">
          {isEditing ? (
            <a href="#" onClick={this.toggleEditing} title="Update">
              <Icon name="check-simple" size="24" />
            </a>
          ) : (
            <a href="#" onClick={this.toggleEditing} title="Edit">
              <Icon name="edit" size="24" />
            </a>
          )}
          <a href="#" title="Delete">
            <Icon name="trash" size="24" />
          </a>
        </div>
      </div>
    );
  }
}

export default NoteItem;
