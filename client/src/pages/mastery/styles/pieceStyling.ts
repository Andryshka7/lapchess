import { leftPos, topPos } from '../modules/ChessBoard/helpers/positionValues'

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
    P: 'hover:scale-[0.66]',
    B: 'hover:scale-[0.88]',
    Q: 'hover:scale-[0.935]',
    K: 'hover:scale-[0.88]'
}

const margins: Helper = {
    P: 'mt-[-8px]',
    Q: 'mt-[3px]',
    R: 'mt-[-3px]',
    N: 'mt-[-3px]'
}

const pieceStyle = (piece: string, x: number, y: number) => {
    const position = `absolute w-[12.5%] ${leftPos[x]} ${topPos[y]}`
    const scale = scaling[piece] || 'scale-[0.7]'
    const hoverEffect = scaling[piece] ? hoverScaling[piece] : 'hover:scale-[0.77]'
    const margin = margins[piece] || 'mt-0'

    return `z-[1] ${position} ${margin} ${scale} ${hoverEffect} transition-all duration-200`
}

export default pieceStyle
