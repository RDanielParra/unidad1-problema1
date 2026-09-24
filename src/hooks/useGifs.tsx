import { useEffect, useState } from "react"
import { getGifs } from "../services/giphService"
import { type Gif } from "../types/gif"

export const useGifs = (query: string) => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query) return

    const getgiphys = async () => {
      try {
        setLoading(true)
        setHasError(false)
        const response = await getGifs(query)
        setGifs(response)
      } catch (error) {
        setHasError(true)
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    getgiphys()
  }, [query])

  return { gifs, hasError, loading }
}