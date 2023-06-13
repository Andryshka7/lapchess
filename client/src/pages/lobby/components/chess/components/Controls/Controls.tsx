import LeftControllers from './components/LeftControllers'
import RightControllers from './components/RightControllers'

const Controls = () => {
    return (
        <div className='mt-2 flex h-12 w-full items-center justify-between rounded-lg bg-black bg-opacity-5 px-8'>
            <LeftControllers />
            <RightControllers />
        </div>
    )
}

export default Controls
