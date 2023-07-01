const createTime = (time: string) => {
    const initTime = Date.now()
    const limit = time === '∞' ? null : Number(time.split(' + ')[0]) * 60 * 1000
    const addition = time === '∞' ? 0 : Number(time.split(' + ')[1]) * 1000

    return {
        initTime,
        lastMove: null,
        white: {
            firstMoveTime: 0,
            elapsedTime: 0
        },
        black: {
            firstMoveTime: 0,
            elapsedTime: 0
        },
        limit,
        addition
    }
}

export default createTime
