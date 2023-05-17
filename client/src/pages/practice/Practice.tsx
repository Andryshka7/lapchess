import { useEffect } from 'react'
import ChessBoard from './modules/ChessBoard/ChessBoard'
import ChessMoves from './modules/ChessMoves/ChessMoves'
import Input from './modules/FEN input/Input'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { switchCurrent } from './store/practiceSlice'

const Practice = () => {
    const dispatch = useAppDispatch()
    const { current } = useAppSelector((store) => store.practice)

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            dispatch(switchCurrent(current + 1))
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            dispatch(switchCurrent(current - 1))
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [current])

    return (
        <div className='w-[928px] m-auto mt-5'>
            <div className='flex items-center justify-center'>
                <ChessBoard />
                <ChessMoves />
            </div>
            <Input />
        </div>
    )
}

export default Practice
