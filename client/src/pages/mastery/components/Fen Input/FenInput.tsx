import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { convertToFEN, convertFromFEN } from 'helpers/tools/FEN'
import { updateChessBoard } from 'pages/mastery/redux/actions'
import { showAlert } from 'ui/components/alert/redux/alertSlice'
import Copy from './components/Copy'
import Reset from './components/Reset'

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
            <div className='flex justify-between items-center mt-2 w-full rounded-lg bg-black bg-opacity-10 px-5 py-1'>
                <input
                    type='text'
                    className='w-[830px] bg-transparent focus:outline-none'
                    value={fen}
                    onChange={(e) => setFen(e.target.value)}
                />
                <div className='flex gap-2'>
                    <Reset />
                    <Copy />
                </div>
            </div>
        </form>
    )
}

export default Input
