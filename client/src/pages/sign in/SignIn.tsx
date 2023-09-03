import { useEffect, useState } from 'react'
import { useAppSelector } from 'redux/store'
import { SignUp, Login } from './components'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const { user } = useAppSelector((store) => store.auth)
    const [showSignUp, setShowSigUp] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) navigate('/')
    }, [user])

    if (user) return null

    return (
        <div className='m-auto'>
            <div className='my-3 flex justify-between overflow-hidden rounded-lg bg-[#2F3640] sm:my-16'>
                <div className='h-[600px] w-full overflow-hidden sm:h-[700px] sm:w-[500px]'>
                    <div
                        className={`transtition flex h-full w-[200%] overflow-hidden duration-200 ${
                            showSignUp ? '-translate-x-1/2' : ''
                        }`}
                    >
                        <Login showSignUp={showSignUp} setShowSighUp={setShowSigUp} />
                        <SignUp showSignUp={showSignUp} setShowSighUp={setShowSigUp} />
                    </div>
                </div>
                <div className='with-fade hidden h-[700px] w-[600px] bg-cover xl:block' />
            </div>
        </div>
    )
}

export default SignIn
