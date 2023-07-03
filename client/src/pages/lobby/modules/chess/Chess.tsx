import ChessBoard from './components/ChessBoard/ChessBoard'
import GameInfo from './components/Game info/GameInfo'
import Contols from './components/Controls/Controls'

const Chess = () => {
    console.log('rerender')
    return (
        <div className='mx-auto my-4 w-fit'>
            <div className='flex'>
                <ChessBoard />
                <GameInfo />
            </div>
            <Contols />
        </div>
    )
}

export default Chess
