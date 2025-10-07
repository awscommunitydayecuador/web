export default function OrganizedBy() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            <span className="gradient-text">Organizado por</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-2">
            Este evento es posible gracias al apoyo y colaboración de instituciones y comunidades comprometidas con el desarrollo tecnológico en Ecuador.
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap">
          {/* Logo de la UDLA */}
          <div className="w-96 h-24 md:w-[19rem] md:h-28 mr-[5px]">
            <img
              src="/Logotipo-UDLA_rojo-y-blanco_1200x400V3.png"
              alt="Universidad de Las Américas - UDLA"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
          
          {/* Logos AWS */}
          <div className="flex items-center">
            {/* Logo AWS User Group Ecuador */}
            <div className="w-40 h-40 md:w-48 md:h-48">
              <img
                src="/logo-aws-ug-ecuador.svg"
                alt="AWS User Group Ecuador"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Logo AWS Women Ecuador */}
            <div className="w-40 h-40 md:w-48 md:h-48 ml-[18px]">
              <img
                src="/logo-aws-woman-ecuador.svg"
                alt="AWS Women Ecuador"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
