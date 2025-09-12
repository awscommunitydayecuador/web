export default function Sponsors() {
  const sponsors = [
    {
      id: 1,
      name: "Amazon Web Services",
      tier: "platinum",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
      website: "https://aws.amazon.com"
    },
    {
      id: 2,
      name: "Ondú Cloud",
      tier: "platinum",
      logo: "https://www.awsugecuador.com/wp-content/uploads/2025/09/logo-onducloud.png",
      website: "https://www.onducloud.com/"
    },
    {
      id: 3,
      name: "Escala 24x7",
      tier: "gold",
      logo: "https://www.awsugecuador.com/wp-content/uploads/2025/09/Logo-Escala24x7-variaciones-2025_Escala-24x7-Logo-Color-RGB-scaled.png",
      website: "https://www.escala24x7.com/"
    },
    {
      id: 4,
      name: "Ingram Micro",
      tier: "Bronce",
      logo: "https://www.awsugecuador.com/wp-content/uploads/2025/09/logo-ingram-01.png",
      website: "https://www.ingrammicro.com/"
    },
    {
      id: 5,
      name: "Publifyer Micro",
      tier: "platinum",
      logo: "https://www.awsugecuador.com/wp-content/uploads/2025/09/logotipo-HotPink-scaled.png",
      website: "https://publifyer.com/"
    },
  ]

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'from-gray-300 via-gray-400 to-gray-600'
      case 'gold':
        return 'from-yellow-300 via-yellow-400 to-yellow-600'
      case 'silver':
        return 'from-gray-400 via-gray-300 to-gray-500'
      case 'Bronce':
        return 'from-amber-500 via-amber-600 to-amber-800'
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
      case 'Bronce':
        return 'Bronce Sponsor'
      default:
        return 'Sponsor'
    }
  }

  const getLogoSize = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'w-56 h-44' // 14rem x 11rem
      case 'gold':
        return 'w-48 h-36' // 12rem x 9rem
      case 'silver':
        return 'w-40 h-32' // 10rem x 8rem
      case 'Bronce':
        return 'w-32 h-24' // 8rem x 6rem
      default:
        return 'w-28 h-20'
    }
  }

  const getImageSize = (tier: string, sponsorName?: string) => {
    // Tamaño especial para la imagen de AWS
    if (sponsorName === "Amazon Web Services") {
      return 'max-w-32 max-h-24' // Imagen más pequeña
    }
    
    return 'max-w-full max-h-full' // Tamaño normal
  }

  const getCardSize = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'p-3 sm:p-4 md:p-5 lg:p-6'
      case 'gold':
        return 'p-4 sm:p-5 md:p-7 lg:p-9'
      case 'silver':
        return 'p-3 sm:p-4 md:p-5 lg:p-6'
      case 'Bronce':
        return 'p-2 sm:p-3 md:p-4 lg:p-5'
      default:
        return 'p-4'
    }
  }

  const getTextSize = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'text-sm sm:text-base md:text-lg lg:text-xl'
      case 'gold':
        return 'text-base sm:text-lg md:text-xl lg:text-2xl'
      case 'silver':
        return 'text-xs sm:text-sm md:text-base lg:text-lg'
      case 'Bronce':
        return 'text-xs sm:text-xs md:text-sm lg:text-base'
      default:
        return 'text-base'
    }
  }

  // Agrupar sponsors por tier
  const groupedSponsors = {
    platinum: sponsors.filter(s => s.tier === 'platinum'),
    gold: sponsors.filter(s => s.tier === 'gold'),
    silver: sponsors.filter(s => s.tier === 'silver'),
    Bronce: sponsors.filter(s => s.tier === 'Bronce')
  }

  // Función para verificar si una categoría tiene sponsors
  const hasSponsors = (tier: string) => {
    return groupedSponsors[tier as keyof typeof groupedSponsors]?.length > 0
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

        {/* Platinum Sponsors */}
        {hasSponsors('platinum') && (
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                  Platinum Sponsors
                </span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {groupedSponsors.platinum.map((sponsor) => (
                <div key={sponsor.id} className="group relative">
                  {/* Card Background with Gradient Border */}
                  <div className="relative p-1 rounded-2xl bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600">
                    <div className="relative bg-aws-dark-blue/90 backdrop-blur-xl rounded-2xl p-8 sm:p-10 overflow-hidden">
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-300 to-gray-600 animate-pulse"></div>
                      </div>
                      
                      {/* Sponsor Content */}
                      <div className="relative z-10 text-center">
                        {/* Logo Container with Glow Effect */}
                        <div className="relative mb-6">
                          <div className={`${getLogoSize(sponsor.tier)} mx-auto relative h-44 flex items-center justify-center`}>
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                            {/* Logo */}
                            <div className="relative bg-[rgb(255_255_255/87%)] backdrop-blur-sm rounded-2xl p-4 border border-white/20 group-hover:border-gray-400/60 transition-all duration-500 w-full h-full flex items-center justify-center">
                              <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className={`${getImageSize(sponsor.tier, sponsor.name)} object-contain group-hover:scale-110 transition-transform duration-500`}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Sponsor Info */}
                        <div className="flex flex-col justify-center">
                          <h3 className={`${getTextSize(sponsor.tier)} font-bold text-white mb-3 group-hover:text-gray-300 transition-colors duration-300 leading-tight line-clamp-2`}>
                            {sponsor.name}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-400 mb-6">
                            {getTierLabel(sponsor.tier)}
                          </p>
                        </div>

                        {/* Visit Button with Hover Effect */}
                        <a 
                          href={sponsor.website} 
                          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-300/20 to-gray-600/20 border border-gray-400/30 text-gray-300 hover:text-white hover:from-gray-300/30 hover:to-gray-600/30 transition-all duration-300 group-hover:scale-105"
                        >
                          <span>Visitar Sitio</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gold Sponsors */}
        {hasSponsors('gold') && (
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
                <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Gold Sponsors
                </span>
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {groupedSponsors.gold.map((sponsor) => (
                <div key={sponsor.id} className="group relative">
                  {/* Card Background with Gradient Border */}
                  <div className="relative p-1 rounded-xl bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600">
                    <div className="relative bg-aws-dark-blue/90 backdrop-blur-xl rounded-xl p-6 sm:p-8 overflow-hidden">
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-600 animate-pulse"></div>
                      </div>
                      
                      {/* Sponsor Content */}
                      <div className="relative z-10 text-center">
                        {/* Logo Container with Glow Effect */}
                        <div className="relative mb-6">
                          <div className={`${getLogoSize(sponsor.tier)} mx-auto relative h-36 flex items-center justify-center`}>
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                            {/* Logo */}
                            <div className="relative bg-[rgb(255_255_255/87%)] backdrop-blur-sm rounded-xl p-3 border border-white/20 group-hover:border-yellow-400/60 transition-all duration-500 w-full h-full flex items-center justify-center">
                              <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className={`${getImageSize(sponsor.tier, sponsor.name)} object-contain group-hover:scale-110 transition-transform duration-500`}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Sponsor Info */}
                        <div className="flex flex-col justify-center">
                          <h3 className={`${getTextSize(sponsor.tier)} font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300 leading-tight line-clamp-2`}>
                            {sponsor.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-400 mb-4">
                            {getTierLabel(sponsor.tier)}
                          </p>
                        </div>

                        {/* Visit Button with Hover Effect */}
                        <a 
                          href={sponsor.website} 
                          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-300/20 to-yellow-600/20 border border-yellow-400/30 text-yellow-300 hover:text-yellow-200 hover:from-yellow-300/30 hover:to-yellow-600/30 transition-all duration-300 group-hover:scale-105"
                        >
                          <span>Visitar Sitio</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {hasSponsors('silver') && (
          <div className="mb-10 sm:mb-12">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
                <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent">
                  Silver Sponsors
                </span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {groupedSponsors.silver.map((sponsor) => (
                <div key={sponsor.id} className="group relative">
                  {/* Card Background with Gradient Border */}
                  <div className="relative p-0.5 rounded-lg bg-gradient-to-br from-gray-400 via-gray-300 to-gray-500">
                    <div className="relative bg-aws-dark-blue/90 backdrop-blur-xl rounded-lg p-4 sm:p-6 overflow-hidden min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px]">
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 animate-pulse"></div>
                      </div>
                      
                      {/* Sponsor Content */}
                      <div className="relative z-10 text-center">
                        {/* Logo Container with Glow Effect */}
                        <div className="relative mb-4">
                          <div className={`${getLogoSize(sponsor.tier)} mx-auto relative h-32 flex items-center justify-center`}>
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 rounded-lg blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                            {/* Logo */}
                            <div className="relative bg-[rgb(255_255_255/87%)] backdrop-blur-sm rounded-lg p-2 border border-white/20 group-hover:border-gray-400/60 transition-all duration-500 w-full h-full flex items-center justify-center">
                              <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className={`${getImageSize(sponsor.tier, sponsor.name)} object-contain group-hover:scale-110 transition-transform duration-500`}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Sponsor Info */}
                        <div className="flex flex-col justify-center">
                          <h3 className={`${getTextSize(sponsor.tier)} font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300 leading-tight line-clamp-2`}>
                            {sponsor.name}
                          </h3>
                          <p className="text-xs text-gray-400 mb-3">
                            {getTierLabel(sponsor.tier)}
                          </p>
                        </div>

                        {/* Visit Button with Hover Effect */}
                        <a 
                          href={sponsor.website} 
                          className="inline-flex items-center space-x-1 px-3 py-2 rounded-full bg-gradient-to-r from-gray-400/20 to-gray-500/20 border border-gray-400/30 text-gray-300 hover:text-gray-200 hover:from-gray-400/30 hover:to-gray-500/30 transition-all duration-300 group-hover:scale-105"
                        >
                          <span>Visitar</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bronce Sponsors */}
        {hasSponsors('Bronce') && (
          <div className="mb-8 sm:mb-10">
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-800 bg-clip-text text-transparent">
                  Bronce Sponsors
                </span>
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-800 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {groupedSponsors.Bronce.map((sponsor) => (
                <div key={sponsor.id} className="group relative">
                  {/* Card Background with Gradient Border */}
                  <div className="relative p-0.5 rounded-lg bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800">
                    <div className="relative bg-aws-dark-blue/90 backdrop-blur-xl rounded-lg p-3 sm:p-4 overflow-hidden min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[220px]">
                      {/* Animated Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500 to-amber-800 animate-pulse"></div>
                      </div>
                      
                      {/* Sponsor Content */}
                      <div className="relative z-10 text-center">
                        {/* Logo Container with Glow Effect */}
                        <div className="relative mb-3">
                          <div className={`${getLogoSize(sponsor.tier)} mx-auto relative h-24 flex items-center justify-center`}>
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-800 rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                            {/* Logo */}
                            <div className="relative bg-[rgb(255_255_255/87%)] backdrop-blur-sm rounded-lg p-1 border border-white/20 group-hover:border-amber-500/60 transition-all duration-500 w-full h-full flex items-center justify-center">
                              <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className={`${getImageSize(sponsor.tier, sponsor.name)} object-contain group-hover:scale-110 transition-transform duration-500`}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Sponsor Info */}
                        <div className="flex flex-col justify-center">
                          <h3 className={`${getTextSize(sponsor.tier)} font-bold text-white mb-1 group-hover:text-amber-300 transition-colors duration-300 leading-tight line-clamp-2`}>
                            {sponsor.name}
                          </h3>
                          <p className="text-xs text-gray-400 mb-2">
                            {getTierLabel(sponsor.tier)}
                          </p>
                        </div>

                        {/* Visit Button with Hover Effect */}
                        <a 
                          href={sponsor.website} 
                          className="inline-flex items-center space-x-1 px-2 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-800/20 border border-amber-500/30 text-amber-400 hover:text-amber-300 hover:from-amber-500/30 hover:to-amber-800/30 transition-all duration-300 group-hover:scale-105"
                        >
                          <span>Visitar</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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