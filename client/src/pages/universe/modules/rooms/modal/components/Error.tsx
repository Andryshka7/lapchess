import { IoCloseOutline } from 'react-icons/io5'
import { ModalControls } from '../types/modalControls'

const ModalError = ({ closeModal }: ModalControls) => {
    return (
        <div className='fixed h-full w-full bg-black bg-opacity-50'>
            <div className='absolute flex items-center justify-center w-[850px] h-[500px] bg-[#282828] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg'>
                <IoCloseOutline
                    color={'red'}
                    size={30}
                    className='absolute top-5 right-5 cursor-pointer'
                    onClick={closeModal}
                />
                <div>
                    <h1 className='w-fit mx-auto text-5xl font-bold'>Oops!</h1>
                    <h1 className='w-fit mt-16 mx-auto text-4xl text-[#d6d6d6] font-medium'>
                        Something went wrong
                    </h1>
                    <h1 className='w-fit mt-2 mx-auto text-4xl text-[#d6d6d6] font-medium'>
                        Please try again later.
                    </h1>
                    <button
                        className='block bg-[#4AB561] w-36 h-10 mt-20 mx-auto text-lg font-bold rounded-md transition duration-200 hover:scale-105'
                        onClick={closeModal}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalError
