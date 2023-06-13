import { IoCloseOutline } from 'react-icons/io5'

interface ErrorProps {
    hideModal: () => void
}

const ModalError = ({ hideModal }: ErrorProps) => {
    return (
        <div className='fixed left-0 top-0 h-full w-full bg-black bg-opacity-50'>
            <div className='absolute left-1/2 top-1/2 flex h-[500px] w-[850px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-[#282828]'>
                <IoCloseOutline
                    color='red'
                    size={30}
                    className='absolute right-5 top-5 cursor-pointer'
                    onClick={hideModal}
                />
                <div>
                    <h1 className='mx-auto w-fit text-5xl font-bold'>Oops!</h1>
                    <h1 className='mx-auto mt-16 w-fit text-center text-4xl font-medium leading-snug text-[#d6d6d6]'>
                        Something went wrong
                        <br />
                        Please try again later.
                    </h1>
                    <button
                        className='mx-auto mt-20 block h-10 w-36 rounded-md bg-green-600 text-lg font-bold transition duration-200 hover:scale-105'
                        onClick={hideModal}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalError
