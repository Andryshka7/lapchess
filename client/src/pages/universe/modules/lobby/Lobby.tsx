import { useState } from 'react'
import Rooms from './components/rooms/Rooms'
import Modal from './components/modal/Modal'
import CreateRoomBtn from './components/CreateRoomBtn'
import Portal from 'layout/Portal'

const Lobby = () => {
    const [showModal, setShowModal] = useState(false)

    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)

    return (
        <div className='mx-auto my-3 w-[1000px]'>
            <Rooms />
            <CreateRoomBtn openModal={openModal} />
            {showModal && (
                <Portal>
                    <Modal closeModal={closeModal} />
                </Portal>
            )}
        </div>
    )
}

export default Lobby
