import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import convertToFEN from './helpers/Convert to FEN/convertToFEN'
import convertFromFEN from './helpers/Convert from FEN/convertFromFEN'
import { setChessBoard } from 'pages/practice/store/practiceSlice'

const Input = () => {
    const dispatch = useAppDispatch()
    const { chessBoard } = useAppSelector((store) => store.practice)

    const [fen, setFen] = useState<string>('')

    useEffect(() => {
        setFen(convertToFEN(chessBoard))
    }, [chessBoard.gameField])

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                const chessBoard = convertFromFEN(fen)
                if (chessBoard) dispatch(setChessBoard(chessBoard))
            }}
        >
            <input
                type='text'
                className='w-full mt-2 py-1 px-5 rounded-lg bg-black bg-opacity-10 focus:outline-none'
                value={fen}
                onChange={(e) => setFen(e.target.value)}
            />
        </form>
    )
}

export default Input
