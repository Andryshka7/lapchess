import gameFielFromFEN from './gamefieldFromFEN'
import initialState from '../../../../store/initialState'

const letters = 'abcdefgh'

const convertFromFEN = (fen: string) => {
    try {
        const [field, turn, castlingOptions, [letter, digit]] = fen.split(' ')

        const gameField = gameFielFromFEN(field)

        const k = turn === 'b' ? 1 : -1
        const enpassing =
            letter === '-' ? null : { x: letters.indexOf(letter), y: 8 - (Number(digit) + k) }
        const castling = castlingOptions === '-' ? '' : castlingOptions

        const chessBoard = { ...initialState, gameField, turn, castling, enpassing }

        return chessBoard
    } catch (error) {
        return null
    }
}

export default convertFromFEN
