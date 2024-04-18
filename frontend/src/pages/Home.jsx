import React, { useEffect, useState } from 'react';
import { Row, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import NewNote from '../components/Notes/NewNote';
import NoteCard from '../components/Notes/NoteCard';
import { getNotesThunk } from '../store/slices/notes.slice';
import { getLoggedUserThunk } from '../store/slices/user.slice';

const Home = () => {
    const dispatch = useDispatch();
    // Select user and notes from Redux store
    const { notes, user } = useSelector(state => state); 
    // State to toggle archived notes display
    const [showArchived, setShowArchived] = useState(false); 
    // State to toggle new note form display
    const [showNewNoteForm, setShowNewNoteForm] = useState(false); 

    // Fetch notes and logged user data on component mount
    useEffect(() => {
        dispatch(getNotesThunk());
        dispatch(getLoggedUserThunk());
    }, [dispatch]);

    // Filter active and archived notes
    const activeNotes = notes.filter(note => !note.archive);
    const archivedNotes = notes.filter(note => note.archive);

    // Function to toggle display of new note form
    const toggleNewNoteForm = () => {
        setShowNewNoteForm(!showNewNoteForm);
    };

    return (
        <div>
            <h1>{user.firstName} {user.lastName}'s Notes</h1> 
            {!showNewNoteForm && (
                <Button onClick={toggleNewNoteForm} className='m-3'>Create New Note</Button> // Button to show new note form
            )}
            {showNewNoteForm && (
                <div className="d-flex flex-column">
                    <NewNote /> 
                    <div className="d-flex justify-content-end mt-1">
                        <Button variant="danger" onClick={toggleNewNoteForm} className="w-20 ml-auto">Cancel</Button> 
                    </div>
                </div>
            )}
            {activeNotes.length === 0 && <Alert variant="info" className="p-2" style={{ backgroundColor: 'transparent', border: 'none' }}>No active notes added yet.</Alert>} {/* Display alert if no active notes */}
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {activeNotes.map(note => (
                    <NoteCard note={note} key={note.id} /> // Render active notes as NoteCard components
                ))}
            </Row>
            <div className="m-3">
                <Button onClick={() => setShowArchived(!showArchived)}>
                    {showArchived ? 'Hide Archived Notes' : 'View Archived Notes'} 
                </Button>
            </div>
            {showArchived && (
                <div>
                    {archivedNotes.length === 0 && <Alert variant="info" className="p-2">No archived notes added yet.</Alert>} {/* Display alert if no archived notes */}
                    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                        {archivedNotes.map(note => (
                            <NoteCard note={note} key={note.id} /> // Render archived notes as NoteCard components
                        ))}
                    </Row>
                </div>
            )}
        </div>
    );
};

export default Home;
