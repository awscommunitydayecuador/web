import { getCommunities } from '../utils/siteData'

export default function Community() {
  const communities = getCommunities()
  const awsUserGroup = communities.awsUserGroup
  const awsWomen = communities.awsWomen

  return (
    <section id="community" className="py-24 px-4 relative overflow-hidden">
  {/* Background decoration */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-bold mb-8">
        <span className="gradient-text">Únete a la Comunidad</span>
      </h2>
      <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
        Forma parte de las comunidades AWS en Ecuador y conecta con personas apasionadas por la tecnología cloud, la innovación y el aprendizaje colaborativo.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Logos y descripción */}
      <div className="text-center lg:text-left">
        <div className="flex justify-center lg:justify-start items-center gap-8 mb-8 relative">
          <div className="relative w-40 h-40">
            <img
              src={awsUserGroup.logo}
              alt={awsUserGroup.name}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-0 w-40 h-40 bg-amber-500/20 blur-2xl rounded-full"></div>
          </div>
          <div className="relative w-40 h-40">
            <img
              src={awsWomen.logo}
              alt={awsWomen.name}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-0 w-40 h-40 bg-pink-500/20 blur-2xl rounded-full"></div>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-white mb-6">
          Comunidades AWS en Ecuador
        </h3>
        
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Somos comunidades vibrantes de profesionales, entusiastas y expertos en AWS que comparten conocimiento, experiencias y buenas prácticas. Nuestro objetivo es fomentar el aprendizaje continuo y construir conexiones duraderas dentro del ecosistema cloud en Ecuador.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-300">Más de 1000+ miembros activos</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-300">Eventos mensuales y meetups</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-300">Recursos y contenido exclusivo</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-300">Networking con expertos de la industria</span>
          </div>
        </div>
      </div>

      {/* Redes sociales y estadísticas */}
      <div className="flex flex-col justify-center space-y-8">
        {/* Redes sociales AWS User Group Ecuador */}
        <div className="card">
          <h4 className="text-lg font-semibold text-white mb-4 text-center">
           {awsUserGroup.name}
          </h4>
          <div className="grid grid-cols-4 gap-4 justify-center">
            <a href={awsUserGroup.socialMedia.instagram.url} className="flex flex-col items-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <svg className={`w-6 h-6 mb-1 ${awsUserGroup.socialMedia.instagram.color}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-xs text-gray-300">{awsUserGroup.socialMedia.instagram.handle}</span>
            </a>

            <a href={awsUserGroup.socialMedia.linkedin.url} className="flex flex-col items-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <svg className={`w-6 h-6 mb-1 ${awsUserGroup.socialMedia.linkedin.color}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-xs text-gray-300">{awsUserGroup.socialMedia.linkedin.handle}</span>
            </a>

            <a href={awsUserGroup.socialMedia.facebook.url} className="flex flex-col items-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <svg className={`w-6 h-6 mb-1 ${awsUserGroup.socialMedia.facebook.color}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .592 0 1.323v21.354C0 23.408.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.142v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.765v2.314h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.324-.592 1.324-1.323V1.323C24 .592 23.404 0 22.675 0z"/>
              </svg>
              <span className="text-xs text-gray-300">{awsUserGroup.socialMedia.facebook.handle}</span>
            </a>

            <a href={awsUserGroup.socialMedia.website.url} className="flex flex-col items-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
            <svg
              className={`w-6 h-6 mb-1 ${awsUserGroup.socialMedia.website.color}`}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="text-xs text-gray-300">{awsUserGroup.socialMedia.website.handle}</span>
            </a>
          </div>
        </div>
        
        {/* Redes sociales AWS Women Ecuador */}
        <div className="card">
          <h4 className="text-lg font-semibold text-white mb-4 text-center">
           {awsWomen.name}
          </h4>
          <div className="grid grid-cols-4 gap-4 justify-center">
            <a href={awsWomen.socialMedia.instagram.url} className="flex flex-col items-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <svg className={`w-6 h-6 mb-1 ${awsWomen.socialMedia.instagram.color}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-xs text-gray-300">{awsWomen.socialMedia.instagram.handle}</span>
            </a>

            <a href={awsWomen.socialMedia.linkedin.url} className="flex flex-col items-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <svg className={`w-6 h-6 mb-1 ${awsWomen.socialMedia.linkedin.color}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-xs text-gray-300">{awsWomen.socialMedia.linkedin.handle}</span>
            </a>

            <a href={awsWomen.socialMedia.facebook.url} className="flex flex-col items-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <svg className={`w-6 h-6 mb-1 ${awsWomen.socialMedia.facebook.color}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .592 0 1.323v21.354C0 23.408.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.142v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.765v2.314h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.324-.592 1.324-1.323V1.323C24 .592 23.404 0 22.675 0z"/>
              </svg>
              <span className="text-xs text-gray-300">{awsWomen.socialMedia.facebook.handle}</span>
            </a>

            <a href={awsWomen.socialMedia.website.url} className="flex flex-col items-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
              <svg className={`w-6 h-6 mb-1 ${awsWomen.socialMedia.website.color}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <span className="text-xs text-gray-300">{awsWomen.socialMedia.website.handle}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
} 