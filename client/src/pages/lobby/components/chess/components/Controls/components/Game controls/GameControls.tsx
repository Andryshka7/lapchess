import { useAppSelector } from 'redux/store'
import DrawButton from './Buttons/DrawButton'
import ResignButton from './Buttons/ResignButton'

const GameControls = () => {
    const { position, positionHistory, chessBoard } = useAppSelector((store) => store.lobby.chess)

    const { winner, draw } = chessBoard.gameStatus

    const pointerEvents =
        winner || draw || position !== positionHistory.length - 1
            ? 'pointer-events-none'
            : 'pointer-events-all'

    return (
        <div className={`flex items-center gap-2 ${pointerEvents}`}>
            <DrawButton />
            <ResignButton />
        </div>
    )
}

export default GameControls
