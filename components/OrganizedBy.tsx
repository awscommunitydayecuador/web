export default function OrganizedBy() {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Organizado por:
          </h3>
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
      </div>
    </section>
  )
}
