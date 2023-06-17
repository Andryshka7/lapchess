import { useEffect, useState } from 'react'
import { MdHandshake } from 'react-icons/md'
import { BsFlagFill } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { playerResigned } from 'pages/lobby/redux/actions'
import socket from 'socket/socket'

const GameControls = () => {
    const dispatch = useAppDispatch()
    const {
        gameId,
        chess: { color, position, positionHistory, chessBoard }
    } = useAppSelector((store) => store.lobby)

    const [active, setActive] = useState(false)

    const { winner, draw } = chessBoard.gameStatus

    const styles = 'cursor-pointer transition duration-200 hover:scale-110'
    const pointerEvents =
        winner || draw || position !== positionHistory.length - 1
            ? 'pointer-events-none'
            : 'pointer-events-all'

    useEffect(() => {
        if (active) {
            const timeOut = setTimeout(() => {
                setActive(false), [active]
            }, 5000)
            return () => clearTimeout(timeOut)
        }
    }, [active])

    return (
        <div className={`flex items-center gap-2 ${pointerEvents}`}>
            <MdHandshake size={24} className={`${styles}`} />
            <BsFlagFill
                size={20}
                className={`${styles} ${active ? 'text-amber-400' : ''}`}
                onClick={() => {
                    if (active) {
                        dispatch(playerResigned(color as string))
                        socket.emit('PLAYER_RESIGNED', gameId, color)
                    }
                    setActive((prev) => !prev)
                }}
            />
        </div>
    )
}

export default GameControls
