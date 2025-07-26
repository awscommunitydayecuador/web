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
    <section id="sponsors" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Nuestros Sponsors</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Empresas líderes que apoyan la comunidad AWS en Ecuador y hacen posible 
            este evento de aprendizaje y networking.
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              Platinum Sponsors
            </span>
          </h3>
          <div className="grid md:grid-cols-1 gap-8 justify-items-center">
            {sponsors.filter(s => s.tier === 'platinum').map(sponsor => (
              <div key={sponsor.id} className="card group max-w-md">
                <div className="relative">
                  <div className="w-64 h-32 bg-white/10 rounded-xl flex items-center justify-center p-6 group-hover:bg-white/20 transition-all duration-300">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-gray-400 to-gray-600 text-white text-xs font-bold rounded-full">
                      Platinum
                    </span>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h4 className="text-white font-semibold">{sponsor.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Gold Sponsors
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {sponsors.filter(s => s.tier === 'gold').map(sponsor => (
              <div key={sponsor.id} className="card group">
                <div className="relative">
                  <div className="w-full h-24 bg-white/10 rounded-xl flex items-center justify-center p-4 group-hover:bg-white/20 transition-all duration-300">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold rounded-full">
                      Gold
                    </span>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h4 className="text-white font-semibold">{sponsor.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Silver & Bronze Sponsors */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              Silver & Bronze Sponsors
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.filter(s => s.tier === 'silver' || s.tier === 'bronze').map(sponsor => (
              <div key={sponsor.id} className="card group">
                <div className="relative">
                  <div className="w-full h-20 bg-white/10 rounded-xl flex items-center justify-center p-4 group-hover:bg-white/20 transition-all duration-300">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getTierColor(sponsor.tier)} text-white text-xs font-bold rounded-full`}>
                      {sponsor.tier === 'silver' ? 'Silver' : 'Bronze'}
                    </span>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h4 className="text-white font-semibold text-sm">{sponsor.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA for sponsors */}
        <div className="text-center">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres ser Sponsor?
            </h3>
            <p className="text-gray-300 mb-6">
              Únete a las empresas líderes que apoyan la comunidad AWS en Ecuador. 
              Obtén visibilidad y conecta con profesionales del sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#register" className="btn-primary">
                Convertirse en Sponsor
              </a>
              <a href="#" className="btn-outline">
                Descargar Kit de Sponsorship
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 