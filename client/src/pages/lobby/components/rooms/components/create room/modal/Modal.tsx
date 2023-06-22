import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { timeControls, colorControls } from 'config/styles/chessBoard'
import { ModalError, ModalLoader } from './components'
import useInitializeRoom from '../../../hooks/useInitializeRoom'

interface ModalProps {
    hideModal: () => void
}

const Modal = ({ hideModal }: ModalProps) => {
    const { loading, error, initializeRoom } = useInitializeRoom(hideModal)

    const [time, setTime] = useState('∞')
    const [color, setColor] = useState('random')

    if (loading) return <ModalLoader />
    if (error) return <ModalError hideModal={hideModal} />

    return (
        <div
            className='fixed left-0 top-0 h-full w-full bg-black bg-opacity-50'
            onClick={hideModal}
        >
            <div
                className='absolute left-1/2 top-1/2 h-[500px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#282828]'
                onClick={(e) => e.stopPropagation()}
            >
                <IoCloseOutline
                    color={'red'}
                    size={30}
                    className='absolute right-5 top-5 cursor-pointer'
                    onClick={hideModal}
                />

                <h1 className='mx-auto mt-7 w-fit text-5xl font-bold'>Create game</h1>

                <div className='mx-auto mt-5 h-[120px] w-[480px]'>
                    {timeControls.map((item) => (
                        <div
                            className={`float-left mx-2 mt-3 flex h-[50px] w-[100px] cursor-pointer items-center justify-center rounded-md text-2xl font-medium transition duration-200 hover:bg-[#474747] ${
                                time === item ? 'bg-[#474747]' : 'bg-black bg-opacity-20'
                            }`}
                            onClick={() => setTime(item)}
                            key={item}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                <div className='mx-auto mt-8 flex h-[120px] w-[380px] items-center justify-between rounded-2xl bg-black bg-opacity-20 px-10'>
                    {colorControls.map((item) => (
                        <img
                            src={`/${item}.png`}
                            className={`h-[85px] w-[85px] cursor-pointer transition duration-200 hover:scale-105 ${
                                color !== item ? 'opacity-60' : 'opacity-100'
                            }`}
                            onClick={() => setColor(item)}
                            key={item}
                            alt=''
                        />
                    ))}
                </div>

                <button
                    className='mx-auto mt-10 block h-[50px] w-[220px] rounded-lg bg-green-600 text-2xl font-bold transition duration-200 hover:bg-opacity-90'
                    onClick={() => initializeRoom(color, time)}
                >
                    Create
                </button>
            </div>
        </div>
    )
}

export default Modal
