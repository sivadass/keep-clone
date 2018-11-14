import React from "react";
import NoteItem from "../common/note-item";
import AddNoteForm from "../common/add-note-form";
import EmptyState from "../common/empty-state";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  handleAddNew = (id, message, isCompleted) => {
    let newNote = { id, message, isCompleted };
    let notes = [...this.state.notes, newNote];
    this.setState({ notes });
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  handleStatusUpdate = (id, isCompleted) => {
    let notes = [...this.state.notes];
    let index = notes.findIndex(item => item.id === id);
    notes[index].isCompleted = isCompleted;
    this.setState({ notes });
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log(JSON.parse(localStorage.getItem('notes')), null, 2);
  }

  handleMessageUpdate = (id, message) => {
    let notes = [...this.state.notes];
    let index = notes.findIndex(item => item.id === id);
    notes[index].message = message;
    this.setState({ notes });
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  handleDelete = (id) => {
    let notes = [...this.state.notes];
    let index = notes.findIndex(item => item.id === id);
    notes.splice(index, 1);
    this.setState({ notes });
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  renderTodos = () => {
    const {notes} = this.state;
    const todo = notes.filter(item => item.isCompleted === false);
    if(todo.length > 0){
      return(
        <div className="notes-wrapper">
          <h2>Todos</h2>
          {todo.map(item => (
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
      )
    } else{
      return(
        <EmptyState 
          title="Sorry, no notes to show :(" 
          message="You can add new note using the Add New Button above."
        />
      )
    }
  }

  renderCompleted = () => {
    const {notes} = this.state;
    const completed = notes.filter(item => item.isCompleted === true);
    if(completed.length > 0){
      return(
        <div className="notes-wrapper">
          <h2>Completed</h2>
          {completed.map(item => (
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
      )
    } else{
      return false
    }
  }

  render() {
    return (
      <div className="container home">
        <AddNoteForm handleAddNew={this.handleAddNew}/>
        <div>
          {this.renderTodos()}
        </div>
        <div>
          {this.renderCompleted()}
        </div>
      </div>
    );
  }
}

export default Home;
