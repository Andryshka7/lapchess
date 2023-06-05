import axios from 'axios'
import { showAlert } from 'layout/alert/store/alertSlice'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { setThisRoom } from '../../../../store/lobbySlice'
import { useState } from 'react'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

interface RoomSettings {
    time: string
    color: string
}

const useCreateRoom = (hideModal: () => void) => {
    const dispatch = useAppDispatch()
    const { token } = useAppSelector((store) => store.auth)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    const createRoom = async (settings: RoomSettings) => {
        try {
            setLoading(true)
            const response = await axios.post<string>(`${SERVER_URL}/rooms`, settings, {
                headers: { Authorization: `Bearer ${token}` }
            })
            const id = response.data
            dispatch(setThisRoom(id))
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
