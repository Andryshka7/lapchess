import { useAppDispatch, useAppSelector } from 'redux/store'
import { cancelPromotion, transformPawn } from 'pages/mastery/redux/actions'
import { getPieceStyle } from 'config/styles'

const getChoices = ([x, y]: number[]) => {
    if (y === 0) {
        return x < 7 ? ['Q', 'N', 'B', 'R'] : ['N', 'Q', 'R', 'B']
    } else if (y === 7) {
        return x < 7 ? ['B', 'R', 'Q', 'N'] : ['R', 'B', 'N', 'Q']
    }
}

const Promotion = () => {
    const { turn, promoted } = useAppSelector((store) => store.mastery.chessBoard)
    const dispatch = useAppDispatch()

    if (!promoted) return null

    const { x2, y2 } = promoted
    const promotionPieces = getChoices([x2, y2])

    const x = x2 < 7 ? x2 : x2 - 1
    const y = y2 < 7 ? y2 : y2 - 1

    return (
        <div
            className='absolute left-0 top-0 z-[2] h-full w-full bg-black bg-opacity-70'
            onClick={() => dispatch(cancelPromotion())}
        >
            {promotionPieces?.map((piece, index) => (
                <img
                    src={`pieces/${turn + piece}.png`}
                    className={`z-[3] ${getPieceStyle(
                        piece,
                        x + (index % 2),
                        y + Math.floor(index / 2)
                    )}`}
                    key={`promotion${index}`}
                    onClick={(e) => {
                        e.stopPropagation()
                        dispatch(transformPawn(piece))
                    }}
                />
            ))}
        </div>
    )
}

export default Promotion
