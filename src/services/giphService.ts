import { type Gif } from '../types/gif'

export const getGifs = async (query: string): Promise<Gif[]> => {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=2`)
  
  if (!response.ok) {
    throw new Error("Error en la petición a la API")
  }

  const data = await response.json()
  return data.data as Gif[]
}