import React from 'react'
import Movie from '@/Containers/Movie'
import Movies from '@/mocks/movies.json'
import { notFound } from 'next/navigation'
interface props {
  params: {
    id: string
  }
  searchParams: {
    error: string
  }
}
function pages({ params, searchParams }: props) {
  const selectedMovie = Movies.results.find(x => x.id.toString() === params.id)
  if (selectedMovie === undefined) {
    return notFound();
  }
  console.log(searchParams)
  if (searchParams.error == "true") {
    throw new Error()
  }
  return (
    <Movie movie={selectedMovie} />
  )
}

export default pages