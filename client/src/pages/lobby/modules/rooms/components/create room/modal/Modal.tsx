import { useEffect, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { timeControls, colorControls } from 'config/styles/chessBoard'
import { ModalError, ModalLoader } from './components'
import useInitializeRoom from '../../../hooks/useCreateRoom'
import getColor from './helpers/getColor'

interface ModalProps {
    hideModal: () => void
}

const Modal = ({ hideModal }: ModalProps) => {
    const { loading, error, createRoom } = useInitializeRoom(hideModal)

    const [time, setTime] = useState('∞')
    const [selectedColor, setSelected] = useState('random')

    useEffect(() => {
        document.body.classList.add('overflow-hidden')
        return () => document.body.classList.remove('overflow-hidden')
    })

    if (loading) return <ModalLoader />
    if (error) return <ModalError hideModal={hideModal} />

    return (
        <div
            className='fixed left-0 top-0 h-full w-full bg-black bg-opacity-50'
            onClick={hideModal}
        >
            <div
                className='xs:h-[470px] absolute left-1/2 top-1/2 h-[450px] w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#282828] md:w-[700px]'
                onClick={(e) => e.stopPropagation()}
            >
                <IoCloseOutline
                    color={'red'}
                    size={30}
                    className='absolute right-3 top-3 cursor-pointer'
                    onClick={hideModal}
                />

                <h1 className='mx-auto mt-7 w-fit text-4xl font-bold'>Create game</h1>

                <div className='xs:w-[440px] mx-auto mt-5 grid w-[340px] grid-cols-4'>
                    {timeControls.map((item) => (
                        <div
                            className={`xs:h-12 xs:w-24 float-left mx-2 mt-3 flex h-10 cursor-pointer items-center justify-center rounded-md text-xl font-medium transition duration-200 hover:bg-[#474747] ${
                                time === item ? 'bg-[#474747]' : 'bg-black bg-opacity-20'
                            }`}
                            onClick={() => setTime(item)}
                            key={item}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                <div className='mx-auto mt-8 flex h-[100px] w-[320px] items-center justify-between rounded-2xl bg-black bg-opacity-20 px-10'>
                    {colorControls.map((item) => (
                        <img
                            src={`roomColors/${item}.png`}
                            className={`h-[60px] w-[60px] cursor-pointer transition duration-200 hover:scale-105 ${
                                selectedColor !== item ? 'opacity-60' : 'opacity-100'
                            }`}
                            onClick={() => setSelected(item)}
                            key={item}
                        />
                    ))}
                </div>

                <button
                    className='mx-auto mt-10 block h-[50px] w-[220px] rounded-lg bg-green-600 text-2xl font-bold transition duration-200 hover:bg-opacity-90'
                    onClick={() => createRoom(selectedColor, getColor(selectedColor), time)}
                >
                    Create
                </button>
            </div>
        </div>
    )
}

export default Modal
