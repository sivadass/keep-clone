import React from 'react';
import uuidv1 from 'uuid/v1';
import Icon from "./icons";

class AddNoteForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: uuidv1(),
      message: "",
      isCompleted: false
    }
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    const {id, message, isCompleted} = this.state;
    if(message.length > 0){
      this.props.handleAddNew(id, message, isCompleted);
      this.setState({
        id: uuidv1(),
        message: "",
        isCompleted: false
      })
    }
  }

  render(){
    return(
      <div className="add-new-note">
        <input 
          className="form-control" 
          type="text" value={this.state.message} 
          placeholder="Enter new note here" 
          onChange={this.handleChange}
          onKeyPress={this.handleEnter}
        />
        <button className="primary-cta" type="submit" onClick={this.handleSubmit}>
          <Icon name="add" size="21" /> Add New
        </button>
      </div>
    )
  }
}

export default AddNoteForm;