import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import convertToFEN from './helpers/Convert to FEN/convertToFEN'
import convertFromFEN from './helpers/Convert from FEN/convertFromFEN'
import { updateChessBoard } from 'pages/mastery/store/actions'
import { showAlert } from 'layout/alert/store/alertSlice'

const Input = () => {
    const dispatch = useAppDispatch()
    const { chessBoard } = useAppSelector((store) => store.mastery)

    const [fen, setFen] = useState<string>('')
    const alert = (text: string, type: string) => dispatch(showAlert({ text, type }))

    useEffect(() => {
        setFen(convertToFEN(chessBoard))
    }, [chessBoard.gameField])

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                try {
                    const chessBoard = convertFromFEN(fen)
                    dispatch(updateChessBoard(chessBoard))
                } catch (error) {
                    alert(`Provided FEN notation is invalid!`, 'error')
                }
            }}
        >
            <input
                type='text'
                className='mt-2 w-full rounded-lg bg-black bg-opacity-10 px-5 py-1 focus:outline-none'
                value={fen}
                onChange={(e) => setFen(e.target.value)}
            />
        </form>
    )
}

export default Input
