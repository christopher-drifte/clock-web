import { getDate } from '@christopher-drifte/clock'

function App() {
  const date = getDate()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-4xl font-bold">
        {date}
      </div>
    </div>
  )
}

export default App
