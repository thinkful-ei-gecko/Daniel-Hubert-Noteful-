import React from 'react';
import {Link} from 'react-router-dom'


export default function Notes(props) {
  return (
    <ul>
      {props.notes.map(note => {
        const timeStamp = new Date(note.modified)
        const modifiedDate = timeStamp.toDateString();
        return (
          <li key= {note.id}>
            <Link to={`/note/${note.id}`}>
            <div className='noteTitle'>
              <p>{note.name}</p>
            </div>
            <div className='Modified'>
              <p>{modifiedDate}</p>
            </div>
            </Link>
            <div className="delete">
              <button>Remove</button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}