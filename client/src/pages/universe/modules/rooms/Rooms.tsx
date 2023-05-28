import { useAppSelector } from 'redux/store'
import { useState } from 'react'
import Room from './components/room/Room'
import Modal from './components/modal/Modal'
import CreateRoomButton from './components/CreateRoomButton'
import noResults from 'assets/no-results.png'

const Rooms = () => {
    const { rooms } = useAppSelector((store) => store)
    const [showModal, setShowModal] = useState(false)

    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)

    return (
        <>
            <div className='w-[1000px] h-[636px] mx-auto mt-3 p-2.5 rounded-lg bg-black bg-opacity-10'>
                {!rooms.length ? (
                    <div className='w-full h-full m-auto flex items-center justify-center'>
                        <img src={noResults} className='w-48 h-48 m-5' alt='' />
                        <div>
                            <h1 className='w-[540px] leading-tight m-5 text-5xl font-semibold'>
                                Unfortunately, there
                                <br />
                                are no available games...
                            </h1>
                        </div>
                    </div>
                ) : (
                    rooms.map((room) => <Room {...room} key={room.id} />)
                )}
            </div>
            <CreateRoomButton openModal={openModal} />
            {showModal && <Modal closeModal={closeModal} />}
        </>
    )
}

export default Rooms
