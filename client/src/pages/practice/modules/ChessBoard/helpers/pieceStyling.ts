import { ChessPiece } from '../types/ChessPiece'
import { leftPos, topPos } from './positionValues'

interface Helper {
    [key: number | string]: string
}

const scaling: Helper = {
    P: 'scale-[0.6]',
    B: 'scale-[0.8]',
    Q: 'scale-[0.85]',
    K: 'scale-[0.8]'
}
const hoverScaling: Helper = {
    P: 'hover:scale-[0.69]',
    B: 'hover:scale-[0.92]',
    Q: 'hover:scale-[0.9775]',
    K: 'hover:scale-[0.9775]'
}

const margins: Helper = {
    P: 'mt-[-8px]',
    Q: 'mt-[3px]',
    R: 'mt-[-3px]',
    N: 'mt-[-3px]'
}

const pieceStyle = (name: ChessPiece, x: number, y: number) => {
    const piece = name[1]

    const position = `absolute w-[12.5%] ${leftPos[x]} ${topPos[y]}`
    const scale = scaling[piece] || 'scale-[0.7]'
    const hoverEffect = scaling[piece] ? hoverScaling[piece] : 'hover:scale-[0.84]'
    const margin = margins[piece] || 'mt-0'

    return `${position} ${margin} ${scale} ${hoverEffect} transition-all duration-200`
}

export default pieceStyle
