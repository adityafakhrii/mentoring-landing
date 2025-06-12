"use client"
import { useEffect, useState } from "react"

export function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#4c1d95] via-[#1e1b4b] to-black z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-purple-300 border-l-transparent animate-spin mb-4"></div>
        <h2 className="text-2xl font-bold text-slate-100 animate-pulse">Loading...</h2>
      </div>
    </div>
  )
}
