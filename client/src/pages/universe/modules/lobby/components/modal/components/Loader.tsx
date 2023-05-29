import Loader from 'layout/Loader'

const ModalLoader = () => (
    <div className='fixed top-0 left-0 h-full w-full bg-black bg-opacity-50'>
        <div className='absolute flex items-center justify-center w-[850px] h-[500px] bg-[#282828] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg'>
            <Loader />
        </div>
    </div>
)

export default ModalLoader
