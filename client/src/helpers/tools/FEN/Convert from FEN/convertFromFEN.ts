import { checkForKingCheck } from 'helpers/Checkers'
import chessBoard from 'config/chessBoard/chessBoard'
import gameFieldFromFEN from './gamefieldFromFEN'
import { createCopy } from 'helpers'

const letters = 'abcdefgh'

const convertFromFEN = (fen: string) => {
    try {
        const [field, turn, castlingOptions, [letter, digit]] = fen.split(' ')

        const gameField = gameFieldFromFEN(field)

        const k = turn === 'b' ? 1 : -1
        const enpassing =
            letter === '-' ? null : { x: letters.indexOf(letter), y: 8 - (Number(digit) + k) }
        const castling = castlingOptions === '-' ? '' : castlingOptions

        let converted = {
            ...createCopy(chessBoard),
            gameField,
            turn,
            castling,
            enpassing
        }

        checkForKingCheck(converted)

        return converted
    } catch (error) {
        throw error
    }
}

export default convertFromFEN
