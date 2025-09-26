'use client'
import { useMemo, useState } from 'react'
import sessionsData from '../data/sessions_with_speakers.json'

type Session = {
  SessionId: number
  Title: string
  Description: string
  Speakers: Array<{
    FirstName: string
    LastName: string
    TagLine: string
    Bio: string
    LinkedIn: string | number | null
    "Profile Picture": string
  }>
}

type ProcessedSession = {
  id: number
  start: string
  end: string
  title: string
  track?: string
  room?: string
  level?: string
  description?: string
  isTentative?: boolean
  speaker: {
    name: string
    role: string
    company: string
    image: string
    linkedin: string
    bio: string
  }
}

export default function Speakers() {
  const [activeRoom, setActiveRoom] = useState<string>('all')
  const [activeLevel, setActiveLevel] = useState<string>('all')
  const [activeStatus, setActiveStatus] = useState<string>('all')
  const [selectedSession, setSelectedSession] = useState<ProcessedSession | null>(null)
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false)

  // Funciones auxiliares para categorizar sesiones
  const getTrackFromTitle = (title: string): string => {
    const titleLower = title.toLowerCase()
    
    // AI & ML
    if (titleLower.includes('ai') || titleLower.includes('bedrock') || titleLower.includes('machine learning') || 
        titleLower.includes('inteligencia artificial') || titleLower.includes('agent') || titleLower.includes('chatbot') ||
        titleLower.includes('rag') || titleLower.includes('vector') || titleLower.includes('langgraph')) {
      return 'AI & ML'
    }
    
    // Security
    if (titleLower.includes('security') || titleLower.includes('waf') || titleLower.includes('zero trust') ||
        titleLower.includes('seguridad') || titleLower.includes('hack') || titleLower.includes('exploit') ||
        titleLower.includes('compliance') || titleLower.includes('gobernanza')) {
      return 'Security'
    }
    
    // Data & Analytics
    if (titleLower.includes('data') || titleLower.includes('warehouse') || titleLower.includes('analytics') ||
        titleLower.includes('datos') || titleLower.includes('glue') || titleLower.includes('athena') ||
        titleLower.includes('s3') || titleLower.includes('vector')) {
      return 'Data & Analytics'
    }
    
    // DevOps
    if (titleLower.includes('devops') || titleLower.includes('pipeline') || titleLower.includes('deploy') ||
        titleLower.includes('ci/cd') || titleLower.includes('automation') || titleLower.includes('eks') ||
        titleLower.includes('kubernetes') || titleLower.includes('terraform')) {
      return 'DevOps'
    }
    
    // Architecture
    if (titleLower.includes('serverless') || titleLower.includes('lambda') || titleLower.includes('architecture') ||
        titleLower.includes('arquitectura') || titleLower.includes('fargate') || titleLower.includes('eventbridge') ||
        titleLower.includes('microservices') || titleLower.includes('scalability')) {
      return 'Architecture'
    }
    
    // FinOps
    if (titleLower.includes('finops') || titleLower.includes('cost') || titleLower.includes('optimization') ||
        titleLower.includes('costo') || titleLower.includes('optimización') || titleLower.includes('focus')) {
      return 'FinOps'
    }
    
    return 'General'
  }

  const getLevelFromTitle = (title: string): string => {
    const titleLower = title.toLowerCase()
    
    // Avanzado - temas complejos
    if (titleLower.includes('advanced') || titleLower.includes('enterprise') || titleLower.includes('production') ||
        titleLower.includes('security') || titleLower.includes('hack') || titleLower.includes('exploit') ||
        titleLower.includes('multi-agent') || titleLower.includes('langgraph') || titleLower.includes('zero trust') ||
        titleLower.includes('gobernanza') || titleLower.includes('compliance') || titleLower.includes('finops')) {
      return 'Avanzado'
    }
    
    // Intermedio - temas técnicos pero accesibles
    if (titleLower.includes('architecture') || titleLower.includes('platform') || titleLower.includes('optimization') ||
        titleLower.includes('automation') || titleLower.includes('devops') || titleLower.includes('pipeline') ||
        titleLower.includes('bedrock') || titleLower.includes('lambda') || titleLower.includes('eks') ||
        titleLower.includes('data') || titleLower.includes('warehouse') || titleLower.includes('analytics')) {
      return 'Intermedio'
    }
    
    // Principiante - temas introductorios
    return 'Principiante'
  }

  const getRoomFromTitle = (title: string, index: number): string => {
    const rooms = ['Auditorio Principal', 'Sala 1', 'Sala 2', 'Sala 3', 'Sala 4', 'Sala 5']
    
    // Asignar salas basándose en el tipo de contenido
    const titleLower = title.toLowerCase()
    
    // Auditorio Principal para temas importantes
    if (titleLower.includes('keynote') || titleLower.includes('opening') || titleLower.includes('closing') ||
        titleLower.includes('networking') || titleLower.includes('workshop') || index < 3) {
      return 'Auditorio Principal'
    }
    
    // Distribuir el resto en las salas
    return rooms[(index % 5) + 1] // Sala 1-5
  }

  const extractCompanyFromTagLine = (tagLine: string): string => {
    // Si el TagLine contiene "|", tomar la primera parte antes del primer "|"
    if (tagLine.includes('|')) {
      return tagLine.split('|')[0].trim()
    }
    
    // Si contiene comas, tomar la primera parte antes de la primera coma
    if (tagLine.includes(',')) {
      return tagLine.split(',')[0].trim()
    }
    
    // Si no contiene separadores, usar todo el TagLine
    return tagLine.trim() || 'Speaker'
  }

  // Procesar datos del JSON - mostrar TODOS los speakers
  const sessions: ProcessedSession[] = useMemo(() => {
    return sessionsData.map((session, index) => {
      const speaker = session.Speakers[0] // Tomar el primer speaker
      return {
        id: session.SessionId,
        start: '',
        end: '',
        title: session.Title,
        track: getTrackFromTitle(session.Title),
        room: getRoomFromTitle(session.Title, index),
        level: getLevelFromTitle(session.Title),
        description: '',
        isTentative: true,
        speaker: {
          name: `${speaker.FirstName} ${speaker.LastName}`,
          role: speaker.TagLine,
          company: extractCompanyFromTagLine(speaker.TagLine),
          image: speaker["Profile Picture"],
          linkedin: speaker.LinkedIn && typeof speaker.LinkedIn === 'string' ? speaker.LinkedIn : '#',
          bio: speaker.Bio
        }
      }
    })
  }, [])

  // Filtrar sesiones
  const filteredSessions = useMemo(() => {
    return sessions.filter(session => {
      const roomMatch = activeRoom === 'all' || session.room === activeRoom
      const levelMatch = activeLevel === 'all' || session.level === activeLevel
      const statusMatch = activeStatus === 'all' || 
        (activeStatus === 'confirmed' && !session.isTentative) ||
        (activeStatus === 'tentative' && session.isTentative)
      return roomMatch && levelMatch && statusMatch
    })
  }, [sessions, activeRoom, activeLevel, activeStatus])

  // Obtener opciones únicas
  const rooms = useMemo(() => {
    const uniqueRooms = Array.from(new Set(sessions.map(s => s.room).filter(Boolean)))
    return ['all', ...uniqueRooms]
  }, [sessions])

  const levels = useMemo(() => {
    const uniqueLevels = Array.from(new Set(sessions.map(s => s.level).filter(Boolean)))
    return ['all', ...uniqueLevels]
  }, [sessions])

  return (
    <section id="speakers" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            <span className="gradient-text">Agenda del Evento</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-2">
            Horarios, temas y speakers del AWS Community Day Ecuador 2025
          </p>
        </div>

        {/* Filtros Modernos */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-aws-dark-blue/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Filtro de Salones */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#f8991d]/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#f8991d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Salones</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {rooms.map((room) => (
                    <button
                      key={room}
                      onClick={() => setActiveRoom(room || 'all')}
                      className={`group relative px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                        activeRoom === room
                          ? 'bg-gradient-to-r from-[#f8991d] to-[#f8991d]/80 text-white shadow-lg shadow-[#f8991d]/25'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
                      }`}
                    >
                      <span className="relative z-10">{room === 'all' ? 'Todos' : room}</span>
                      {activeRoom === room && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#f8991d]/20 to-transparent"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtro de Niveles */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Nivel</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setActiveLevel(level || 'all')}
                      className={`group relative px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                        activeLevel === level
                          ? 'bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-lg shadow-blue-500/25'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
                      }`}
                    >
                      <span className="relative z-10">{level === 'all' ? 'Todos' : level}</span>
                      {activeLevel === level && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contador de resultados */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#f8991d]"></div>
                  <span className="text-sm text-gray-300">
                    {filteredSessions.length} sesión{filteredSessions.length !== 1 ? 'es' : ''} encontrada{filteredSessions.length !== 1 ? 's' : ''}
                  </span>
                </div>
                {(activeRoom !== 'all' || activeLevel !== 'all') && (
                  <button
                    onClick={() => {
                      setActiveRoom('all')
                      setActiveLevel('all')
                    }}
                    className="text-xs text-gray-400 hover:text-white transition-colors underline"
                  >
                    Limpiar filtros
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Speakers - Dos Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSessions.map((s) => (
            <div key={s.id} className="group">
              <div className="bg-aws-dark-blue/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 h-full">
                {/* Header con badges */}
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  <span className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border ${
                    s.isTentative 
                      ? 'bg-amber-500/10 text-amber-300 border-amber-400/20' 
                      : 'bg-[#f8991d]/10 text-[#f8991d] border-[#f8991d]/20'
                  }`}>
                    {s.isTentative ? (
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Horario: Próximamente
                      </span>
                    ) : (
                      `${s.start} - ${s.end}`
                    )}
                  </span>
                  {s.track && (
                    <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20">
                      {s.track}
                    </span>
                  )}
                  {s.level && (
                    <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-400/20">
                      {s.level}
                    </span>
                  )}
                </div>

                {/* Título de la sesión */}
                <h3 className="text-xl font-bold text-white leading-tight mb-4 group-hover:text-[#f8991d] transition-colors">
                  {s.title}
                </h3>

                {/* Información de la sala */}
                {s.room && (
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-sm text-emerald-300">{s.room}</span>
                  </div>
                )}

                {/* Speaker(s) */}
                <div className="space-y-3">
                  {/* Verificar si hay múltiples speakers en la sesión original */}
                  {sessionsData.find(session => session.SessionId === s.id)?.Speakers.map((speaker, speakerIndex) => {
                    const speakerName = `${speaker.FirstName} ${speaker.LastName}`
                    const speakerRole = speaker.TagLine
                    const speakerCompany = extractCompanyFromTagLine(speaker.TagLine)
                    const speakerImage = speaker["Profile Picture"]
                    const speakerLinkedin = speaker.LinkedIn && typeof speaker.LinkedIn === 'string' ? speaker.LinkedIn : '#'
                    const speakerBio = speaker.Bio

                    return (
                      <div key={speakerIndex} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                        <img 
                          src={speakerImage} 
                          alt={speakerName}
                          className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white truncate">{speakerName}</h4>
                          <p className="text-sm text-gray-300 truncate">{speakerRole}</p>
                          <p className="text-xs text-gray-400 truncate">{speakerCompany}</p>
                        </div>
                        <div className="flex gap-2">
                          <a 
                            href={speakerLinkedin} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-white/15 text-gray-200 hover:text-white hover:border-white/30 bg-white/5 hover:bg-white/10 transition-colors"
                            aria-label={`LinkedIn de ${speakerName}`}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                          <button
                            onClick={() => setSelectedSession({
                              ...s,
                              speaker: {
                                name: speakerName,
                                role: speakerRole,
                                company: speakerCompany,
                                image: speakerImage,
                                linkedin: speakerLinkedin,
                                bio: speakerBio
                              }
                            })}
                            className="p-2 rounded-lg border border-[#f8991d]/30 text-[#f8991d] hover:text-white hover:border-[#f8991d]/50 bg-[#f8991d]/10 hover:bg-[#f8991d]/20 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de información detallada */}
      {selectedSession && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-aws-dark-blue/95 backdrop-blur-xl border border-white/20 rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              {/* Header del modal */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={selectedSession.speaker.image} 
                    alt={selectedSession.speaker.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">{selectedSession.speaker.name}</h3>
                    <p className="text-[#f8991d] text-sm">{selectedSession.speaker.role}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedSession(null)
                    setShowFullDescription(false)
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Información del speaker */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-white mb-2">Sobre el Speaker</h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {selectedSession.speaker.bio && selectedSession.speaker.bio.length > 350 
                    ? `${selectedSession.speaker.bio.substring(0, 350)}...` 
                    : selectedSession.speaker.bio || 'Sin biografía disponible'
                  }
                </p>
              </div>

              {/* Acciones */}
              <div className="flex gap-2">
                <a 
                  href={selectedSession.speaker.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <button
                  onClick={() => {
                    setSelectedSession(null)
                    setShowFullDescription(false)
                  }}
                  className="px-3 py-2 rounded-lg border border-[#f8991d]/30 text-[#f8991d] hover:bg-[#f8991d]/10 transition-colors text-sm"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 