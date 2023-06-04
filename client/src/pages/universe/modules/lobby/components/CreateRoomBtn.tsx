import { useAppSelector } from 'redux/store'

interface CreateRoomBtnProps {
    openModal: () => void
}

const CreateRoomBtn = ({ openModal }: CreateRoomBtnProps) => {
    const { thisRoom } = useAppSelector((store) => store.lobby)

    const disabledStyle = `${thisRoom ? 'pointer-events-none opacity-70' : ''}`

    return (
        <div
            className={`mx-auto my-3 flex h-[65px] w-[260px] 
            items-center justify-between rounded-lg bg-black bg-opacity-10 px-[30px]
            transition duration-200 hover:scale-105 ${disabledStyle}`}
            onClick={openModal}
        >
            <div className='h-10 w-10 rounded-full bg-green-600 text-5xl font-medium'>
                <p className='relative left-[5px] top-[-8px] text-[45px] font-normal'>+</p>
            </div>
            <h2 className='text-2xl font-medium'>Create game</h2>
        </div>
    )
}

export default CreateRoomBtn
