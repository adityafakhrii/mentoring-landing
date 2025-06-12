"use client"
import { useEffect, useState } from "react"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"

interface ScrollHeaderProps {
  children: React.ReactNode
}

export function ScrollHeader({ children }: ScrollHeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/50 backdrop-blur-lg border-b border-white/10" : "bg-transparent border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
