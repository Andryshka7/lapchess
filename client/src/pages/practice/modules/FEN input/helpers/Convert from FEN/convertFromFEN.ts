import gameFielFromFEN from './gamefieldFromFEN'
import chessBoard from '../../../../store/initialState/chessBoard'

const letters = 'abcdefgh'

const convertFromFEN = (fen: string) => {
    try {
        const [field, turn, castlingOptions, [letter, digit]] = fen.split(' ')

        const gameField = gameFielFromFEN(field)

        const k = turn === 'b' ? 1 : -1
        const enpassing =
            letter === '-' ? null : { x: letters.indexOf(letter), y: 8 - (Number(digit) + k) }
        const castling = castlingOptions === '-' ? '' : castlingOptions

        return { ...chessBoard, gameField, turn, castling, enpassing }
    } catch (error) {
        return null
    }
}

export default convertFromFEN
