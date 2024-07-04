import { createLazyFileRoute } from '@tanstack/react-router'
import { MovieList } from '../components/movieList'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <MovieList/>
    </div>
  )
}
