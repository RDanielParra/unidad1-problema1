import '../styles/SearchHistory.css'
import { SearchChip } from './SearchChip'

interface SearchHistoryProps {
  history: string[]
  currentQuery: string
  onSelectQuery: (term: string) => void
}

export function SearchHistory({ history, currentQuery, onSelectQuery }: SearchHistoryProps) {
  if (history.length === 0) return null

  return (
    <section className="search-history" aria-label="Búsquedas realizadas">
      <h2 className="search-history__title">Búsquedas</h2>
      <ul className="search-history__list">
        {history.map((term) => (
          <li key={term}>
            <SearchChip
              term={term}
              isActive={term.toLowerCase() === currentQuery.toLowerCase()}
              onClick={onSelectQuery}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}