import { useAppDispatch, useAppSelector } from 'redux/store'
import { useState, useEffect } from 'react'
import { handleMove, setSelected } from '../store/chessBoardSlice'
import { PieceProps } from '../types/PieceProps'
import gameField from '../store/gameField'
import pieceStyle from '../helpers/pieceStyling'
import { arrayIncludes } from '../store/helpers'

const Piece = (initialState: PieceProps) => {
    const { turn, gameField, nextMoves, lastMoves } = useAppSelector((store) => store.practice)
    const [pieceState, setPieceState] = useState<PieceProps | null>(initialState)
    const dispatch = useAppDispatch()

    const checkPieceState = () => {
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
                if (arrayIncludes(nextMoves, [x, y])) {
                    dispatch(handleMove({ x, y }))
                } else if (turn === name[0]) dispatch(setSelected({ x, y }))
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
