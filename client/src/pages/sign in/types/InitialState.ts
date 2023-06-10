export interface InitialState {
    user: null | {
        username: string
        avatar: string
        _id: string
    }
    token: null | string
}
