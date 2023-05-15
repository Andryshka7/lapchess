import { ChessBoard } from '../../types/ChessBoard'
import getCoverMoves from './King security/King presence/getCoverMoves'
import findPiece from '../findPiece'
import isUnderAttack from '../Next moves/filtration/isUnderAttack'
import checkForMate from './King security/King presence/checkForMate'

const checkForKingDanger = (state: ChessBoard) => {
    const { turn, gameField } = state
    state.checkStatus = null
    state.coverMoves = []

    const king = findPiece(turn + 'K', gameField) as number[]
    const checksArray = isUnderAttack(king, gameField, turn === 'w' ? 'b' : 'w')

    if (checksArray.length) {
        state.checkStatus = king
        state.chessMoves[state.chessMoves.length - 1] += '+'
        state.coverMoves = getCoverMoves(state, checksArray)

        if (checkForMate(state, checksArray)) {
            state.chessMoves[state.chessMoves.length - 1] += '+'
        }
    }
}

export default checkForKingDanger
