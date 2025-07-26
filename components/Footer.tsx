export default function Footer() {
  return (
    <footer className="bg-aws-dark-blue border-t border-gray-700 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo y descripción */}
          <div className="sm:col-span-2">
            <div className="mb-4 flex justify-center sm:justify-start">
              <img
                src="/logo-community-day.svg"
                alt="AWS Community Day Ecuador"
                className="h-10 sm:h-10 lg:h-12 w-auto"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-4 max-w-md leading-relaxed">
              El evento más importante de la comunidad AWS en Ecuador. 
              Conectando profesionales, compartiendo conocimiento y construyendo el futuro de la nube.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm sm:text-base text-gray-300 hover:text-[#f8991d] transition-colors">
                  Acerca del Evento
                </a>
              </li>
              <li>
                <a href="#speakers" className="text-sm sm:text-base text-gray-300 hover:text-[#f8991d] transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-sm sm:text-base text-gray-300 hover:text-[#f8991d] transition-colors">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#venue" className="text-sm sm:text-base text-gray-300 hover:text-[#f8991d] transition-colors">
                  Lugar
                </a>
              </li>
              <li>
                <a href="#community" className="text-sm sm:text-base text-gray-300 hover:text-[#f8991d] transition-colors">
                  Comunidad
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@awsugecuador.com" className="text-sm sm:text-base hover:text-[#f8991d] transition-colors break-all">
                  hello@awsugecuador.com
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm sm:text-base">Quito, Ecuador</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © 2025 AWS Community Day Ecuador. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-[#f8991d] transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-[#f8991d] transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-[#f8991d] transition-colors">
                Código de Conducta
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 