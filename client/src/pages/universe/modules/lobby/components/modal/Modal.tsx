import { useState } from 'react'
import { useAppDispatch } from 'redux/store'
import { updateID } from '../../../chess/store/chessSlice'
import { showAlert } from 'layout/alert/store/alertSlice'
import { Room } from 'pages/universe/modules/lobby/types/Room'
import axios from 'axios'

import ModalForm from './components/Form'
import Loader from './components/Loader'
import Error from './components/Error'

interface ModalProps {
    closeModal: () => void
}

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const Modal = ({ closeModal }: ModalProps) => {
    const dispatch = useAppDispatch()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const alert = (text: string, type: string) => {
        dispatch(showAlert({ text, type }))
    }

    const createRoom = async (room: Room) => {
        setLoading(true)
        try {
            await axios.post(`${SERVER_URL}/rooms`, room)
            dispatch(updateID(room.id))
            alert('Successfully created new room!', 'success')
            closeModal()
        } catch (e) {
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