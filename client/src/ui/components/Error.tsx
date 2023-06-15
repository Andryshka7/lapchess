import notFound from 'assets/not-found.png'
import { NavLink } from 'react-router-dom'

const Error = () => (
    <div className='mx-auto mt-4 flex h-[636px] w-[1000px] items-center justify-center rounded-lg bg-black bg-opacity-10 p-2.5'>
        <div>
            <img src={notFound} className='mx-auto -mt-8 h-[250px] w-[250px]' alt='' />
            <div className='mx-auto mb-12 mt-10 h-fit w-fit text-center text-4xl font-bold leading-normal'>
                Page not found :(
            </div>
            <NavLink
                className='mx-auto block w-fit rounded-md bg-green-600 px-10 py-2 text-xl font-semibold transition duration-200 hover:bg-opacity-90'
                to='/'
            >
                Go home
            </NavLink>
        </div>
    </div>
)

export default Error
