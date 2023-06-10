import { MdHandshake } from 'react-icons/md'
import { BsFlagFill } from 'react-icons/bs'

const LeftControllers = () => {
    return (
        <div className='flex items-center gap-2'>
            <MdHandshake
                size={24}
                className='cursor-pointer transition duration-200 hover:scale-110'
            />
            <BsFlagFill
                size={20}
                className='cursor-pointer transition duration-200 hover:scale-110'
            />
        </div>
    )
}

export default LeftControllers
