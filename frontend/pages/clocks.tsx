import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ClockShowcase() {
  const router = useRouter()

  const clocks = [
    {
      id: 'clock',
      title: 'Multi-Timezone Digital Clock',
      description: 'Real-time display across 12 major cities with 24/12-hour toggle',
      icon: '⏰',
      color: 'from-purple-600 to-blue-600',
      path: '/clock',
    },
    {
      id: 'world-clock',
      title: 'Global Time Tracker',
      description: 'Monitor 18 cities worldwide with date and timezone information',
      icon: '🌐',
      color: 'from-blue-600 to-cyan-600',
      path: '/world-clock',
    },
    {
      id: 'analog-clock',
      title: 'Analog World Clock',
      description: 'Classic analog displays with moving hands for 6 major cities',
      icon: '🕐',
      color: 'from-pink-600 to-rose-600',
      path: '/analog-clock',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            🕰️ Clock Collection
          </h1>
          <p className="text-gray-400 text-xl">
            Beautiful digital and analog clocks showing time across the world
          </p>
        </div>

        {/* Clock Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {clocks.map((clock) => (
            <div
              key={clock.id}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 border border-purple-500/30 overflow-hidden cursor-pointer"
              onClick={() => router.push(clock.path)}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${clock.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-4">{clock.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
                  {clock.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6">{clock.description}</p>

                {/* Button */}
                <button className={`w-full bg-gradient-to-r ${clock.color} hover:shadow-lg text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform group-hover:scale-105`}>
                  View Clock →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-500/30 backdrop-blur mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">✨ Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <h3 className="font-bold text-white mb-2">Real-Time Updates</h3>
              <p className="text-gray-300 text-sm">Updates every second with high precision</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌍</div>
              <h3 className="font-bold text-white mb-2">Multi-Timezone</h3>
              <p className="text-gray-300 text-sm">Support for 18+ major cities worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎨</div>
              <h3 className="font-bold text-white mb-2">Beautiful Design</h3>
              <p className="text-gray-300 text-sm">Modern UI with smooth animations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📱</div>
              <h3 className="font-bold text-white mb-2">Responsive</h3>
              <p className="text-gray-300 text-sm">Works perfectly on all devices</p>
            </div>
          </div>
        </div>

        {/* Time Zones Info */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-purple-500/30 backdrop-blur">
          <h2 className="text-3xl font-bold text-white mb-6">🗺️ Supported Time Zones</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm text-gray-300">
            <div>🗽 New York (EST)</div>
            <div>🇬🇧 London (GMT)</div>
            <div>🗼 Paris (CET)</div>
            <div>🌆 Dubai (GST)</div>
            <div>🐯 India (IST)</div>
            <div>⛩️ Tokyo (JST)</div>
            <div>🐉 Hong Kong (HKT)</div>
            <div>🦘 Sydney (AEDT)</div>
            <div>🇸🇬 Singapore (SGT)</div>
            <div>🏯 Bangkok (ICT)</div>
            <div>🇲🇽 Mexico (CST)</div>
            <div>🥝 Auckland (NZDT)</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Link href="/">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
