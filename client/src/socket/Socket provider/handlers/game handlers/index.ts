import {
	cancelGame,
	handleMove,
	playerResigned,
	transformPawn,
	updateGame
} from 'pages/lobby/modules/chess/redux/actions'
import { useEffect } from 'react'
import { useAppDispatch } from 'redux/store'
import socket from 'socket'

import useDrawHandlers from './drawHandlers'
import useRestartHandlers from './restartHandlers'

const useGameHandlers = () => {
	const dispatch = useAppDispatch()

	useDrawHandlers()
	useRestartHandlers()

	useEffect(() => {
		socket.on('GAME_INITIALIZED', (payload) => {
			dispatch(updateGame(payload))
		})
		socket.on('HANDLE_MOVE', (payload) => {
			dispatch(handleMove(payload))
		})
		socket.on('HANDLE_PROMOTED_PAWN', (payload) => {
			dispatch(transformPawn(payload))
		})
		socket.on('PLAYER_RESIGNED', (payload) => {
			dispatch(playerResigned(payload))
		})
		socket.on('CANCEL_GAME', () => {
			dispatch(cancelGame())
		})
	}, [])
}

export default useGameHandlers
