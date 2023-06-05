interface Helper {
    [key: number | string]: string
}

export const cellColor1 = 'bg-[#ffb091]'
export const cellColor2 = 'bg-[#ad501a]'
export const indicatorColor = 'bg-blue-500'

export const timeControls = ['1 + 0', '3 + 0', '4 + 0', '10 + 0', '3 + 2', '5 + 3', '15 + 5', '∞']
export const colorControls = ['wK', 'halfK', 'bK']

export const left = (x: number) => {
    const positions: Helper = {
        0: 'left-[0%]',
        1: 'left-[12.5%]',
        2: 'left-[25%]',
        3: 'left-[37.5%]',
        4: 'left-[50%]',
        5: 'left-[62.5%]',
        6: 'left-[75%]',
        7: 'left-[87.5%]'
    }
    return positions[x]
}

export const top = (y: number) => {
    const positions: Helper = {
        0: 'top-[0%]',
        1: 'top-[12.5%]',
        2: 'top-[25%]',
        3: 'top-[37.5%]',
        4: 'top-[50%]',
        5: 'top-[62.5%]',
        6: 'top-[75%]',
        7: 'top-[87.5%]'
    }
    return positions[y]
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

export const getPieceStyle = (piece: string, x: number, y: number) => {
    const position = `absolute ${left(x)} ${top(y)} w-[12.5%]`
    const scale = scaling[piece] || 'scale-[0.7]'
    const hoverEffect = scaling[piece] ? hoverScaling[piece] : 'hover:scale-[0.77]'
    const margin = margins[piece] || 'mt-0'

    return `z-[1] ${position} ${margin} ${scale} ${hoverEffect} transition-all duration-200`
}
