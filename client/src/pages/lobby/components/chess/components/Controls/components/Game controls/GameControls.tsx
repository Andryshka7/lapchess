import { useAppSelector } from 'redux/store'
import Draw from './Buttons/Draw'
import Resign from './Buttons/Resign'

const GameControls = () => {
    const { position, positionHistory, chessBoard } = useAppSelector((store) => store.lobby.chess)

    const { winner, draw } = chessBoard.gameStatus

    const pointerEvents =
        winner || draw || position !== positionHistory.length - 1
            ? 'pointer-events-none'
            : 'pointer-events-all'

    return (
        <div className={`flex items-center gap-2 ${pointerEvents}`}>
            <Resign />
            <Draw />
        </div>
    )
}

export default GameControls
