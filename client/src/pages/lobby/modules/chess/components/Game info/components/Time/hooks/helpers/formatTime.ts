const format = (value: number) => (String(value).length < 2 ? '0' + value : value)

const formatTime = (milliseconds: number | null) => {
    if (milliseconds === null) return '∞'

    const minutes = Math.floor(milliseconds / 1000 / 60)
    const seconds = Math.floor(milliseconds / 1000) % 60

    return `${format(minutes)}:${format(seconds)}`
}

export default formatTime
