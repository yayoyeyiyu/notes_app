import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addNoteThunk } from '../../store/slices/notes.slice';

const NewNote = () => {
  // Initialize state for the content of the new note
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  
  const submit = e => {
    e.preventDefault();
    // Dispatch the addNoteThunk action with the content of the new note
    dispatch(addNoteThunk(content));
    setContent("");
    window.location.reload(); 
  };

  return (
    <>
      {/* Render the form for adding a new note */}
      <Form className="mb-5" onSubmit={submit}>
        <Form.Group className="mb-3" controlId='content'>
          <Form.Label>New note</Form.Label>
          <Form.Control 
            value={content} 
            onChange={e => setContent(e.target.value)} 
            as="textarea" 
            rows={3}
            required
          />
        </Form.Group>

        <Button className="ms-auto d-flex" type="submit">Add</Button>
      </Form>
    </>
  );
};

export default NewNote;
