import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    show: false,
    text: '',
    type: '',
    timeout: 2000
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert: (state, action: PayloadAction<{ text: string; type: string }>) => {
            state.show = true
            state.text = action.payload.text
            state.type = action.payload.type
        },
        hideAlert: (state) => {
            state.show = false
        }
    }
})

export default alertSlice.reducer

export const { showAlert, hideAlert } = alertSlice.actions
