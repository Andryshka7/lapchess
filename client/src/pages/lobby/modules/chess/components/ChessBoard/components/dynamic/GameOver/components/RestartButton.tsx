import { useAppDispatch, useAppSelector } from 'redux/store'
import { restartGame, setOwnerAgreed } from 'pages/lobby/modules/chess/redux/actions'
import { restartGameQuery } from 'api/chess games'
import socket from 'socket'

const RestartButton = () => {
    const dispatch = useAppDispatch()
    const gameId = useAppSelector((store) => store.chess.gameId)
    const {
        opponentLeft,
        restartState: { ownerAgreed, opponentAgreed }
    } = useAppSelector((store) => store.chess.status)

    const buttonBg = ownerAgreed ? 'bg-green-600' : 'bg-gray-600'
    const disabled = opponentLeft ? 'pointer-events-none opacity-70' : ''

    const handleOnClick = () => {
        if (!ownerAgreed && opponentAgreed) {
            const restartTime = Date.now()
            socket.emit('RESTART_GAME', gameId, restartTime)
            restartGameQuery(gameId as string, restartTime)
            dispatch(restartGame(restartTime))
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
