import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'

import ErrorAlert from './components/ErrorAlert'
import SuccessAlert from './components/SuccessAlert'
import { hideAlert } from './redux/alertSlice'

const Alert = () => {
	const dispatch = useAppDispatch()
	const { show, type, timeout } = useAppSelector((store) => store.alert)

	useEffect(() => {
		setTimeout(() => show && dispatch(hideAlert()), timeout)
	}, [show])

	const translation = `${!show ? 'translate-x-5 opacity-0' : ''}`

	return (
		<div
			className={`fixed bottom-14 right-4 overflow-hidden rounded-lg md:right-16 ${translation} transition duration-200 ease-in-out`}
		>
			{type === 'success' ? <SuccessAlert /> : <ErrorAlert />}
		</div>
	)
}

export default Alert
