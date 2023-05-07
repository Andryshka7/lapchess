import Cells from './components/Cells'
import NextMoves from './components/NextMoves'
import Pieces from './components/Pieces/Pieces'

const ChessBoard = () => {
    return (
        <div className='relative w-[650px] h-[650px] m-auto mt-5 rounded-lg overflow-hidden'>
            <Cells />
            <Pieces />
            <NextMoves />
        </div>
    )
}

export default ChessBoard
