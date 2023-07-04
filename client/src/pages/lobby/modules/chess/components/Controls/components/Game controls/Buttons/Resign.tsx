import { useEffect, useState } from 'react'
import { createSelector } from '@reduxjs/toolkit'
import { RootState, useAppDispatch, useAppSelector } from 'redux/store'
import { BsFlagFill } from 'react-icons/bs'
import { resignGameQuery } from 'api/chess games'
import { playerResigned } from 'pages/lobby/modules/chess/redux/actions'
import socket from 'socket'

const chessDataSelector = createSelector(
    [
        (store: RootState) => store.chess.gameId,
        (store: RootState) => store.chess.color,
        (store: RootState) => store.chess.position,
        (store: RootState) => store.chess.positionHistory
    ],
    (gameId, color, position, positionHistory) => ({ gameId, color, position, positionHistory })
)

const Resign = () => {
    const dispatch = useAppDispatch()

    const { gameId, color, position, positionHistory } = useAppSelector(chessDataSelector)
    const { winner, draw } = useAppSelector((store) => store.chess.chessBoard.gameStatus)

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
                    resignGameQuery(gameId, { color, resignTime })
                    socket.emit('PLAYER_RESIGNED', gameId, { color, resignTime })
                }
                setActive((prev) => !prev)
            }}
        />
    )
}

export default Resign
