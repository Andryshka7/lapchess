import ChessBoard from './modules/ChessBoard/ChessBoard'
import ChessMoves from './modules/ChessMoves/ChessMoves'
import Input from './modules/FEN input/Input'

const Practice = () => {
    return (
        <div className='w-[928px] m-auto mt-5'>
            <div className='flex items-center justify-center'>
                <ChessBoard />
                <ChessMoves />
            </div>
            <Input />
        </div>
    )
}

export default Practice
