import { ImCross } from 'react-icons/im'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { RiErrorWarningLine } from 'react-icons/ri'
import { hideAlert } from '../store/alertSlice'

const ErrorAlert = () => {
    const dispatch = useAppDispatch()
    const { text } = useAppSelector((store) => store.alert)

    return (
        <div className='flex items-center justify-around py-2.5 pl-4 pr-6 bg-red-500 bg-opacity-20'>
            <div className='absolute left-0 top-0 h-full w-3 bg-red-600 bg-opacity-80' />
            <RiErrorWarningLine className='mx-3' color='white' size={25} />
            <h1 className='text-base font-semibold text-white'>{text}</h1>
            <ImCross
                className='ml-3 text-red-500'
                onClick={() => dispatch(hideAlert())}
                size={12}
            />
        </div>
    )
}

export default ErrorAlert
