import { opposite } from 'helpers'
import getCellAttackers from 'helpers/Get Cell Attackers'
import { ChessBoard } from 'types'

const longCaslingAllowed = ([_, y]: number[], chessBoard: ChessBoard) => {
    const {
        turn,
        gameField,
        castling,
        gameStatus: { check }
    } = chessBoard

    const castlingIsAllowed = !check && castling.includes(turn === 'w' ? 'Q' : 'q')

    const roadIsEmpty =
        gameField[y][1] === '0' && gameField[y][2] === '0' && gameField[y][3] === '0'

    const roadIsFreeFromChecks =
        !getCellAttackers([3, y], gameField, opposite(turn)).length &&
        !getCellAttackers([4, y], gameField, opposite(turn)).length

    return castlingIsAllowed && roadIsEmpty && roadIsFreeFromChecks
}

export default longCaslingAllowed
