import { MovieInfo } from '../types'

export const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
}: MovieInfo) => {
  const moviePosterBaseUrl = 'https://image.tmdb.org/t/p/w1280'

  return (
    <div className='movie'>
      <img src={moviePosterBaseUrl + poster_path} alt={title} />
      <div className='desc'>
        <div className='info'>
          <h3>{title}</h3>
          <span className='rating'>Rating:</span>
          <span>{vote_average}</span>
        </div>
        <div className='over'>
          <h2>Overview:</h2>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  )
}
