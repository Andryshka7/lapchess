import { useEffect } from 'react'
import { useAppDispatch } from 'redux/store'
import { addRoom, removeRoom } from 'pages/lobby/modules/rooms/redux/actions'
import socket from 'socket'

const useRoomHandlers = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        socket.on('ROOM_CREATED', (room) => {
            dispatch(addRoom(room))
        })
        socket.on('ROOM_DELETED', (id) => {
            dispatch(removeRoom(id))
        })
    }, [])
}

export default useRoomHandlers
