import Link from 'next/link'
import React from 'react'

function notFound() {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center bg-transparent">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-red-500  px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
                <b className="relative inline-block text-sm font-medium text-gray-400 group active:text-red-500 focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-500 group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                        <Link href="/">Go Home</Link>
                    </span>
                </b>
            </button>
        </div>

    )
}

export default notFound