import Cells from './components/Cells'
import CheckStatus from './components/CheckStatus'
import NextMoves from './components/NextMoves'
import Notation from './components/Notation'
import Pieces from './components/Pieces/Pieces'
import Promotion from './components/Promotion'

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
