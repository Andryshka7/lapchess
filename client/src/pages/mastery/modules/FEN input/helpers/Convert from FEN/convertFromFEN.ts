import gameFielFromFEN from './gamefieldFromFEN'
import chessBoard from '../../../../store/initialState/chessBoard'
import { checkForKingDanger } from 'pages/mastery/store/helpers'

const letters = 'abcdefgh'

const convertFromFEN = (fen: string) => {
    try {
        const [field, turn, castlingOptions, [letter, digit]] = fen.split(' ')

        const gameField = gameFielFromFEN(field)

        const k = turn === 'b' ? 1 : -1
        const enpassing =
            letter === '-' ? null : { x: letters.indexOf(letter), y: 8 - (Number(digit) + k) }
        const castling = castlingOptions === '-' ? '' : castlingOptions

        const converted = { ...chessBoard, gameField, turn, castling, enpassing }
        checkForKingDanger(converted)
        return converted
    } catch (error) {
        return null
    }
}

export default convertFromFEN
