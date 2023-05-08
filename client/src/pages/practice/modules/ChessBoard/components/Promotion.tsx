import { useAppDispatch, useAppSelector } from 'redux/store'
import { cancelPromotion, transFormPawn } from '../store/chessBoardSlice'
import { pieceStyle } from './Pieces/helpers'
import { ChessPiece } from '../store/types/ChessBoard'

const getChoices = ([x, y]: number[]) => {
    if (y === 0) {
        return x < 7 ? ['Q', 'N', 'B', 'R'] : ['N', 'Q', 'R', 'B']
    } else if (y === 7) {
        return x < 7 ? ['B', 'R', 'Q', 'N'] : ['R', 'B', 'N', 'Q']
    }
}

const Promotion = () => {
    const { turn, promoted } = useAppSelector((store) => store.practice)
    const dispatch = useAppDispatch()

    if (!promoted) return null

    const { x2, y2 } = promoted
    const promotionPieces = getChoices([x2, y2])?.map((item) => turn + item) as ChessPiece[]

    const x = x2 < 7 ? x2 : x2 - 1
    const y = y2 < 7 ? y2 : y2 - 1

    return (
        <div
            className='z-[2] absolute w-full h-full bg-black bg-opacity-70'
            onClick={() => dispatch(cancelPromotion())}
        >
            {promotionPieces?.map((piece, index) => (
                <img
                    src={`/${piece}.png`}
                    className={`z-[3] ${pieceStyle(
                        piece,
                        x + (index % 2),
                        y + Math.floor(index / 2)
                    )}`}
                    key={`promotion${index}`}
                    onClick={(e) => {
                        e.stopPropagation()
                        dispatch(transFormPawn(piece))
                    }}
                />
            ))}
        </div>
    )
}

export default Promotion
