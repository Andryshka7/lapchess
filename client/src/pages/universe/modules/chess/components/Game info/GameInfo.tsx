import ChessMoves from './components/ChessMoves/ChessMoves'
import Owner from './components/Owner'
import Guest from './components/Guest'

const GameInfo = () => (
    <div className='relative ml-2 h-[620px] w-[300px] rounded-lg bg-black bg-opacity-5'>
        <Guest />
        <ChessMoves />
        <Owner />
    </div>
)

export default GameInfo
