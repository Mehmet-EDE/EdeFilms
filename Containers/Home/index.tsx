import FeaturedMovies from '@/Components/FeaturedMovies'
import React from 'react'
import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'
import Categories from '@/Components/Catergories'
import MoviesSection from '@/Components/MoviesSection'
function Home() {
    const movie = Movies.results[0]

    return (
        <div>
            <FeaturedMovies
                movie={movie}
                isCompact={true}
            />
            <Categories category={Genres.genres} />
            <MoviesSection title='POPULAR FILMS' movies={Movies.results.slice(0,10)} />
            <MoviesSection title='Your FAVORITES' movies={Movies.results.slice(10,20)} />
        </div>
    )
}

export default Home