import { Auth } from 'pages/sign in/redux/types/Auth'

const initialState: Auth = {
    loading: false,
    user: null,
    token: null
}

export default initialState
