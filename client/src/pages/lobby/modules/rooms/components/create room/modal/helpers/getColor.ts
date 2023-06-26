const getColor = (color: string) => {
    if (color === 'random') {
        return ['w', 'b'][Math.floor(Math.random() * 2)]
    }
    return color === 'white' ? 'w' : 'b'
}

export default getColor
