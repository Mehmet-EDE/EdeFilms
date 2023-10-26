"use client"
import HomeContainer from '@/Containers/Home'
import Movies from '@/mocks/movies.json'

interface pageProps {
  params: {
    category: string[];
  };
}
interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
async function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(() => resolve, ms))
}

export default async function Home({ params }: pageProps) {
  await delay(2000)
  var selectedCategory, movieArr: Movie[] = [];
  if (params.category && params.category.length > 0) {
    selectedCategory = true
  }
  Movies.results.forEach(x => {

    if (`${x.genre_ids}`.includes(params.category?.[0])) {
      movieArr.push(x)
    }
  })
  return (
    <div>
      <HomeContainer selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? movieArr : []
      }} />
    </div>
  )
}
