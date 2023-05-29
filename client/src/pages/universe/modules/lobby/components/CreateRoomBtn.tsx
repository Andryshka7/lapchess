import { useAppSelector } from 'redux/store'

interface CreateRoomBtnProps {
    openModal: () => void
}

const CreateRoomBtn = ({ openModal }: CreateRoomBtnProps) => {
    const { id } = useAppSelector((store) => store.chess)

    const disabledStyle = `${id ? 'pointer-events-none opacity-70' : ''}`

    return (
        <div
            className={`w-[260px] h-[65px] flex items-center justify-between 
            mx-auto my-3 px-[30px] bg-black bg-opacity-10 rounded-lg
            transition duration-200 hover:scale-105 ${disabledStyle}`}
            onClick={openModal}
        >
            <div className='w-10 h-10 text-5xl font-medium rounded-full bg-green-600'>
                <p className='relative text-[45px] font-normal top-[-8px] left-[5px]'>+</p>
            </div>
            <h2 className='text-2xl font-medium'>Create game</h2>
        </div>
    )
}

export default CreateRoomBtn
