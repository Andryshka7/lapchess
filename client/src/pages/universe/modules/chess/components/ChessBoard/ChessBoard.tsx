import { useAppSelector } from 'redux/store'
import Cells from './components/Cells'
import CheckStatus from './components/CheckStatus'
import NextMoves from './components/NextMoves'
import Notation from './components/Notation'
import Pieces from './components/Pieces/Pieces'
import Promotion from './components/Promotion'

const ChessBoard = () => {
    const {
        position,
        color,
        positionHistory,
        chessBoard: { turn }
    } = useAppSelector((store) => store.chess)

    const pointerEvents =
        position + 1 !== positionHistory.length /*||  color !== turn */
            ? 'pointer-events-none'
            : 'pointer-events-all'

    const isReversed = color === 'b' ? 'rotate-180' : ''

    return (
        <div
            className={`relative m-auto h-[620px] w-[620px] overflow-hidden rounded-lg ${pointerEvents} ${isReversed}`}
        >
            <Cells />
            <Pieces />
            <NextMoves />
            <Notation />
            <CheckStatus />
            <Promotion />
        </div>
    )
}

export default ChessBoard
