import getCellAttackers from './Get Cell Attackers'

const letters = 'abcdefgh'
const pieces: { [key: string]: string } = {
    K: '♔',
    Q: '♕',
    B: '♗',
    R: '♖',
    N: '♘',
    P: ''
}

interface NotateMoveProps {
    name: string
    eaten: string
    gameField: string[][]
    transformation?: string
}

export default function notateMove(
    { name, eaten, gameField, transformation }: NotateMoveProps,
    [x1, y1]: number[],
    [x2, y2]: number[]
) {
    const [color, piece] = name

    const cell = letters[x2] + (8 - y2)
    const x = (piece === 'P' ? letters[x1] : '') + 'x'
    const tookPiece = eaten !== '0' ? x : ''
    const pawnPass = transformation ? '=' + pieces[transformation] : ''

    const attackers = getCellAttackers([x2, y2], gameField, color).filter(
        ([x, y]) => gameField[y][x].slice(0, 2) === color + piece && piece !== 'P'
    )

    const X_Attackers = attackers.filter(([x]) => x === x1).length
    const Y_Attackers = attackers.filter(([_, y]) => y === y1).length

    let piecePos = ''

    if (X_Attackers && !Y_Attackers) piecePos += 8 - y1
    else if (X_Attackers && Y_Attackers) piecePos += letters[x1] + (8 - y1)
    else if (attackers.length) piecePos += letters[x1]

    const text = pieces[piece] + piecePos + tookPiece + cell + pawnPass

    return text
}
