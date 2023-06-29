interface Time {
    whiteElapsedTime: number
    blackElapsedTime: number

    startingPoint: null | number
    lastMove: null | number

    limit: null | number
    addition: number
}

export default Time
