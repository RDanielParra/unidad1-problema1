import '../styles/GifGrid.css'
import { type Gif } from '../types/gif'
import { GifCard } from './GifCard'

interface GifGridProps {
  gifs: Gif[]
}

export function GifGrid({ gifs }: GifGridProps) {
  return (
    <ul className="gif-grid">
      {gifs.map(gif => (
        <li key={gif.id}>
          <GifCard gifDado={gif} />
        </li>
      ))}
    </ul>
  )
}