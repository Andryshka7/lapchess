import { useAppDispatch } from 'redux/store'
import { showAlert } from '../redux/alertSlice'

const useShowAlert = () => {
    const dispatch = useAppDispatch()
    return (text: string, type: string) => dispatch(showAlert({ text, type }))
}

export default useShowAlert
