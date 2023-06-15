import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { convertToFEN, convertFromFEN } from './helpers'
import { updateChessBoard } from 'pages/mastery/redux/actions'
import { showAlert } from 'ui/components/alert/redux/alertSlice'

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
