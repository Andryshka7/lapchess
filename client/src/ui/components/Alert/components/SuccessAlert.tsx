import { BsCheckCircle } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { hideAlert } from '../redux/alertSlice'

const SuccessAlert = () => {
    const dispatch = useAppDispatch()
    const { text } = useAppSelector((store) => store.alert)
    return (
        <div className='flex items-center justify-around bg-green-500 bg-opacity-20 py-2.5 pl-4 pr-6'>
            <div className='absolute left-0 top-0 h-full w-3 bg-green-600 bg-opacity-80' />
            <BsCheckCircle className='mx-3' color='white' size={21} />
            <h1 className='text-base font-semibold text-white'>{text}</h1>
            <ImCross
                className='ml-3 text-green-500'
                onClick={() => dispatch(hideAlert())}
                size={12}
            />
        </div>
    )
}

export default SuccessAlert
