import React, { useState } from 'react';
import { Button, Card, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateContentThunk } from '../../store/slices/notes.slice';

const NoteCardEdit = ({ finishEdit, note }) => {

    // State for the edited content of the note
    const [ content, setContent ] = useState(note.content);

    const dispatch = useDispatch();

    // Function to handle form submission
    const submit = e => {
        e.preventDefault();
        // Dispatch action to update the content of the note
        dispatch(updateContentThunk(content, note.id));
        finishEdit();
    }

    return (
        <Col>
            <Card>
                <Card.Body>
                    {/* Form for editing the note content */}
                    <Form onSubmit={submit}>
                        <Form.Control 
                            as="textarea" 
                            rows={3}
                            value={content}
                            onChange={e => setContent(e.target.value)}
                        />
                        <div className="mt-2 text-end">
                            <Button
                                variant='primary'
                                size='sm'
                                className="me-1"
                                type="submit"
                            >
                                Update
                            </Button>
                            <Button
                                variant='secondary'
                                size='sm'
                                onClick={finishEdit}
                            >
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default NoteCardEdit;
