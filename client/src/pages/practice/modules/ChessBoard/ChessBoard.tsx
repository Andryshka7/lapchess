import Cells from './components/Cells'
import NextMoves from './components/NextMoves'
import Pieces from './components/Pieces'

const ChessBoard = () => {
    return (
        <div className='relative w-[600px] h-[600px] m-auto mt-10 rounded-lg overflow-hidden'>
            <Cells />
            <Pieces />
            <NextMoves />
        </div>
    )
}

export default ChessBoard
