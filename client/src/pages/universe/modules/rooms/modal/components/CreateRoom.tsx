import { useState } from 'react'
import { IoCloseOutline } from 'react-icons//io5'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { v4 as uniqueID } from 'uuid'
import { ModalControls } from '../types/modalControls'
import { updateID } from 'pages/universe/modules/chess/store/chessSlice'
import axios from 'axios'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

const timeControls = ['1 + 0', '3 + 0', '4 + 0', '10 + 0', '3 + 2', '5 + 3', '15 + 5', '∞']
const colorControls = ['wK', 'halfK', 'bK']

const ModalContent = ({ setLoading, setError, closeModal }: ModalControls) => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((store) => store.auth)
    const [settings, setSettings] = useState({ time: '∞', color: 'halfK' })

    const createRoom = async () => {
        const id = uniqueID()
        const room = { user, ...settings, id }
        setLoading(true)

        try {
            await axios.post(`${SERVER_URL}/rooms`, room)
            dispatch(updateID(id))
            closeModal()
        } catch (e) {
            setError(true)
        }
    }

    return (
        <div className='fixed h-full w-full bg-black bg-opacity-50' onClick={closeModal}>
            <div
                className='absolute w-[850px] h-[500px] bg-[#282828] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg'
                onClick={(e) => e.stopPropagation()}
            >
                <IoCloseOutline
                    color={'red'}
                    size={30}
                    className='absolute top-5 right-5 cursor-pointer'
                    onClick={closeModal}
                />

                <h1 className='w-fit mt-7 mx-auto font-bold text-5xl'>Create game</h1>

                <div className='w-[480px] h-[120px] mt-5 mx-auto'>
                    {timeControls.map((item) => (
                        <div
                            className={`flex items-center justify-center w-[100px] h-[50px] mt-3 mx-2 text-2xl font-medium rounded-md float-left transition duration-200 hover:bg-[#474747] ${
                                settings.time === item ? 'bg-[#474747]' : 'bg-black bg-opacity-20'
                            }`}
                            onClick={() => setSettings((p) => ({ ...p, time: item }))}
                            key={item}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                <div className='flex items-center justify-between w-[380px] h-[120px] mt-8 mx-auto px-10 bg-black bg-opacity-20 rounded-2xl'>
                    {colorControls.map((item) => (
                        <img
                            src={`/${item}.png`}
                            className={`w-[85px] h-[85px] transition duration-200 hover:scale-105 ${
                                settings.color !== item ? 'opacity-60' : 'opacity-100'
                            }`}
                            onClick={() => setSettings((p) => ({ ...p, color: item }))}
                            key={item}
                            alt=''
                        />
                    ))}
                </div>

                <button
                    className='block w-[220px] h-[50px] mt-10 mx-auto text-2xl font-bold bg-[#4AB561] rounded-lg transition duration-200 hover:bg-[#3FA255]'
                    onClick={createRoom}
                >
                    Create
                </button>
            </div>
        </div>
    )
}

export default ModalContent
