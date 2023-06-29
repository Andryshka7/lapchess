const createTime = (time: string) => {
    const limit = time === '∞' ? null : Number(time.split(' + ')[0]) * 60 * 1000
    const addition = time === '∞' ? 0 : Number(time.split(' + ')[1]) * 1000

    return {
        whiteElapsedTime: 0,
        blackElapsedTime: 0,

        startingPoint: null,
        lastMove: null,

        limit,
        addition
    }
}

export default createTime