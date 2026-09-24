import '../styles/GifCard.css'
import { type Gif } from '../types/gif'

interface GifCardProps {
  gifDado: Gif
}

export function GifCard({ gifDado }: GifCardProps) {
  return (
    <article className="gif-card">
      <img
        className="gif-card__image"
        src={gifDado.images.original.url}
        alt={gifDado.title || 'GIF'}
      />
      <div className="gif-card__body">
        <h3 className="gif-card__title">{gifDado.title || 'Sin título'}</h3>
        <p className="gif-card__username">
          {gifDado.username ? `@${gifDado.username}` : 'Anónimo'}
        </p>
      </div>
    </article>
  )
}