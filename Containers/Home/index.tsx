import FeaturedMovies from '@/Components/FeaturedMovies'
import React from 'react'
import Movies from '@/mocks/movies.json'
function Home() {
    const movie = Movies.results[0]

    return (
        <div className=''>
            <FeaturedMovies
                movie={movie}
                isCompact={true}
            />
        </div>
    )
}

export default Home