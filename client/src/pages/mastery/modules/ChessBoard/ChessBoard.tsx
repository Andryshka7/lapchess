import Cells from './components/Cells'
import CheckStatus from './components/CheckStatus'
import NextMoves from './components/NextMoves'
import Notation from './components/Notation'
import Pieces from './components/Pieces/Pieces'
import Promotion from './components/Promotion'

const ChessBoard = () => {
    return (
        <div className='relative h-[620px] w-[620px] m-auto rounded-lg overflow-hidden'>
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
