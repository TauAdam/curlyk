import { createLazyFileRoute } from '@tanstack/react-router'
import { App } from '../components/app'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div >
      <App />
    </div>
  )
}
