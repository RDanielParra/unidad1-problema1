import '../styles/SearchChip.css'

interface SearchChipProps {
  term: string
  isActive?: boolean
  onClick: (term: string) => void
}

export function SearchChip({ term, isActive = false, onClick }: SearchChipProps) {
  return (
    <button
      className={`search-chip ${isActive ? 'search-chip--active' : ''}`}
      type="button"
      aria-current={isActive ? 'true' : undefined}
      onClick={() => onClick(term)}
    >
      {term}
    </button>
  )
}