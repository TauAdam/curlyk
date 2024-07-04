import { usePopular } from '../hooks/usePopular'

type Movie = {
  id: number
  title: string
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export const MovieList = () => {
  const { data, error, isLoading } = usePopular()
	console.log(data);
  return (
    <div>
      <h1>Popular Movies</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <ul>
          {data.map((movie: Movie) => (
            <li key={movie.id} className='flex gap-2'>
              <img
                src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                alt={movie.title}
              />
              <div>
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
