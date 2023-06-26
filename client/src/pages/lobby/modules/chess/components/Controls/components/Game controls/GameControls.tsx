import Draw from './Buttons/Draw'
import Resign from './Buttons/Resign'
import Copy from './Buttons/Copy'

const GameControls = () => (
    <div className='flex items-center gap-2'>
        <Copy />
        <Resign />
        <Draw />
    </div>
)

export default GameControls
