import ChessBoard from './components/ChessBoard/ChessBoard'
import ChessMoves from './components/ChessMoves/ChessMoves'
import Input from './components/Fen Input/FenInput'
import masteryIcon from 'assets/images/mastery.png'

const Mastery = () => (
    <div className='mx-auto my-1 lg:my-5 w-full lg:w-fit'>
        <div className='items-center justify-center lg:flex'>
            <div className='mx-auto flex h-[40px] w-full items-center sm:w-[620px] lg:hidden'>
                <img src={masteryIcon} className='ml-3 mr-2 h-6'/>
                <h2 className='text text-lg font-semibold'>Practice</h2>
            </div>
            <ChessBoard />
            <ChessMoves />
        </div>
        <Input />
    </div>
)

export default Mastery
