interface Helper {
    [key: number | string]: string
}

const leftValue: Helper = {
    0: 'left-[0%]',
    1: 'left-[12.5%]',
    2: 'left-[25%]',
    3: 'left-[37.5%]',
    4: 'left-[50%]',
    5: 'left-[62.5%]',
    6: 'left-[75%]',
    7: 'left-[87.5%]'
}

const topValue: Helper = {
    0: 'top-[0%]',
    1: 'top-[12.5%]',
    2: 'top-[25%]',
    3: 'top-[37.5%]',
    4: 'top-[50%]',
    5: 'top-[62.5%]',
    6: 'top-[75%]',
    7: 'top-[87.5%]'
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

export const left = (x: number) => leftValue[x]
export const top = (y: number) => topValue[y]
export const scale = (piece: string) => scaling[piece] || 'scale-[0.7]'
export const margin = (piece: string) => margins[piece] || 'mt-0'
export const hoverEffect = (piece: string) => (scaling[piece] ? hoverScaling[piece] : 'hover:scale-[0.77]')