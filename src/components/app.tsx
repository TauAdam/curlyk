import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { MovieInfo } from '../types'
import { Movie } from './movie'

const apiKey = import.meta.env.VITE_API_KEY

export const App = () => {
  const [page, setPage] = useState<number>(1)
  const [sortBy, setSortBy] = useState<string>('popularity.desc')
  const topMoviesApi = `https://api.themoviedb.org/3/discover/movie?sort_by=${sortBy}&api_key=${apiKey}&page=${page}`

  const getMovies = async () => {
    return await axios.get(topMoviesApi).then(res => res.data.results)
  }
  const { isLoading, data } = useQuery<MovieInfo[]>({
    queryKey: ['movies', page, sortBy],
    queryFn: getMovies,
  })

  return (
    <div className='movie_app'>
      <h1 className='header'>
        <span className='text'>Movies</span>
      </h1>
      <div>
        <label htmlFor='sortBy'>Sort By:</label>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value='popularity.desc'>Popularity (High to Low)</option>
          <option value='revenue.desc'>Revenue (High to Low)</option>
          <option value='title.asc'>Title (A to Z)</option>
          <option value='title.desc'>Title (Z to A)</option>
          <option value='vote_average.desc'>Rating (High to Low)</option>
        </select>
      </div>
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
