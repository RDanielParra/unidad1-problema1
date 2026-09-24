import { useState } from 'react'
import { useGifs } from '../hooks/useGifs'
import '../styles/GifExplorer.css'
import { GifGrid } from './GifGrid'
import { SearchBar } from './SearchBar'
import { SearchHistory } from './SearchHistory'

export function GifExplorer() {
  const [query, setQuery] = useState('')
  const [history, setHistory] = useState<string[]>(['cats', 'dogs', 'coding', 'pizza', 'dance'])

  const { gifs, loading, hasError } = useGifs(query)

  const handleBusqueda = (querydada: string) => {
    const trimmedQuery = querydada.trim()
    if (!trimmedQuery) return

    setQuery(trimmedQuery)

    setHistory((prevHistory) => {
      const filtered = prevHistory.filter(
        (term) => term.toLowerCase() !== trimmedQuery.toLowerCase()
      )
      return [trimmedQuery, ...filtered]
    })
  }

  return (
    <main className="gif-explorer">
      <header className="gif-explorer__header">
        <p className="gif-explorer__kicker">Giphy</p>
        <h1>Buscador de GIFs</h1>
        <p className="gif-explorer__subtitle">
          Escribe un término, revisa los resultados y conserva cada búsqueda.
        </p>
      </header>

      <SearchBar handleBusqueda={handleBusqueda} />
      
      <SearchHistory
        history={history}
        currentQuery={query}
        onSelectQuery={handleBusqueda}
      />

      <section className="gif-explorer__results" aria-label="Resultados">
        <div className="gif-explorer__results-header">
          <h2>Resultados para: {query}</h2>
          <p>{gifs.length} GIFs</p>
        </div>

        {loading && <p>Cargando...</p>}
        {hasError && <p>Hubo un error al cargar los GIFs.</p>}
        {!loading && !hasError && <GifGrid gifs={gifs} />}
      </section>
    </main>
  )
}