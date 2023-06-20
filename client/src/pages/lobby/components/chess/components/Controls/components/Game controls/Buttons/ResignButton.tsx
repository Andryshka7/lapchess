import { useEffect, useState } from 'react'
import { BsFlagFill } from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { playerResigned } from 'pages/lobby/redux/actions'
import { resignGame } from 'api/chess games'
import socket from 'socket'

const ResignButton = () => {
    const dispatch = useAppDispatch()
    const {
        gameId,
        chess: { color }
    } = useAppSelector((store) => store.lobby)

    const [active, setActive] = useState(false)

    const styles = 'cursor-pointer transition duration-200 hover:scale-110'

    useEffect(() => {
        if (active) {
            const timeOut = setTimeout(() => {
                setActive(false), [active]
            }, 5000)
            return () => clearTimeout(timeOut)
        }
    }, [active])

    return (
        <BsFlagFill
            size={20}
            className={`${styles} ${active ? 'text-amber-400' : ''}`}
            onClick={() => {
                if (active) {
                    dispatch(playerResigned(color as string))
                    resignGame(gameId as string, color as string)
                    socket.emit('PLAYER_RESIGNED', gameId, color)
                }
                setActive((prev) => !prev)
            }}
        />
    )
}

export default ResignButton
