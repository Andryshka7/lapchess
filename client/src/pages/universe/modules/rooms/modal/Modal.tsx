import { useState } from 'react'

import Loader from './components/Loader'
import CreateRoom from './components/CreateRoom'
import Error from './components/Error'

interface ModalProps {
    closeModal: () => void
}

const Modal = ({ closeModal }: ModalProps) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const windowContols = { closeModal, setLoading, setError }

    if (error) {
        return <Error {...windowContols} />
    } else if (loading) {
        return <Loader />
    } else {
        return <CreateRoom {...windowContols} />
    }
}

export default Modal
