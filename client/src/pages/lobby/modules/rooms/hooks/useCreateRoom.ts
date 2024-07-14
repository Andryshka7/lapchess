import { createRoomQuery } from 'api/rooms'
import { updateGameId } from 'pages/lobby/modules/chess/redux/actions'
import { addRoom } from 'pages/lobby/modules/rooms/redux/actions'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import socket from 'socket'
import { useShowAlert } from 'ui/components/Alert/hooks'

const useCreateRoom = (hideModal: () => void) => {
	const dispatch = useAppDispatch()
	const { user } = useAppSelector((store) => store.auth)

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	const alert = useShowAlert()

	const createRoom = async (selectedColor: string, actualColor: string, time: string) => {
		try {
			setLoading(true)

			const room = await createRoomQuery(user?._id || null, selectedColor, actualColor, time)

			socket.emit('CREATE_ROOM', room)
			const gameId = room._id

			dispatch(addRoom(room))
			dispatch(updateGameId(gameId))

			alert('Successfully created new room!', 'success')
			hideModal()
		} catch (error) {
			setLoading(false)
			setError(true)
		}
	}

	return { loading, error, createRoom }
}

export default useCreateRoom
