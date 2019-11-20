import React from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'

export default class NotePageMain extends React.Component {
  
  handleDeleteNote = noteID => {
    this.props.history.push(`/`)
  }
  
  render() {
    return (
      <section className='NotePageMain'>
        <Note
          id={this.props.note.id}
          name={this.props.note.name}
          modified={this.props.note.modified}
          handleDeleteNote={this.handleDeleteNote}
        />
        <div className='NotePageMain__content'>
          {this.props.note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
  
}

NotePageMain.defaultProps = {
  note: {
    content: '',
  }
}
