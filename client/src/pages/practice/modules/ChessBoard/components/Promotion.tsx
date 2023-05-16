import { useAppDispatch, useAppSelector } from 'redux/store'
import { cancelPromotion, transformPawn } from '../../../store/practiceSlice'
import pieceStyle from 'styles/pieceStyling'

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
    const promotionPieces = getChoices([x2, y2])

    const x = x2 < 7 ? x2 : x2 - 1
    const y = y2 < 7 ? y2 : y2 - 1

    return (
        <div
            className='z-[2] absolute w-full h-full bg-black bg-opacity-70'
            onClick={() => dispatch(cancelPromotion())}
        >
            {promotionPieces?.map((piece, index) => (
                <img
                    src={`/${turn + piece}.png`}
                    className={`z-[3] ${pieceStyle(
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
