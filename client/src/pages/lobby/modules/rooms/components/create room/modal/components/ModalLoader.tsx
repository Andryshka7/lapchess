import { Loader } from 'ui'

const ModalLoader = () => (
    <div className='fixed left-0 top-0 h-full w-full bg-black bg-opacity-50'>
        <div className='absolute left-1/2 top-1/2 flex h-[500px] w-[850px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-[#282828]'>
            <Loader />
        </div>
    </div>
)

export default ModalLoader
