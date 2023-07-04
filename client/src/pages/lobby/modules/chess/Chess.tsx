import { ChessBoard, GameInfo, Controls } from './components'

const Chess = () => (
    <div className='mx-auto my-4 w-fit'>
        <div className='flex'>
            <ChessBoard />
            <GameInfo />
        </div>
        <Controls />
    </div>
)

export default Chess
