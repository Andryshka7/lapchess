import { Cells, CheckStatus, GameOver, NextMoves, Notation, Pieces, Promotion } from './components'

const ChessBoard = () => (
    <div className='relative m-auto h-[620px] w-[620px] overflow-hidden rounded-lg'>
        <Cells />
        <Pieces />
        <NextMoves />
        <Notation />
        <CheckStatus />
        <Promotion />
        <GameOver />
    </div>
)

export default ChessBoard
