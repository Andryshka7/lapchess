import { Cells, CheckStatus, NextMoves, Notation, Pieces, Promotion } from './components'

const ChessBoard = () => {
    return (
        <div className='relative m-auto h-[620px] w-[620px] overflow-hidden rounded-lg'>
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
