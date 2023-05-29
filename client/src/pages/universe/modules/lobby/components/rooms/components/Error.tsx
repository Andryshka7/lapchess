import error from 'assets/error.png'
import { useAppDispatch } from 'redux/store'
import { fetchRooms } from '../../../store/lobbySlice'

const RoomsError = () => {
    const dispatch = useAppDispatch()
    return (
        <div className='flex items-center justify-center w-full h-[636px] p-2.5 rounded-lg bg-black bg-opacity-10'>
            <div>
                <img src={error} className='w-40 h-40 mx-auto' alt='' />
                <h1 className='w-fit leading-normal mt-10 mb-16 mx-auto text-center text-4xl font-semibold'>
                    Error while fetching games <br /> Please try again later.
                </h1>
                <button
                    className='block mx-auto py-2 px-10 text-xl font-semibold bg-green-600 rounded-md'
                    onClick={() => dispatch(fetchRooms())}
                >
                    Retry
                </button>
            </div>
        </div>
    )
}
export default RoomsError
