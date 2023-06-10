import axios from 'axios'
import { showAlert } from 'layout/alert/store/alertSlice'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { setThisRoom } from '../../../../store/lobbySlice'
import { useState } from 'react'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const useCreateRoom = (hideModal: () => void) => {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((store) => store.auth)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    const createRoom = async (color: string, time: string) => {
        try {
            setLoading(true)
            const response = await axios.post<string>(`${SERVER_URL}/rooms`, {
                user: user?._id,
                color,
                time
            })
            dispatch(setThisRoom(response.data))
            alert('Successfully created new room!', 'success')
            hideModal()
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    return { loading, error, createRoom }
}

export default useCreateRoom
