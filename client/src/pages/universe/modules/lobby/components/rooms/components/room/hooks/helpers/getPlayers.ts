type User = {
    username: string
    avatar: string
    _id: string
} | null

const getPlayers = (color: string, owner: User, guest: User) => {
    if (color === 'wK') {
        return [owner, guest]
    } else if (color === 'bK') {
        return [guest, owner]
    } else {
        const n = Math.random()
        return n > 0.5 ? [guest, owner] : [owner, guest]
    }
}

export default getPlayers
