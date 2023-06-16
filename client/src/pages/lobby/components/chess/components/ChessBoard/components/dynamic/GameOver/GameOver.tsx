import { useAppSelector } from 'redux/store'
import { QuitButton, RestartButton } from './components'

const GameOver = () => {
    const {
        color,
        chessBoard: { turn, gameStatus }
    } = useAppSelector((store) => store.lobby.chess)

    const { mate, draw } = gameStatus
    
    if (!(mate || draw)) return null

    const isReversed = color === 'b' ? 'rotate-180' : ''

    const winner = turn === 'w' ? 'Black' : 'White'
    const text = draw ? 'Draw!' : `${winner} wins!`

    return (
        <div
            className={`absolute left-0 top-0 z-[3] flex h-[620px] w-[620px] items-center justify-center bg-black bg-opacity-70 ${isReversed}`}
        >
            <div className='flex h-fit w-fit flex-col gap-20'>
                <h1 className='text-center text-5xl font-bold'>{text}</h1>
                <RestartButton />
                <QuitButton />
            </div>
        </div>
    )
}

export default GameOver
