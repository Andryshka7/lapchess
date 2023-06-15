import gameField from 'config/chessBoard/gameField'
import { Piece } from './Piece'

const Pieces = () => {
    const pieces = []

    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            if (gameField[y][x] !== '0') {
                pieces.push(gameField[y][x])
            }
        }
    }

    return (
        <>
            {pieces.map((piece) => (
                <Piece key={`piece${piece}`} piece={piece} />
            ))}
        </>
    )
}

export default Pieces
