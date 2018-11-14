import React from "react";
import Icon from "./icons";

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      message : this.props.message || "",
      isCompleted : this.props.isCompleted || false 
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

  handleMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.handleMessageUpdate(e);
    }
  }

  handleMessageUpdate = (e) => {
    const {id} = this.props;
    const {message} = this.state;
    e.preventDefault();
    if(message.length > 0){
      this.props.handleMessageUpdate(id, message);
      this.toggleEditing(e);
    }
  }

  handleStatusUpdate = (e) => {
    const {id} = this.props;
    e.preventDefault();
    this.setState({
      isCompleted: !this.state.isCompleted
    }, () => {
      this.props.handleStatusUpdate(id, this.state.isCompleted)
    })
  }

  handleDelete = (e) => {
    e.preventDefault();
    const {id} = this.props;
    this.props.handleDelete(id)
  }

  render() {
    const { message, isCompleted, isEditing } = this.state;
    return (
      <div className={isCompleted ? "note-item completed" : "note-item"} ref={this.parentRef}>
        <div className="status">
          <a href="#" onClick={this.handleStatusUpdate} title={isCompleted ? "Mark as incomplete" : "Mark as complete"}>
            <Icon name={isCompleted ? "checked" : "check-circle"} size="24" />
          </a>
        </div>
        <div className="message">
          {isEditing ? (
            <input 
              ref={this.inputRef} 
              className="form-control" 
              value={message} 
              onChange={this.handleMessage} 
              onKeyPress={this.handleEnter}
            />
          ) : (
            <h3>{message}</h3>
          )}
        </div>
        <div className="actions">
          {isEditing ? (
            <a href="#" onClick={this.handleMessageUpdate} title="Update">
              <Icon name="check-simple" size="24" />
            </a>
          ) : (
            <a href="#" onClick={this.toggleEditing} title="Edit">
              <Icon name="edit" size="24" />
            </a>
          )}
          <a href="#" title="Delete" onClick={this.handleDelete}>
            <Icon name="trash" size="24" />
          </a>
        </div>
      </div>
    );
  }
}

export default NoteItem;
