export default function Sponsors() {
  const sponsors = [
    {
      id: 1,
      name: "Amazon Web Services",
      tier: "platinum",
      logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=100&fit=crop",
      website: "#"
    },
    {
      id: 2,
      name: "TechCorp Ecuador",
      tier: "gold",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      website: "#"
    },
    {
      id: 3,
      name: "DataFlow Solutions",
      tier: "gold",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop",
      website: "#"
    },
    {
      id: 4,
      name: "SecureCloud Ecuador",
      tier: "silver",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=100&fit=crop",
      website: "#"
    },
    {
      id: 5,
      name: "Innovation Labs",
      tier: "silver",
      logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=100&fit=crop",
      website: "#"
    },
    {
      id: 6,
      name: "Startup Ecuador",
      tier: "bronze",
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop",
      website: "#"
    },
    {
      id: 7,
      name: "CloudTech Solutions",
      tier: "bronze",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=100&fit=crop",
      website: "#"
    },
    {
      id: 8,
      name: "Digital Innovation Hub",
      tier: "bronze",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=100&fit=crop",
      website: "#"
    }
  ]

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'from-gray-400 to-gray-600'
      case 'gold':
        return 'from-yellow-400 to-yellow-600'
      case 'silver':
        return 'from-gray-300 to-gray-500'
      case 'bronze':
        return 'from-amber-600 to-amber-800'
      default:
        return 'from-gray-400 to-gray-600'
    }
  }

  const getTierLabel = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'Platinum Sponsor'
      case 'gold':
        return 'Gold Sponsor'
      case 'silver':
        return 'Silver Sponsor'
      case 'bronze':
        return 'Bronze Sponsor'
      default:
        return 'Sponsor'
    }
  }

  return (
    <section id="sponsors" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            <span className="gradient-text">Nuestros Sponsors</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-2">
            Empresas líderes que apoyan y hacen posible el AWS Community Day Ecuador 2025
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="card group">
              <div className="text-center">
                {/* Sponsor Logo */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 mx-auto rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-[#f8991d]/40 transition-all duration-300">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Tier Badge */}
                  <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getTierColor(sponsor.tier)} text-white shadow-lg`}>
                    {sponsor.tier}
                  </div>
                </div>

                {/* Sponsor Info */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#f8991d] transition-colors duration-300">
                  {sponsor.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-4">
                  {getTierLabel(sponsor.tier)}
                </p>

                {/* Visit Website Button */}
                <a 
                  href={sponsor.website} 
                  className="inline-flex items-center space-x-2 text-sm sm:text-base text-[#f8991d] hover:text-[#fbbf24] transition-colors duration-300 group-hover:scale-105"
                >
                  <span>Visitar Sitio</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for Sponsors */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 px-2">
            ¿Tu empresa quiere ser parte de este gran evento?
          </p>
          <a href="#call-for-participants" className="btn-outline text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
            Convertirse en Sponsor
          </a>
        </div>
      </div>
    </section>
  )
} 