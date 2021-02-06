import React, { useReducer, useContext } from 'react';
import NoteContext from'./context';
import notesReducer from './reducer';
import Nav from './Components/Nav';
import './App.css';
import AddNote from './Components/AddNote';
import NoteList from './Components/NoteList';
import EditNote from './Components/EditNote'
function App() {
  const initialState = useContext(NoteContext);
  const [state, dispatch] = useReducer(notesReducer, initialState);
  return (
<div>
<NoteContext.Provider value={{ state, dispatch }}>
      <Nav />
      {state.currentNote === null ? (
        <div>
          <AddNote />
          <NoteList />
        </div>
      ) : (
        <EditNote />
      )}
    </NoteContext.Provider>
</div>   
  );
}

export default App;
