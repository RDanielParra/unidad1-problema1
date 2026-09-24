import { useState, type FormEvent } from 'react'
import '../styles/SearchBar.css'

interface SearchBarProps {
  handleBusqueda: (query: string) => void
}

export function SearchBar({ handleBusqueda }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmedValue = inputValue.trim()
    if (!trimmedValue) return

    handleBusqueda(trimmedValue)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <label htmlFor="gif-search" className="search-bar__label">
        Buscar GIFs
      </label>

      <div className="search-bar__controls">
        <input
          id="gif-search"
          type="text"
          className="search-bar__input"
          placeholder="Ej. cats, coding, anime..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="search-bar__button">
          Buscar
        </button>
      </div>
    </form>
  )
}