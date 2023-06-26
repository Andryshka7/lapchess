import { useAppSelector } from 'redux/store'
import { QuitButton, RestartButton } from './components'

const GameOver = () => {
    const { gameStatus } = useAppSelector((store) => store.chess.chessBoard)

    const { winner, draw } = gameStatus

    if (!(winner || draw)) return null

    const victoryText = winner === 'w' ? 'White wins!' : 'Black wins!'

    return (
        <div className='absolute left-0 top-0 z-[3] flex h-[620px] w-[620px] items-center justify-center bg-black bg-opacity-70'>
            <div className='flex h-fit w-fit flex-col gap-20'>
                <h1 className='text-center text-5xl font-bold'>{draw ? 'Draw!' : victoryText}</h1>
                <RestartButton />
                <QuitButton />
            </div>
        </div>
    )
}

export default GameOver
