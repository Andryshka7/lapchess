import { useAppDispatch, useAppSelector } from 'redux/store'
import { cancelPromotion, transformPawn } from 'pages/mastery/redux/actions'
import { hoverEffect, left, margin, scale, top } from 'config/styles/piece'

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
            {promotionPieces?.map((piece, index) => {
                const piecePos = `${left(x + (index % 2))} ${top(y + Math.floor(index / 2))}`
                const pieceScale = scale(piece[1])
                const pieceMargin = margin(piece[1])
                const pieceHover = hoverEffect(piece[1])

                return (
                    <img
                        src={`pieces/${turn + piece}.png`}
                        className={`absolute z-[3] w-[12.5%] transition-all duration-200 ${piecePos} ${pieceScale} ${pieceMargin} ${pieceHover}`}
                        key={`promotion${index}`}
                        onClick={(e) => {
                            e.stopPropagation()
                            dispatch(transformPawn({ promoted, transformation: piece }))
                        }}
                    />
                )
            })}
        </div>
    )
}

export default Promotion
