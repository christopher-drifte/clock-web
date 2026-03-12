import { date } from '@christopher-drifte/clock'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated gradient background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-fuchsia-500/30 to-cyan-500/30 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-600/30 via-purple-500/30 to-blue-500/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Multiple animated mesh gradient orbs */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-bounce"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-bounce" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        ></div>
      ))}

      {/* Main content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          {/* Rotating border effect */}
          <div className="relative group perspective-1000">
            {/* Animated rotating gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 via-cyan-600 to-pink-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 animate-spin" style={{ animationDuration: '8s' }}></div>
            
            {/* Secondary rotating border */}
            <div className="absolute -inset-2 bg-gradient-to-l from-cyan-400 via-fuchsia-500 via-purple-600 to-cyan-400 rounded-3xl blur-2xl opacity-50 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
            
            {/* Main card with glassmorphism */}
            <div className="relative bg-black/40 backdrop-blur-2xl rounded-3xl p-16 border border-white/10 shadow-2xl transform-gpu transition-transform hover:scale-[1.02] duration-300">
              
              {/* Orbiting dots around the date */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full animate-spin shadow-lg shadow-cyan-500/50"
                    style={{
                      animationDuration: '4s',
                      transform: `rotate(${i * 45}deg) translateY(-200px)`,
                      animationDelay: `${i * 0.15}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Date display with incredible effects */}
              <div className="text-center space-y-12 relative z-10">
                <div className="relative inline-block">
                  {/* Multiple layered glowing shadows */}
                  <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-60 animate-pulse"></div>
                  <div className="absolute inset-0 blur-xl bg-gradient-to-l from-cyan-500 via-fuchsia-500 to-pink-500 opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  
                  {/* Main text with animated gradient */}
                  <h1 className="relative text-7xl md:text-9xl font-black tracking-tighter">
                    <span className="bg-gradient-to-r from-pink-400 via-purple-400 via-cyan-400 to-pink-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_linear_infinite]">
                      {date}
                    </span>
                  </h1>
                  
                  {/* Reflection effect */}
                  <div className="absolute inset-0 top-full opacity-30 blur-md">
                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter transform scale-y-[-1] bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {date}
                    </h1>
                  </div>
                </div>

                {/* Animated separator with expanding effect */}
                <div className="flex justify-center items-center gap-2">
                  <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping"></div>
                  <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
                </div>

                {/* Floating animated shapes */}
                <div className="flex justify-center gap-8 mt-8">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-bounce shadow-lg"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '1.5s',
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Corner accent elements */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-purple-500/50 rounded-tl-2xl"></div>
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-cyan-500/50 rounded-tr-2xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-pink-500/50 rounded-bl-2xl"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-fuchsia-500/50 rounded-br-2xl"></div>
            </div>
          </div>

          {/* Additional floating rings around the main card */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-full border-2 border-purple-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute w-4/5 h-4/5 border-2 border-cyan-500/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
            <div className="absolute w-3/5 h-3/5 border-2 border-pink-500/20 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Custom keyframe animation for shimmer */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  )
}

export default App
