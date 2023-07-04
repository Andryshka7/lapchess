import { AiOutlineLinkedin } from 'react-icons/ai'
import { VscGithub } from 'react-icons/vsc'
import { BsInstagram, BsSteam } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const gitHub = 'https://github.com/Andryshka16'
const linkedIn =
    'https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%BB%D0%B0%D0%BF%D1%87%D0%B8%D0%BA-03b72326b'
const instagram = 'https://www.instagram.com/andryshka.16'
const steam = 'https://steamcommunity.com/id/Bh0p4iK'

const Footer = () => (
    <footer className='mt-auto flex h-8 w-full items-center justify-between bg-blue-500 text-sm font-medium'>
        <div className='flex w-fit items-center gap-1 px-10'>
            <NavLink to={gitHub} target='blank'>
                <VscGithub size={20} className='transition duration-200 hover:scale-110' />
            </NavLink>
            <NavLink to={linkedIn} target='blank'>
                <AiOutlineLinkedin size={25} className='transition duration-200 hover:scale-110' />
            </NavLink>
        </div>
        <p> © 2023 Lapchess All Rights Reserved </p>
        <div className='flex w-fit items-center gap-2 px-10'>
            <NavLink to={instagram} target='blank'>
                <BsInstagram size={19} className='transition duration-200 hover:scale-110' />
            </NavLink>
            <NavLink to={steam} target='blank'>
                <BsSteam size={19} className='transition duration-200 hover:scale-110' />
            </NavLink>
        </div>
    </footer>
)

export default Footer
