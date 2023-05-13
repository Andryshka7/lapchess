import ChessBoard from './modules/ChessBoard/ChessBoard'
import ChessMoves from './modules/ChessMoves/ChessMoves'

const Practice = () => {
    return (
        <div className='flex items-center justify-center w-fit m-auto mt-5'>
            <ChessBoard />
            <ChessMoves />
        </div>
    )
}

export default Practice
