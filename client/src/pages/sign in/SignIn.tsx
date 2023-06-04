import { useState } from 'react'
import { useAppSelector } from 'redux/store'
import SignUp from './modules/sign up/SignUp'
import Login from './modules/login/Login'

const SignIn = () => {
    const { username, token } = useAppSelector((store) => store.auth)
    const [showSignUp, setShowSigUp] = useState(false)

    if (token) return <h1>Authorized as {username}</h1>

    return (
        <div className='mx-auto my-16 flex justify-between overflow-hidden rounded-lg bg-[#2F3640]'>
            <div className='h-[700px] w-[500px] overflow-hidden'>
                <div
                    className={`transtition flex h-[700px] w-[1000px] overflow-hidden 
                    duration-200 ${showSignUp ? '-translate-x-1/2' : ''}`}
                >
                    <Login setShowSighUp={() => setShowSigUp((prev) => !prev)} />
                    <SignUp setShowSighUp={() => setShowSigUp((prev) => !prev)} />
                </div>
            </div>
            <div className='with-fade h-[700px] w-[600px] bg-cover' />
        </div>
    )
}

export default SignIn
