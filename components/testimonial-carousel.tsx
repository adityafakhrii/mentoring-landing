"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  content: string
  rating: number
}

const testimonials: (Testimonial & { ig: string })[] = [
  {
    id: 1,
    name: "Naufal Fadhiil",
    role: "Flutter Developer, Mahasiswa",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Mentoring ini sangat membantu saya memahami konsep pemrograman dengan lebih mendalam. Materinya jelas, aplikatif, dan langsung bisa diterapkan di project Flutter yang sedang saya kerjakan. Mentor selalu siap membimbing sampai benar-benar paham.",
    rating: 5,
    ig: "nopnau",
  },
  {
    id: 2,
    name: "Syaskia Ainiyyah",
    role: "Mahasiswa",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Saya jadi lebih percaya diri setelah ikut mentoring ini. Banyak insight baru tentang dunia kerja IT dan cara membangun portfolio yang menarik. Penjelasan mentor mudah dipahami dan sangat mendukung perkembangan saya.",
    rating: 5,
    ig: "ainiyyah__",
  },
  {
    id: 3,
    name: "Putri Syakira Wirdiani",
    role: "Mahasiswa",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Mentoring ini memberikan pengalaman belajar yang berbeda. Selain materi teknis, saya juga belajar soft skill yang penting untuk karir ke depan. Sangat direkomendasikan untuk mahasiswa yang ingin berkembang di bidang teknologi.",
    rating: 5,
    ig: "psyakira_w",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      <div className="overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden dark:bg-white/5 dark:backdrop-blur-sm dark:border-white/10 light:bg-white light:border-gray-200">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <Avatar className="h-16 w-16 border-2 border-purple-500/50">
                      <AvatarImage
                        src={testimonials[current].avatar || "/placeholder.svg"}
                        alt={testimonials[current].name}
                      />
                      <AvatarFallback className="bg-purple-600 text-white">
                        {testimonials[current].name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonials[current].rating ? "text-amber-400 fill-amber-400" : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-slate-300 dark:text-slate-300 light:text-gray-700 text-lg italic">
                      "{testimonials[current].content}"
                    </p>
                    <div>
                      <h4 className="text-slate-100 dark:text-slate-100 light:text-gray-900 font-semibold flex items-center gap-2">
                        {testimonials[current].name}
                        <span className="text-purple-400 dark:text-purple-400 light:text-purple-600">-</span>
                        <a
                          href={`https://instagram.com/${testimonials[current].ig}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-purple-400 hover:underline"
                        >
                          @{testimonials[current].ig}
                        </a>
                      </h4>
                      <p className="text-purple-400 dark:text-purple-400 light:text-purple-600">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="bg-white/10 border-white/20 text-slate-200 hover:bg-white/20 dark:bg-white/10 dark:border-white/20 dark:text-slate-200 dark:hover:bg-white/20 light:bg-white light:border-gray-200 light:text-gray-700 light:hover:bg-gray-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? "bg-purple-500 w-6" : "bg-white/30 dark:bg-white/30 light:bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="bg-white/10 border-white/20 text-slate-200 hover:bg-white/20 dark:bg-white/10 dark:border-white/20 dark:text-slate-200 dark:hover:bg-white/20 light:bg-white light:border-gray-200 light:text-gray-700 light:hover:bg-gray-100"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
