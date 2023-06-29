import { useEffect, useState } from 'react'
import { BsFlagFill } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { playerResigned } from 'pages/lobby/modules/chess/redux/actions'
import API from 'api'
import socket from 'socket'

const Resign = () => {
    const dispatch = useAppDispatch()
    const {
        gameId,
        color,
        position,
        positionHistory,
        chessBoard: { gameStatus }
    } = useAppSelector((store) => store.chess)

    const [active, setActive] = useState(false)

    useEffect(() => {
        if (active) {
            const timeOut = setTimeout(() => {
                setActive(false), [active]
            }, 5000)
            return () => clearTimeout(timeOut)
        }
    }, [active])

    const styles = 'cursor-pointer transition duration-200 hover:scale-110'

    const { winner, draw } = gameStatus

    const pointerEvents =
        winner || draw || position !== positionHistory.length - 1
            ? 'pointer-events-none'
            : 'pointer-events-all'

    return (
        <BsFlagFill
            size={20}
            className={`${styles} ${pointerEvents} ${active ? 'text-amber-400' : ''}`}
            onClick={() => {
                if (active) {
                    const resignTime = Date.now()
                    dispatch(playerResigned({ color, resignTime }))
                    API.resignGame(gameId, { color, resignTime })
                    socket.emit('PLAYER_RESIGNED', gameId, { color, resignTime })
                }
                setActive((prev) => !prev)
            }}
        />
    )
}

export default Resign
