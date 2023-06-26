import GameControls from './components/Game controls/GameControls'
import PositionContols from './components/PositionContols'

const Controls = () => {
    return (
        <div className='mt-2 flex h-12 w-full items-center justify-between rounded-lg bg-black bg-opacity-5 px-8'>
            <GameControls />
            <PositionContols />
        </div>
    )
}

export default Controls
