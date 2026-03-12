import { date } from '@christopher-drifte/clock'

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="text-center space-y-8">
        {/* Clock emoji */}
        <div className="text-8xl">
          🕐
        </div>
        
        {/* Date text */}
        <h1 className="text-5xl md:text-6xl text-white font-light tracking-wide">
          {date}
        </h1>

        {/* Link */}
        <div>
          <a 
            href="https://github.com/christopher-drifte/clock"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/60 text-sm transition-colors"
          >
            What is this?
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
