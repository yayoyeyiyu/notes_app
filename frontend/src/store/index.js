import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slices/app.slice'
import notesSlice from './slices/notes.slice'
import userSlice from './slices/user.slice'

export default configureStore({
    reducer: {
        app: appSlice,
        user: userSlice,
        notes: notesSlice,
    }
})
