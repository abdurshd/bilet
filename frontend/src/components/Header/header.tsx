import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import Link from 'next/link'

export default function Header () {
    return (
        <header className='flex flex-row justify-between w-full'>
            <div className='pl-5 pt-5'>
                <Link href='/' >Support Desk</Link>
            </div>
            <ul className='flex flex-row'>
                <li>
                    <Link href='/login' className='flex flex-row pr-5 pt-5'>
                        <div className='px-2 pt-1'>
                        <FaSignInAlt />
                        </div>
                        Login
                    </Link>
                </li>
                <li>
                    <Link href='/register' className='flex flex-row pr-5 pt-5'>
                        <div className='px-2 pt-1'>
                            <FaUser/>
                        </div>
                        Register
                    </Link>
                </li>
            </ul>
        </header>
    )
}