import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { AiOutlinePlayCircle } from 'react-icons/ai'
interface MovieData {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
};

interface moviesprops {
    movie: MovieData
    isCompact: boolean
}

function FeaturedMovies({ movie = {
    id: 0,
    poster_path: "",
    title: "",
    overview: "",
}, isCompact }: moviesprops) {
    const { poster_path, title, overview } = movie;
    return (
        <div className='flex flex-col gap-6 mt-14 mb-14  '>
            <h1 className='text-8xl uppercase tracking-wide font-bold leading-[72px] max-w-screen-lg rsm:text-6xl '>{title}</h1>
            <p className={`text-xl max-w-[50ch]   ${isCompact ? 'truncate' : ''} `} >{overview}</p>
            <div className="flex gap-2 ">
                <Link className="flex items-center justify-center bg-gray-200 text-gray-700 w-64 h-12 rounded-full text-3xl font-semibold m-5  hover:text-white hover:shadow-[inset_18rem_0_0_0] hover:shadow-slate-600 duration-[400ms,700ms] transition-[color,box-shadow] " href={`/movie/${movie.id}`}>
                <AiOutlinePlayCircle />
                    Play
                </Link>
                <button className="flex items-center justify-center border-2  border-gray-300 rounded-full  text-gray-300">
                    <FaPlus />
                </button>
            </div>
            <div className="!h-[auto] z-[-2] max-h-screen object-cover">
                <div className="absolute top-0 left-0 right-0 bottom-0 z-[3] bg-gradient-to-t from-black  to-transparent bg-opacity-90"></div>
                <Image
                    unoptimized
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                    fill
                />
            </div>
        </div >
    )
}

export default FeaturedMovies