import React, { useContext } from 'react';
import NoteContext from '../context';
import Note from './Note';
export default function NoteList(){
const {state}= useContext(NoteContext);

return(
    <div className="notes-container">
        {state.notes.map((note,i)=>{
           return <Note note={note} key={i} />
        })}

    </div>
)
}