import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface MoviesSectionProps {
    title: string;
    movies: {
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
    }[]

}
function MoviesSection({ title, movies }: MoviesSectionProps) {
    return (
        <div className="mt-10">
            <h3 className="mb-3 uppercase text-2xl tracking-tighter">{title}</h3>
            <div className="flex justify-start items-center flex-wrap m-5">
                {movies.map((movie) => (
                    <div className=" rounded-lg m-5 relative h-fit w-fit shadow-md transition-transform duration-300 ease-linear overflow-hidden hover:z-9 hover:scale-125" key={movie.id}>
                        <Link href={`/movie/${movie.id}`}>
                            <Image
                                width={150}
                                height={150}
                                unoptimized
                                alt={movie.title}
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default MoviesSection