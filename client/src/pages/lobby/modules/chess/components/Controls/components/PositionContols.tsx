import {
    BsFillSkipForwardFill,
    BsFillSkipBackwardFill,
    BsSkipEndFill,
    BsFillSkipStartFill
} from 'react-icons/bs'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { switchPosition } from 'pages/lobby/modules/chess/redux/actions'

const PositionContols = () => {
    const dispatch = useAppDispatch()
    const { position, positionHistory } = useAppSelector((store) => store.chess)
    return (
        <div className='ml-auto flex'>
            <BsFillSkipBackwardFill
                className='mr-2 cursor-pointer transition duration-200 hover:scale-110'
                onClick={() => dispatch(switchPosition(0))}
                size={25}
            />
            <BsFillSkipStartFill
                className='cursor-pointer transition duration-200 hover:scale-110'
                onClick={() => dispatch(switchPosition(position - 1))}
                size={25}
            />
            <BsSkipEndFill
                className='cursor-pointer transition duration-200 hover:scale-110'
                onClick={() => dispatch(switchPosition(position + 1))}
                size={25}
            />
            <BsFillSkipForwardFill
                className='ml-2 cursor-pointer transition duration-200 hover:scale-110'
                onClick={() => dispatch(switchPosition(positionHistory.length - 1))}
                size={25}
            />
        </div>
    )
}

export default PositionContols
