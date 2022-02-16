import { useEffect, useState } from "react"
import axios, { AxiosRequestConfig } from "axios"

const api = axios.create({
  baseURL: 'https://api.github.com/'
})

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    api.get(url, options)
      .then(response => {
        setData(response.data)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])

  return { data, isFetching }
}
