import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { showAlert } from 'layout/alert/store/alertSlice'
import axios from 'axios'

import ModalForm from './components/Form'
import Loader from './components/Loader'
import Error from './components/Error'
import { RoomSettings } from '../../types/RoomSettings'
import { setThisRoom } from '../../store/lobbySlice'

interface ModalProps {
    closeModal: () => void
}

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const Modal = ({ closeModal }: ModalProps) => {
    const dispatch = useAppDispatch()
    const { token } = useAppSelector((store) => store.auth)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    const createRoom = async (settings: RoomSettings) => {
        setLoading(true)
        try {
            const response = await axios.post<string>(`${SERVER_URL}/rooms`, settings, {
                headers: { Authorization: `Bearer ${token}` }
            })
            const id = response.data
            dispatch(setThisRoom(id))

            alert('Successfully created new room!', 'success')
            closeModal()
        } catch (error) {
            setError(true)
        }
    }

    if (error) {
        return <Error closeModal={closeModal} />
    } else if (loading) {
        return <Loader />
    }
    return <ModalForm createRoom={createRoom} closeModal={closeModal} />
}

export default Modal
