import gameField from '../../store/gameField'
import { Piece } from './Piece'

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
