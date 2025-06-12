"use client"
import { useRef, useEffect, useState } from "react"
import type React from "react"

import { motion, useAnimation, useInView } from "framer-motion"

interface ScrollAnimationProps {
  children: React.ReactNode
  delay?: number
}

export function ScrollAnimation({ children, delay = 0 }: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      setHasAnimated(true)
    }
  }, [isInView, controls, hasAnimated])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: delay,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
