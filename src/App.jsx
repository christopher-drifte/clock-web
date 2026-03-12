import { date } from '@christopher-drifte/clock'

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-950">
      <div className="text-center space-y-8 p-8">
        {/* Clock icon decoration */}
        <div className="flex justify-center">
          <div className="relative w-32 h-32">
            {/* Clock circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-2xl shadow-purple-500/50 animate-pulse"></div>
            
            {/* Clock face */}
            <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
              {/* Hour markers */}
              <div className="absolute w-1 h-3 bg-purple-600 dark:bg-purple-400 rounded-full top-3 left-1/2 -translate-x-1/2"></div>
              <div className="absolute w-1 h-3 bg-purple-600 dark:bg-purple-400 rounded-full bottom-3 left-1/2 -translate-x-1/2"></div>
              <div className="absolute w-3 h-1 bg-purple-600 dark:bg-purple-400 rounded-full left-3 top-1/2 -translate-y-1/2"></div>
              <div className="absolute w-3 h-1 bg-purple-600 dark:bg-purple-400 rounded-full right-3 top-1/2 -translate-y-1/2"></div>
              
              {/* Clock hands */}
              <div className="absolute w-1 h-8 bg-purple-700 dark:bg-purple-300 rounded-full origin-bottom" style={{ transform: 'rotate(-60deg) translateY(-50%)' }}></div>
              <div className="absolute w-0.5 h-10 bg-indigo-600 dark:bg-indigo-400 rounded-full origin-bottom" style={{ transform: 'rotate(30deg) translateY(-50%)' }}></div>
              
              {/* Center dot */}
              <div className="absolute w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Date display */}
        <div className="space-y-4">
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            {date}
          </div>
          
          {/* Decorative line */}
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 rounded-full"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
            Every moment counts
          </p>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full blur-xl opacity-50 animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full blur-xl opacity-50 animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  )
}

export default App
