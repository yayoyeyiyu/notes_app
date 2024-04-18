import React, { useState } from 'react';
import NoteCardDefault from './NoteCardDefault';
import NoteCardEdit from './NoteCardEdit';

const NoteCard = ({ note }) => {
    // Initialize state to track whether the note is being edited
    const [isEditing, setIsEditing] = useState(false);

    // Render the NoteCardEdit component if isEditing is true, otherwise render NoteCardDefault
    if (isEditing) {
        return <NoteCardEdit finishEdit={() => setIsEditing(false)} note={note} />;
    } else {
        return <NoteCardDefault note={note} edit={() => setIsEditing(true)} />;
    }
};

export default NoteCard;
