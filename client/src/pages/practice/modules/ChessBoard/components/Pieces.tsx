import { useAppDispatch, useAppSelector } from 'redux/store'
import { useState, useEffect } from 'react'
import { handleMove, setSelected } from '../store/chessBoardSlice'
import { PieceProps } from '../types/PieceProps'
import gameField from '../store/gameField'
import pieceStyle from '../helpers/pieceStyling'

const Piece = (initialState: PieceProps) => {
    const { turn, gameField, lastMoves } = useAppSelector((store) => store.practice)
    const [pieceState, setPieceState] = useState<PieceProps | null>(initialState)
    const dispatch = useAppDispatch()

    const checkPieceState = () => {
        console.log(lastMoves)

        lastMoves.forEach(({ from, to }) => {
            if (from.name === name && from.x === x && from.y === y) {
                setPieceState(to)
            }
        })
    }

    useEffect(() => {
        if (pieceState) checkPieceState()
    }, [gameField])

    if (!pieceState) return <></>
    const { name, x, y } = pieceState

    return (
        <img
            src={`/${name}.png`}
            className={pieceStyle(name, x, y)}
            onClick={() => {
                if (name[0] === turn) dispatch(setSelected({ x, y }))
                else dispatch(handleMove({ x, y }))
            }}
            alt='error'
        />
    )
}

const Pieces = () => {
    const pieces = []

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            if (gameField[y][x] !== '0') {
                pieces.push({ name: gameField[y][x], x, y })
            }
        }
    }

    return (
        <>
            {pieces.map((piece) => (
                <Piece {...piece} key={`piece${piece.x}${piece.y}`} />
            ))}
        </>
    )
}

export default Pieces
