import FeaturedMovies from '@/Components/FeaturedMovies'
import React from 'react'

interface MovieData {
    movie: {
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
    }
}

function Movie({ movie }: MovieData) {
    return (
        <FeaturedMovies movie={movie} isCompact={false} />
    )
}

export default Movie
