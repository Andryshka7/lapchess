import { useState } from 'react'
import { useAppSelector } from 'redux/store'
import { SignUp, Login } from './components'

const SignIn = () => {
    const { user } = useAppSelector((store) => store.auth)
    const [showSignUp, setShowSigUp] = useState(false)

    if (user) return <h1>Authorized as {user.username}</h1>

    return (
        <div className='mx-auto my-16 flex justify-between overflow-hidden rounded-lg bg-[#2F3640]'>
            <div className='h-[700px] w-[500px] overflow-hidden'>
                <div
                    className={`transtition flex h-[700px] w-[1000px] overflow-hidden 
                    duration-200 ${showSignUp ? '-translate-x-1/2' : ''}`}
                >
                    <Login showSignUp={showSignUp} setShowSighUp={setShowSigUp} />
                    <SignUp showSignUp={showSignUp} setShowSighUp={setShowSigUp} />
                </div>
            </div>
            <div className='with-fade h-[700px] w-[600px] bg-cover' />
        </div>
    )
}

export default SignIn
