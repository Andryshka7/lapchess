import { useAppDispatch, useAppSelector } from 'redux/store'
import { restartGame, setOwnerAgreed } from 'pages/lobby/modules/chess/redux/actions'
import socket from 'socket'
import API from 'api'

const RestartButton = () => {
    const dispatch = useAppDispatch()
    const { gameId, status } = useAppSelector((store) => store.chess)

    const {
        opponentLeft,
        restartState: { ownerAgreed, opponentAgreed }
    } = status

    const buttonBg = ownerAgreed ? 'bg-green-600' : 'bg-gray-600'
    const disabled = opponentLeft ? 'pointer-events-none opacity-70' : ''

    const handleOnClick = () => {
        if (!ownerAgreed && opponentAgreed) {
            socket.emit('RESTART_GAME', gameId)
            API.resetGame(gameId as string)
            dispatch(restartGame())
        } else {
            socket.emit('UPDATE_READY_TO_RESTART', gameId, !ownerAgreed)
            dispatch(setOwnerAgreed(!ownerAgreed))
        }
    }

    return (
        <button
            className={`m-auto block rounded-lg px-20 py-6 text-4xl font-bold transition duration-200 hover:scale-105 ${buttonBg} ${disabled}`}
            onClick={handleOnClick}
        >
            Play again
        </button>
    )
}

export default RestartButton
