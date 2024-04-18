import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import { genericRequestThunk } from './app.slice';

export const notesSlice = createSlice({
    name: 'Notes',
    initialState: [],
    reducers: {
        setNotes: (_, { payload }) => payload,
        addNote: (state, { payload }) => { state.push(payload) },
        updateNote: (state, { payload: Note }) => {
            const index = state.findIndex(t => t.id === Note.id);
            state[index] = Note;
        },
        deleteContent: (state, { payload: id }) => {
            return state.filter(note => note.id !== id);
        }
    }
});

export const getNotesThunk = () => (dispatch) => {
    dispatch(genericRequestThunk(async () => {
        const res = await axios().get('/notes');
        dispatch(setNotes(res.data));
    }));
};

export const addNoteThunk = (content) => async (dispatch) => {
    dispatch(genericRequestThunk(async () => {
        const { data: newNote } = await axios().post('/notes', { content, archive: false });
        dispatch(addNote(newNote));
    }));
};

export const checkNoteThunk = (Note) => (dispatch) => {
    dispatch(genericRequestThunk(async () => {
        const res = await axios().put(`/notes/${Note.id}`, { archive: !Note.archive });
        dispatch(updateNote(res.data));
    }));
};

export const updateContentThunk = (content, id) => (dispatch) => {
    dispatch(genericRequestThunk(async () => {
        const res = await axios().put(`/notes/${id}`, { content });
        dispatch(updateNote(res.data));
    }, "Note updated successfully"));
};

export const deleteContentThunk = (id) => (dispatch) => {
    dispatch(genericRequestThunk(async () => {
        await axios().delete(`/notes/${id}`);
        dispatch(deleteContent(id));
    }));
};

export const { setNotes, addNote, updateNote, deleteContent } = notesSlice.actions;

export default notesSlice.reducer;
