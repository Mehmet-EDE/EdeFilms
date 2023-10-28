import Link from 'next/link'
import React from 'react'
import { AiOutlinePlayCircle } from 'react-icons/ai'
function Header() {
    return (
        <header className=" containers fluid bg-gradient-to-b from-black via-gray-800 to-transparent rsm:items-center rsm:flex rsm:justify-center rsm:overflow-x-hidden">
            <div className='flex items-center justify-between'>
                <Link className='flex items-center gap-8 text-2xl font-semibold tracking-wider text-white'
                    href={{
                        pathname: '/'
                    }}>
                    <AiOutlinePlayCircle />
                    <b>EDEFilix</b>
                </Link>
                <nav className='"flex gap-12 text-white font-semibold tracking-wide"'>
                    <Link className='m-5' href="/" >Movies</Link>
                    <Link className='m-5' href="/" >Series</Link>
                    <Link className='m-5' href="/" >Kids</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header