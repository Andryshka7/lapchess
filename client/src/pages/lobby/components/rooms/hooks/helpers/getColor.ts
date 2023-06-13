const getColor = (color: string) => {
    if (color === 'random') {
        return ['w', 'b'][Math.floor(Math.random() * 2)]
    }
    return color === 'white' ? 'b' : 'w'
}

export default getColor
