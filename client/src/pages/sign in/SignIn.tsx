import { useState, useEffect } from 'react'
import { useAppSelector } from 'redux/store'
import { useNavigate } from 'react-router-dom'
import SignUp from './modules/sign up/SignUp'
import Login from './modules/login/Login'

const SignIn = () => {
    const { user } = useAppSelector((store) => store.auth)
    const [showSignUp, setShowSigUp] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) navigate('/')
    }, [user])

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
