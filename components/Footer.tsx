export default function Footer() {
  return (
    <footer className="bg-aws-dark-blue border-t border-gray-700 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="/logo-community-day.svg"
                alt="AWS Community Day Ecuador"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              El evento más importante de la comunidad AWS en Ecuador. 
              Conectando profesionales, compartiendo conocimiento y construyendo el futuro de la nube.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-aws-orange transition-colors">
                  Acerca del Evento
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-300 hover:text-aws-orange transition-colors">
                  Agenda
                </a>
              </li>
              <li>
                <a href="#speakers" className="text-gray-300 hover:text-aws-orange transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-gray-300 hover:text-aws-orange transition-colors">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#venue" className="text-gray-300 hover:text-aws-orange transition-colors">
                  Lugar
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-aws-orange transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@awsugecuador.com" className="hover:text-aws-orange transition-colors">
                  hello@awsugecuador.com
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Quito, Ecuador
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 AWS Community Day Ecuador. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-aws-orange text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-aws-orange text-sm transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-aws-orange text-sm transition-colors">
                Código de Conducta
              </a>
            </div>
          </div>
        </div>

        {/* Créditos */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-500 text-sm">
            Desarrollado con ❤️ por la comunidad AWS Ecuador
          </p>
        </div>
      </div>
    </footer>
  )
} 