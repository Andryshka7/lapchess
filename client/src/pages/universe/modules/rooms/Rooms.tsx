import { useAppSelector } from 'redux/store'
import { useState } from 'react'
import Room from './room/Room'
import Modal from './modal/Modal'

const Rooms = () => {
    const { rooms } = useAppSelector((store) => store)
    const { id } = useAppSelector((store) => store.chess)

    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)

    return (
        <>
            <div className='w-[1000px] h-[636px] mx-auto mt-3 p-2.5 rounded-lg bg-black bg-opacity-10'>
                {rooms.map((room) => (
                    <Room {...room} key={room.id} />
                ))}
            </div>
            {!id && (
                <div
                    className='w-[260px] h-[65px] flex items-center justify-between mx-auto my-3 px-[30px] bg-black bg-opacity-10 rounded-lg transition duration-200 hover:scale-105'
                    onClick={() => setShowModal(true)}
                >
                    <div className='w-10 h-10 text-5xl font-medium rounded-full bg-[#4AB561]'>
                        <p className='relative text-[45px] font-normal top-[-8px] left-[5px]'>+</p>
                    </div>
                    <h2 className='text-2xl font-medium'>Create game</h2>
                </div>
            )}
            {showModal && <Modal closeModal={closeModal} />}
        </>
    )
}

export default Rooms
