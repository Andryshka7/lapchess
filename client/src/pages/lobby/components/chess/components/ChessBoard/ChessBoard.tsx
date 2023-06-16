import { useAppSelector } from 'redux/store'
import { Cells, CheckStatus, GameOver, NextMoves, Notation, Pieces, Promotion } from './components'

const ChessBoard = () => {
    const { color } = useAppSelector((store) => store.lobby.chess)

    const isReversed = color === 'b' ? 'rotate-180' : ''    

    return (
        <div
            className={`relative m-auto h-[620px] w-[620px] overflow-hidden rounded-lg ${isReversed}`}
        >
            <Cells />
            <Pieces />
            <NextMoves />
            <Notation />
            <CheckStatus />
            <Promotion />
            <GameOver />
        </div>
    )
}

export default ChessBoard
