import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { MovieInfo } from '../types'
import { Movie } from './movie'

const my_api_key = import.meta.env.VITE_API_KEY

export const App = () => {
  const [page, setPage] = useState<number>(1)

  const topMoviesApi = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${my_api_key}&page=${page}`

  const getMovies = async () => {
    return await axios.get(topMoviesApi).then(res => res.data.results)
  }
  const { isLoading, data } = useQuery<MovieInfo[]>({
    queryKey: ['movies', page],
    queryFn: getMovies,
  })

  return (
    <div className='movie_app'>
      <h1 className='header'>
        <span className='text'>Movies</span>
      </h1>

      <div className='container'>
        {isLoading ? (
          <h1 className='loading'>Loading...</h1>
        ) : (
          <>
            {(data ?? []).length > 0 &&
              (data ?? []).map(movie => <Movie key={movie.id} {...movie} />)}
          </>
        )}
      </div>

      <div className='pagination'>
        <button
          onClick={() => setPage(prev => prev - 1)}
          disabled={page === 1 ? true : false}
        >
          Prev
        </button>
        <button
          onClick={() => setPage(prev => prev + 1)}
          disabled={page === 100 ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  )
}
