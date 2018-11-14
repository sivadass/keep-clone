import React from "react";
import NoteItem from "../common/note-item";
import AddNoteForm from "../common/add-note-form";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      notes: [
        {
          id: 1,
          message: "Lorem Ipsum some text goes here",
          isCompleted: false
        },
        {
          id: 2,
          message: "Lora Bipsu Ipsum some text goes here",
          isCompleted: false
        },
        {
          id: 3,
          message: "Dolor Ipsum some text goes here",
          isCompleted: true
        }
      ]
    };
  }

  handleTitleKeyword = e => {
    this.setState({
      titleKeyword: e.target.value
    });
  };

  render() {
    const { isLoading, notes } = this.state;
    return (
      <div className="container home">
        <AddNoteForm />
        <div>
          {notes.map(item => (
            <NoteItem
              key={item.id}
              isCompleted={item.isCompleted}
              message={item.message}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
