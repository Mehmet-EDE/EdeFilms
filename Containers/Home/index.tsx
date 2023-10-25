import FeaturedMovies from '@/Components/FeaturedMovies'
import React from 'react'
import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'
import Categories from '@/Components/Catergories'
import MoviesSection from '@/Components/MoviesSection'
interface homeprops {
    selectedCategory: {
        id: string;
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
}

function Home({ selectedCategory }: homeprops) {
    const movie = Movies.results[0]
    var moviesTitle = ""
    if (selectedCategory.id) {
        moviesTitle = Genres.genres.find(x => x.id.toString() == selectedCategory.id)?.name || ""
    }

    return (
        <div>
            <FeaturedMovies
                movie={movie}
                isCompact={true}
            />
            <Categories category={Genres.genres} />
            {
                selectedCategory.movies.length >= 1 ?
                    <MoviesSection title={moviesTitle} movies={selectedCategory.movies} /> : ""
            }
            <MoviesSection title='POPULAR FILMS' movies={Movies.results.slice(0, 10)} />
            <MoviesSection title='Your FAVORITES' movies={Movies.results.slice(10, 20)} />
        </div>
    )
}

export default Home