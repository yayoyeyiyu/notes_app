import React from 'react';
import { Card, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { checkNoteThunk, deleteContentThunk } from '../../store/slices/notes.slice';
import ButtonsEditDelete from '../ButtonsEditDelete';

const NoteCardDefault = ({ note, edit }) => {
    const dispatch = useDispatch();

    // Define a function to remove the note
    const remove = () => dispatch(deleteContentThunk(note.id));
    
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Text>
                        {note.content}
                    </Card.Text>
                    <Form.Check
                        type='checkbox'
                        label='Archive'
                        id={`${note.id}-archive`}
                        checked={note.archive}
                        onChange={() => dispatch(checkNoteThunk(note))}
                    />
                    <ButtonsEditDelete onUpdate={edit} onDelete={remove}/>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default NoteCardDefault;
