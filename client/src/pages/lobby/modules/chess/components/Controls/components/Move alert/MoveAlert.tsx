import { useAppSelector } from 'redux/store'
import getAlertStyle from './helpers/getAlertStyle'
import useAlertTimer from './hooks/useAlertTimer'

const MoveAlert = () => {
    const color = useAppSelector((store) => store.chess.color)
    const turn = useAppSelector((store) => store.chess.chessBoard.turn)

    const time = useAlertTimer()

    return (
        <div
            className='flex h-7 w-[420px] items-center justify-center rounded-lg px-8 font-semibold transition duration-1000'
            style={getAlertStyle(time as number)}
        >
            {color === turn
                ? `Make your move within ${time} seconds`
                : `Waiting for opponent ${time} seconds`}
        </div>
    )
}

export default MoveAlert
