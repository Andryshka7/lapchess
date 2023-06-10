import ChessBoard from './components/ChessBoard/ChessBoard'
import ChessMoves from './components/ChessMoves/ChessMoves'
import Input from './components/FEN input/Input'

const Mastery = () => (
    <div className='mx-auto my-5 w-[928px]'>
        <div className='flex items-center justify-center'>
            <ChessBoard />
            <ChessMoves />
        </div>
        <Input />
    </div>
)

export default Mastery
