import { ChessBoard } from 'types'
import getNextMoves from '../../Next Moves'
import getCellAttackers from '../../Get Cell Attackers'
import winSound from 'assets/sounds/ez4ence.mp3'

const checkForMate = (chessBoard: ChessBoard) => {
    const { gameField, turn, gameStatus, chessMoves } = chessBoard

    if (!gameStatus.check) return

    const checksArray = getCellAttackers(gameStatus.check, gameField, turn === 'w' ? 'b' : 'w')
    const kingEscape = getNextMoves(gameStatus.check, chessBoard)

    if (checksArray.length > 1 && kingEscape.length === 0) {
        chessBoard.gameStatus.winner = turn === 'w' ? 'b' : 'w'
        chessMoves[chessMoves.length - 1] += '+'

        const sound = new Audio(winSound)
        sound.volume = 0.1
        sound.play()
    }

    for (let y = 0; y < 8; y++)
        for (let x = 0; x < 8; x++) {
            const theSameColor = gameField[y][x][0] === turn
            const moves = getNextMoves([x, y], chessBoard)
            if (theSameColor && moves.length) return
        }

    chessBoard.gameStatus.winner = turn === 'w' ? 'b' : 'w'
    chessMoves[chessMoves.length - 1] += '+'

    const sound = new Audio(winSound)
    sound.volume = 0.1
    sound.play()
}

export default checkForMate
