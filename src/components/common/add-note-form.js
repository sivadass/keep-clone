import React from 'react';
import Icon from "./icons";

class AddNoteForm extends React.Component{
  render(){
    return(
      <div className="add-new-note">
        <input className="form-control" type="text" placeholder="Enter new note here" />
        <button className="primary-cta" type="submit">
          <Icon name="add" size="21" /> Add New
        </button>
      </div>
    )
  }
}

export default AddNoteForm;