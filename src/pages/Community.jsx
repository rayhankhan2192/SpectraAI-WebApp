import { Link } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import { useState } from 'react'

function Community() {
  const [activeTab, setActiveTab] = useState('discoveries')

  const communityStats = [
    { label: 'Active Researchers', value: '200', icon: '👥', color: 'blue' },
    { label: 'Exoplanets Found', value: '6,000', icon: '🪐', color: 'purple' },
    { label: 'Datasets Shared', value: '200', icon: '📊', color: 'cyan' },
    { label: 'Models Trained', value: '20', icon: '🤖', color: 'green' }
  ]

  const recentDiscoveries = [
    {
      id: 1,
      name: 'KOI-1599.01',
      discoverer: 'Dr. Sarah Chen',
      date: '2 days ago',
      confidence: 94.2,
      type: 'Super Earth',
      distance: '245 ly',
      status: 'Confirmed'
    },
    {
      id: 2,
      name: 'TESS-4521b',
      discoverer: 'Alex Rodriguez',
      date: '5 days ago',
      confidence: 87.8,
      type: 'Gas Giant',
      distance: '1,200 ly',
      status: 'Candidate'
    },
    {
      id: 3,
      name: 'Kepler-186f',
      discoverer: 'Team Alpha',
      date: '1 week ago',
      confidence: 96.1,
      type: 'Earth-like',
      distance: '500 ly',
      status: 'Confirmed'
    }
  ]

  const topContributors = [
    { rank: 1, name: 'Dr. Sarah Chen', discoveries: 23, points: 15847, avatar: '👩‍🔬' },
    { rank: 2, name: 'Alex Rodriguez', discoveries: 18, points: 12392, avatar: '👨‍💻' },
    { rank: 3, name: 'Team Alpha', discoveries: 15, points: 10156, avatar: '👥' },
    { rank: 4, name: 'Maria Santos', discoveries: 12, points: 8743, avatar: '👩‍🚀' },
    { rank: 5, name: 'David Kim', discoveries: 11, points: 7921, avatar: '👨‍🔬' }
  ]

  const discussionCategories = [
    { name: 'General Discussion', posts: 342, icon: '💬', color: 'blue' },
    { name: 'Data Analysis', posts: 189, icon: '📈', color: 'purple' },
    { name: 'Model Training', posts: 156, icon: '🤖', color: 'cyan' },
    { name: 'TESS Data', posts: 234, icon: '🛰️', color: 'green' },
    { name: 'Kepler Archive', posts: 198, icon: '🔭', color: 'pink' },
    { name: 'New Discoveries', posts: 267, icon: '🪐', color: 'yellow' }
  ]

  const upcomingEvents = [
    {
      title: 'NASA Space Apps Challenge 2025',
      date: 'Oct 5-6, 2025',
      type: 'Hackathon',
      participants: '2,500+',
      description: 'Global hackathon focused on space exploration and AI'
    },
    {
      title: 'Exoplanet Detection Workshop',
      date: 'Sep 28, 2025',
      type: 'Workshop',
      participants: '150',
      description: 'Learn advanced techniques for exoplanet identification'
    },
    {
      title: 'Community Data Jam',
      date: 'Sep 15, 2025',
      type: 'Meetup',
      participants: '75',
      description: 'Collaborative data analysis session'
    }
  ]

  const resources = [
    {
      title: 'TESS Data Processing Guide',
      author: 'Dr. Sarah Chen',
      downloads: '1,234',
      type: 'Tutorial',
      rating: 4.9
    },
    {
      title: 'Kepler Light Curve Analysis',
      author: 'Alex Rodriguez',
      downloads: '987',
      type: 'Dataset',
      rating: 4.8
    },
    {
      title: 'AI Model Training Best Practices',
      author: 'Team Alpha',
      downloads: '756',
      type: 'Guide',
      rating: 4.7
    }
  ]

  return (
    <div className="top-8 relative min-h-screen w-full bg-black">
      {/* Background Image with fixed positioning */}
      <div
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/community2.jpg)',
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
              COMMUNITY
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide animate-gradient mb-6" style={{
              background: 'linear-gradient(90deg, #60A5FA 0%, #34D399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
            }}>
              JOIN THE MISSION
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: '0.02em' }}>
              Connect with fellow space explorers, share discoveries, and collaborate on the next generation of exoplanet research.
            </p>
          </div>

          {/* Community Stats */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {communityStats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className={`text-3xl font-black mb-2 text-${stat.color}-400`}>{stat.value}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                { id: 'discoveries', label: 'Recent Discoveries', icon: '🪐' },
                { id: 'contributors', label: 'Top Contributors', icon: '🏆' },
                { id: 'discussions', label: 'Discussions', icon: '💬' },
                { id: 'events', label: 'Events', icon: '📅' },
                { id: 'resources', label: 'Resources', icon: '📚' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-6xl mx-auto">
            {/* Recent Discoveries Tab */}
            {activeTab === 'discoveries' && (
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Recent Discoveries
                    </span>
                  </h3>
                  <p className="text-gray-400 text-lg">Latest exoplanets discovered by our community</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentDiscoveries.map((discovery, index) => (
                    <div key={discovery.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-white font-bold text-lg">{discovery.name}</h4>
                          <p className="text-gray-400 text-sm">by {discovery.discoverer}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          discovery.status === 'Confirmed' 
                            ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                        }`}>
                          {discovery.status}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Confidence</span>
                          <span className="text-white font-semibold">{discovery.confidence}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Type</span>
                          <span className="text-white font-semibold">{discovery.type}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Distance</span>
                          <span className="text-white font-semibold">{discovery.distance}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">Discovered</span>
                          <span className="text-white font-semibold">{discovery.date}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${discovery.confidence}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Top Contributors Tab */}
            {activeTab === 'contributors' && (
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Top Contributors
                    </span>
                  </h3>
                  <p className="text-gray-400 text-lg">Our most active community members</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                  <div className="space-y-4">
                    {topContributors.map((contributor, index) => (
                      <div key={contributor.rank} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                            <span className="text-2xl">{contributor.avatar}</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-3">
                              <span className="text-2xl font-bold text-yellow-400">#{contributor.rank}</span>
                              <h4 className="text-white font-semibold text-lg">{contributor.name}</h4>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span>{contributor.discoveries} discoveries</span>
                              <span>{contributor.points.toLocaleString()} points</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-400">{contributor.points.toLocaleString()}</div>
                          <div className="text-sm text-gray-400">Total Points</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Discussions Tab */}
            {activeTab === 'discussions' && (
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Discussion Forums
                    </span>
                  </h3>
                  <p className="text-gray-400 text-lg">Join conversations with fellow researchers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {discussionCategories.map((category, index) => (
                    <div key={category.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${category.color}-500/30 to-${category.color}-600/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                          <span className="text-2xl">{category.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">{category.name}</h4>
                          <p className="text-gray-400 text-sm">{category.posts} posts</p>
                        </div>
                      </div>
                      <div className="text-gray-400 text-sm leading-relaxed">
                        Join the discussion about {category.name.toLowerCase()} and share your insights with the community.
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Events Tab */}
            {activeTab === 'events' && (
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Upcoming Events
                    </span>
                  </h3>
                  <p className="text-gray-400 text-lg">Join our community events and challenges</p>
                </div>

                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h4 className="text-white font-bold text-xl">{event.title}</h4>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full border border-blue-400/30">
                              {event.type}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm mb-4">{event.description}</p>
                          <div className="flex items-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-400">📅</span>
                              <span className="text-white">{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-400">👥</span>
                              <span className="text-white">{event.participants}</span>
                            </div>
                          </div>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                          Join Event
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Resources Tab */}
            {activeTab === 'resources' && (
              <div className="animate-fade-in">
                <div className="text-center mb-12">
                  <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Community Resources
                    </span>
                  </h3>
                  <p className="text-gray-400 text-lg">Shared datasets, tutorials, and guides</p>
                </div>

                <div className="space-y-6">
                  {resources.map((resource, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-white font-bold text-lg">{resource.title}</h4>
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full border border-purple-400/30">
                              {resource.type}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">by {resource.author}</p>
                          <div className="flex items-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-400">📥</span>
                              <span className="text-white">{resource.downloads} downloads</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-400">⭐</span>
                              <span className="text-white">{resource.rating}/5.0</span>
                            </div>
                          </div>
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Join Community CTA */}
          <div className="max-w-4xl mx-auto text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 md:p-12 animate-slide-up">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Community?
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Connect with fellow space explorers, share your discoveries, and contribute to the future of exoplanet research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-blue-500/50">
                  Join Community
                </button>
                <Link
                  to="/upload"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  Start Contributing
                </Link>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="max-w-6xl mx-auto border-t border-white/10 pt-12 pb-8 mt-16">
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

export default Community
