'use client'
import { useState } from 'react'
import { getSpeakers, getSponsors } from '../utils/siteData'

export default function CallForSpeakersAndSponsors() {
  const [activeTab, setActiveTab] = useState<'speakers' | 'sponsors'>('speakers')
  const speakersData = getSpeakers()
  const sponsorsData = getSponsors()

  return (
    <section id="call-for-participants" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">¡Únete a Nosotros!</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Sé parte de este gran evento y contribuye al crecimiento de la comunidad AWS en Ecuador
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
            <button
              onClick={() => setActiveTab('speakers')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'speakers'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Call for Speakers</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('sponsors')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'sponsors'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Call for Sponsors</span>
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'speakers' && (
            <div className="card p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {speakersData.callForSpeakers.title}
                </h4>
                <p className="text-base text-gray-300 leading-relaxed">
                  {speakersData.callForSpeakers.description}
                </p>
              </div>
              <div className="text-center">
                <a 
                  href={speakersData.callForSpeakers.ctaUrl} 
                  className="btn-primary text-base px-6 py-3 inline-flex items-center space-x-2"
                >
                  <span>{speakersData.callForSpeakers.ctaText}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          )}

          {activeTab === 'sponsors' && (
            <div className="card p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {sponsorsData.callForSponsors.title}
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  {sponsorsData.callForSponsors.description}
                </p>
              </div>


              <div className="text-center space-y-4">
                <a 
                  href={sponsorsData.callForSponsors.ctaUrl} 
                  className="btn-primary text-base px-6 py-3 inline-flex items-center space-x-2"
                >
                  <span>{sponsorsData.callForSponsors.ctaText}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 