import { acceptDraw, setOpponentSent, setOwnerSent } from 'pages/lobby/modules/chess/redux/actions'
import { MdHandshake } from 'react-icons/md'
import { BiCheckCircle } from 'react-icons/bi'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import API from 'api'
import socket from 'socket'

const Draw = () => {
    const dispatch = useAppDispatch()
    const {
        gameId,
        position,
        positionHistory,
        chessBoard: { gameStatus },
        status: {
            drawState: { ownerSent, opponentSent }
        }
    } = useAppSelector((store) => store.chess)

    const handleOnClick = () => {
        if (ownerSent) {
            socket.emit('CANCEL_DRAW', gameId)
            dispatch(setOwnerSent(false))
        } else {
            socket.emit('SEND_DRAW', gameId)
            dispatch(setOwnerSent(true))
        }
    }

    const { winner, draw } = gameStatus

    const styles = 'cursor-pointer transition duration-200 hover:scale-110'

    const pointerEvents =
        opponentSent || winner || draw || position !== positionHistory.length - 1
            ? 'pointer-events-none'
            : 'pointer-events-all'

    return (
        <>
            <MdHandshake
                size={24}
                onClick={handleOnClick}
                className={`${styles} ${pointerEvents} ${
                    ownerSent || opponentSent ? 'text-amber-400' : ''
                }`}
            />

            <div
                className={`flex transition duration-200 ${
                    opponentSent ? 'opacity-1' : 'pointer-events-none -translate-x-5 opacity-0'
                }`}
            >
                <BiCheckCircle
                    className='text-green-500 transition duration-200 hover:scale-105'
                    onClick={() => {
                        const drawTime = Date.now()
                        dispatch(acceptDraw(drawTime))
                        API.drawGame(gameId, drawTime)
                        socket.emit('ACCEPT_DRAW', gameId, drawTime)
                    }}
                    size={24}
                />
                <IoMdCloseCircleOutline
                    className='text-red-500 transition duration-200 hover:scale-105'
                    onClick={() => {
                        dispatch(setOpponentSent(false))
                        socket.emit('DECLINE_DRAW', gameId)
                    }}
                    size={24}
                />
            </div>
        </>
    )
}

export default Draw
