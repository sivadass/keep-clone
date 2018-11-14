import React from "react";
import NoteItem from "../common/note-item";
import AddNoteForm from "../common/add-note-form";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      notes: []
    };
  }

  handleAddNew = (id, message, isCompleted) => {
    let newNote = { id, message, isCompleted };
    let notes = [...this.state.notes, newNote];
    this.setState({ notes });
  }

  handleStatusUpdate = (id, isCompleted) => {
    let notes = [...this.state.notes];
    let index = notes.findIndex(item => item.id === id);
    notes[index].isCompleted = isCompleted;
    this.setState({ notes });
  }

  handleMessageUpdate = (id, message) => {
    let notes = [...this.state.notes];
    let index = notes.findIndex(item => item.id === id);
    notes[index].message = message;
    this.setState({ notes });
  }

  handleDelete = (id) => {
    let notes = [...this.state.notes];
    let index = notes.findIndex(item => item.id === id);
    notes.splice(index, 1);
    this.setState({ notes });
  }

  render() {
    const { isLoading, notes } = this.state;
    return (
      <div className="container home">
        <AddNoteForm handleAddNew={this.handleAddNew}/>
        <div>
          {notes.map(item => (
            <NoteItem
              key={item.id}
              id={item.id}
              isCompleted={item.isCompleted}
              message={item.message}
              handleMessageUpdate={this.handleMessageUpdate}
              handleStatusUpdate={this.handleStatusUpdate}
              handleDelete={this.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
