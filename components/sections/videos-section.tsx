"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { VIDEOS, getYouTubeEmbedUrl } from "@/lib/constants"

export function VideosSection() {
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(false)

  if (VIDEOS.length === 0) return null

  const video = VIDEOS[current]
  const embedUrl = getYouTubeEmbedUrl(video.youtubeUrl)

  const prev = () => {
    setPlaying(false)
    setCurrent((i) => (i - 1 + VIDEOS.length) % VIDEOS.length)
  }
  const next = () => {
    setPlaying(false)
    setCurrent((i) => (i + 1) % VIDEOS.length)
  }
  const goTo = (i: number) => {
    setPlaying(false)
    setCurrent(i)
  }

  return (
    <section id="videos" className="py-16 bg-foreground/[0.03] relative overflow-hidden">

      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">

        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-3 border border-primary/20">
            🎬 Míranos en acción
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-3">
            Nuestros <span className="text-gradient-primary">Videos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Conoce de cerca cómo preparamos los tacos y lo que opinan nuestros clientes.
          </p>
        </div>

        {/* Carrusel */}
        <div className="max-w-4xl mx-auto">

          {/* Video principal */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 bg-black aspect-video">
            {playing ? (
              <iframe
                key={video.id}
                src={`${embedUrl}?autoplay=1&rel=0&modestbranding=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              /* Thumbnail / placeholder antes de reproducir */
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-accent/10 relative">
                {/* Thumbnail de YouTube */}
                <img
                  src={`https://img.youtube.com/vi/${embedUrl.split("/embed/")[1]?.split("?")[0]}/hqdefault.jpg`}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                />
                <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
                  <button
                    onClick={() => setPlaying(true)}
                    aria-label="Reproducir video"
                    className="w-20 h-20 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-200"
                  >
                    <Play size={32} className="ml-1" fill="white" />
                  </button>
                  <div className="bg-background/80 backdrop-blur-sm rounded-2xl px-5 py-3">
                    <p className="font-heading font-bold text-foreground text-lg leading-tight">{video.title}</p>
                    {video.description && (
                      <p className="text-muted-foreground text-sm mt-1">{video.description}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Flechas de navegación sobre el video */}
            {VIDEOS.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Video anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 z-20"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  aria-label="Video siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-200 z-20"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Info del video activo */}
          {!playing && (
            <div className="mt-5 text-center">
              <p className="font-heading font-semibold text-lg text-foreground">{video.title}</p>
              {video.description && (
                <p className="text-muted-foreground text-sm mt-1">{video.description}</p>
              )}
            </div>
          )}

          {/* Thumbnails / dots de navegación */}
          {VIDEOS.length > 1 && (
            <div className="mt-6 flex items-center justify-center gap-3">
              {VIDEOS.map((v, i) => (
                <button
                  key={v.id}
                  onClick={() => goTo(i)}
                  aria-label={`Ver video ${i + 1}`}
                  className={`transition-all duration-200 rounded-full ${
                    i === current
                      ? "w-8 h-3 bg-primary"
                      : "w-3 h-3 bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Lista de videos (miniaturas en desktop) */}
          {VIDEOS.length > 1 && (
            <div className="mt-8 hidden md:grid grid-cols-3 gap-4">
              {VIDEOS.map((v, i) => (
                <button
                  key={v.id}
                  onClick={() => goTo(i)}
                  className={`text-left rounded-2xl p-4 border transition-all duration-200 ${
                    i === current
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border bg-card hover:border-primary/50 hover:bg-primary/5"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      i === current ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      <Play size={12} fill="currentColor" className="ml-0.5" />
                    </div>
                    <span className={`text-xs font-semibold uppercase tracking-wide ${
                      i === current ? "text-primary" : "text-muted-foreground"
                    }`}>
                      Video {i + 1}
                    </span>
                  </div>
                  <p className="font-medium text-sm text-foreground leading-tight line-clamp-2">
                    {v.title}
                  </p>
                </button>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
