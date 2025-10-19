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
  speakers: Array<{
    name: string
    role: string
    company: string
    image: string
    linkedin: string
    bio: string
  }>
}

export default function Speakers() {
  const [activeRoom, setActiveRoom] = useState<string>('all')
  const [activeLevel, setActiveLevel] = useState<string>('all')
  const [selectedSession, setSelectedSession] = useState<ProcessedSession | null>(null)


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

  // Función para convertir tiempo a minutos para ordenamiento
  const timeToMinutes = (timeStr: string): number => {
    if (!timeStr || timeStr === '') return 0
    const [hours, minutes] = timeStr.split(':').map(Number)
    return hours * 60 + (minutes || 0)
  }

  // Procesar datos del JSON - mostrar TODOS los speakers ordenados por horario
  const sessions: ProcessedSession[] = useMemo(() => {
    return sessionsData
      .sort((a, b) => {
        const timeA = timeToMinutes(a.Desde || '')
        const timeB = timeToMinutes(b.Desde || '')
        return timeA - timeB
      })
      .map((session, index) => {
        return {
          id: session.SessionId,
          start: session.Desde || '',
          end: session.Hasta || '',
          title: session.Title,
          track: session.Category || 'General',
          room: session.Room || 'Por definir',
          level: session.Level || 'All',
          description: '',
          speakers: session.Speakers.map(speaker => ({
            name: `${speaker.FirstName} ${speaker.LastName}`,
            role: speaker.TagLine,
            company: extractCompanyFromTagLine(speaker.TagLine),
            image: speaker["Profile Picture"],
            linkedin: speaker.LinkedIn && typeof speaker.LinkedIn === 'string' ? speaker.LinkedIn : '#',
            bio: speaker.Bio
          }))
        }
      })
  }, [])

  // Filtrar sesiones
  const filteredSessions = useMemo(() => {
    return sessions.filter(session => {
      const roomMatch = activeRoom === 'all' || session.room === activeRoom
      const levelMatch = activeLevel === 'all' || session.level === activeLevel
      return roomMatch && levelMatch
    })
  }, [sessions, activeRoom, activeLevel])

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

        {/* Filtros Básicos */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {/* Filtro de Salones */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-300 whitespace-nowrap">Salón:</span>
                <select
                  value={activeRoom}
                  onChange={(e) => setActiveRoom(e.target.value)}
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#f8991d]/50 focus:border-[#f8991d]"
                >
                  {rooms.map((room) => (
                    <option key={room} value={room} className="bg-gray-800 text-white">
                      {room === 'all' ? 'Todos' : room}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtro de Niveles */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-300 whitespace-nowrap">Nivel:</span>
                <select
                  value={activeLevel}
                  onChange={(e) => setActiveLevel(e.target.value)}
                  className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                >
                  {levels.map((level) => (
                    <option key={level} value={level} className="bg-gray-800 text-white">
                      {level === 'all' ? 'Todos' : level}
                    </option>
                  ))}
                </select>
              </div>

              {/* Contador de resultados */}
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[#f8991d]"></div>
                <span>
                  {filteredSessions.length} sesión{filteredSessions.length !== 1 ? 'es' : ''}
                </span>
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
                  <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border bg-[#f8991d]/10 text-[#f8991d] border-[#f8991d]/20">
                    {s.start} - {s.end}
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

                {/* Speakers */}
                <div className="space-y-3">
                  {s.speakers.map((speaker, speakerIndex) => (
                    speaker.name !== ' ' && (
                      <div key={speakerIndex} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                        <img 
                          src={speaker.image} 
                          alt={speaker.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white truncate">{speaker.name}</h4>
                          <p className="text-sm text-gray-300 truncate">{speaker.role}</p>
                        </div>
                        <div className="flex gap-2">
                          <a 
                            href={speaker.linkedin} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-white/15 text-gray-200 hover:text-white hover:border-white/30 bg-white/5 hover:bg-white/10 transition-colors"
                            aria-label={`LinkedIn de ${speaker.name}`}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                          <button
                            onClick={() => setSelectedSession({
                              ...s,
                              speakers: [speaker]
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
                  ))}
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
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{selectedSession.title}</h3>
                  <p className="text-[#f8991d] text-sm">{selectedSession.start} - {selectedSession.end}</p>
                </div>
                <button
                  onClick={() => setSelectedSession(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Speakers */}
              <div className="space-y-4">
                {selectedSession.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{speaker.name}</h4>
                      <p className="text-[#f8991d] text-sm mb-2">{speaker.role}</p>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {speaker.bio && speaker.bio.length > 200 
                          ? `${speaker.bio.substring(0, 200)}...` 
                          : speaker.bio || 'Sin biografía disponible'
                        }
                      </p>
                      <a 
                        href={speaker.linkedin} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors text-sm"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón cerrar */}
              <div className="mt-6">
                <button
                  onClick={() => setSelectedSession(null)}
                  className="w-full px-4 py-2 rounded-lg border border-[#f8991d]/30 text-[#f8991d] hover:bg-[#f8991d]/10 transition-colors"
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