import Portal from 'layout/Portal'
import Modal from './modal/Modal'
import { useState } from 'react'
import { useAppSelector } from 'redux/store'

const CreateRoom = () => {
    const { gameId } = useAppSelector((store) => store.lobby)

    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const hideModal = () => setIsOpen(false)

    return (
        <>
            {isOpen && (
                <Portal>
                    <Modal hideModal={hideModal} />
                </Portal>
            )}
            <div
                className={`mx-auto my-3 flex h-[65px] w-[260px] items-center justify-between rounded-lg bg-black bg-opacity-10 px-[30px] transition duration-200 hover:scale-105 ${
                    gameId ? 'pointer-events-none opacity-70' : ''
                }`}
                onClick={openModal}
            >
                <div className='h-10 w-10 rounded-full bg-green-600 text-5xl font-medium'>
                    <p className='relative -top-2 left-[5px] text-[45px] font-normal'>+</p>
                </div>
                <h2 className='text-2xl font-medium'>Create game</h2>
            </div>
        </>
    )
}

export default CreateRoom
