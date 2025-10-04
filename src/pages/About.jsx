import { Link } from 'react-router-dom'
import Navbar from '../Component/Navbar'

function About() {
  return (
    <div className="top-6 relative min-h-screen w-full bg-black">
      {/* Background Image with fixed positioning */}
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/about1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="pt-20 px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-down">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-wider animate-glow" style={{ letterSpacing: '0.05em' }}>
              ABOUT SPECTRA
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide animate-gradient mb-6" style={{
              background: 'linear-gradient(90deg, #60A5FA 0%, #34D399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
            }}>
              THE AI MISSION
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '0.02em' }}>
              From flickers of starlight to the discovery of new worlds, we harness the power of artificial intelligence to explore the unknown.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500 animate-slide-up">
              <div className="text-center mb-8">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full mb-6">
                  <span className="text-blue-300 text-sm font-bold uppercase tracking-wider">Our Mission</span>
                </div>
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">
                  Transforming Space Data Into Discoveries
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto">
                  SpectraII represents the next generation of exoplanet discovery tools, combining NASA's vast astronomical datasets 
                  with cutting-edge artificial intelligence. Our mission transforms raw space data into meaningful discoveries, 
                  bringing the hunt for exoplanets to scientists, dreamers, and citizen explorers everywhere.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Key Features
                </span>
              </h3>
              <p className="text-gray-400 text-lg">Advanced AI-powered tools for exoplanet discovery</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Detection */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group animate-slide-in-up">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/30 to-blue-600/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">AI-Powered Detection</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Advanced Machine Learning algorithms trained on NASA datasets for accurate exoplanet identification</p>
                  </div>
                </div>
              </div>

              {/* Data Fusion */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer group animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/30 to-purple-600/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors">Data Fusion</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Combine multiple datasets from TESS, Kepler, and KOI for comprehensive analysis</p>
                  </div>
                </div>
              </div>

              {/* Interactive Visuals */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer group animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/30 to-cyan-600/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">Interactive Visuals</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Explore raw and processed light curves in real-time with intuitive visualizations</p>
                  </div>
                </div>
              </div>

              {/* Model Training */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-pointer group animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500/30 to-green-600/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-green-400 transition-colors">Model Training</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Train custom AI models with your own datasets for specialized exoplanet detection</p>
                  </div>
                </div>
              </div>

              {/* Public Engagement */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 cursor-pointer group animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/30 to-pink-600/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-pink-400 transition-colors">Citizen Science</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Empower citizen scientists to upload and analyze their own astronomical data</p>
                  </div>
                </div>
              </div>

              {/* Global Access */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer group animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/30 to-blue-600/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform duration-300">
                    <svg className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">Global Access</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Designed for worldwide accessibility with multilingual support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Technology Stack
                </span>
              </h3>
              <p className="text-gray-400 text-lg">Built with cutting-edge technologies</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">React Js</h4>
                <p className="text-gray-400 text-sm">Modern UI Framework</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Tailwind CSS</h4>
                <p className="text-gray-400 text-sm">Utility-First Styling</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">Python</h4>
                <p className="text-gray-400 text-sm">Powerful Programming Language</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-white font-semibold mb-2">AI/ML</h4>
                <p className="text-gray-400 text-sm">Machine Learning</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 md:p-12 animate-slide-up">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">
                Ready to Hunt Exoplanets?
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Join the mission to discover new worlds beyond our solar system. 
                Upload your data, train models, and contribute to the future of space exploration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/upload"
                  className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-blue-500/50"
                  style={{ letterSpacing: "0.1em" }}
                >
                  Start Hunting
                </Link>
                <Link
                  to="/"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="max-w-6xl mx-auto border-t border-white/10 pt-12 pb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Spectra AI Logo" className="h-8 w-auto" />
                <span className="text-gray-400 text-sm">© Team Spectra 2025. All rights reserved</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 10px rgba(96, 165, 250, 0.3),
                         0 0 20px rgba(96, 165, 250, 0.2),
                         0 0 30px rgba(96, 165, 250, 0.1);
          }
          50% {
            text-shadow: 0 0 20px rgba(96, 165, 250, 0.4),
                         0 0 30px rgba(96, 165, 250, 0.3),
                         0 0 40px rgba(96, 165, 250, 0.2);
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </div>
  )
}

export default About
