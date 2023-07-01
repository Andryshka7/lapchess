import { useAppSelector } from 'redux/store'
import GameControls from './components/Game controls/GameControls'
import MoveAlert from './components/Move alert/MoveAlert'
import PositionContols from './components/PositionContols'

const Controls = () => {
    const {
        status: { cancelled },
        chessBoard: {
            chessMoves,
            gameStatus: { winner, draw }
        }
    } = useAppSelector((store) => store.chess)

    const showAlert =
        !(winner || draw || cancelled) && (chessMoves.length === 0 || chessMoves.length === 1)

    return (
        <div className='mt-2 grid h-12 w-full grid-flow-col items-center justify-between rounded-lg bg-black bg-opacity-5 px-8'>
            <GameControls />
            {showAlert && <MoveAlert />}
            <PositionContols />
        </div>
    )
}

export default Controls
