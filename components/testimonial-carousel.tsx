"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, User } from "lucide-react"

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Junior Developer",
    company: "Tech Startup",
    content: "Program mentoring ini benar-benar mengubah cara saya memahami Laravel. Project wedding guest app yang dibangun sangat praktis dan bisa langsung dipakai untuk portfolio!",
    rating: 5,
  },
  {
    name: "Sari Dewi",
    role: "Fresh Graduate",
    company: "Universitas Indonesia",
    content: "Soft skill session-nya sangat membantu! CV saya jadi lebih menarik dan akhirnya diterima kerja di perusahaan impian. Worth it banget!",
    rating: 5,
  },
  {
    name: "Ahmad Rizki",
    role: "Freelancer",
    company: "Independent",
    content: "Mentornya sangat berpengalaman dan sabar. Materi CRUD + Midtrans integration sangat detail dan mudah dipahami. Recommended!",
    rating: 5,
  },
  {
    name: "Maya Putri",
    role: "Web Developer",
    company: "Digital Agency",
    content: "Project yang dibangun sangat real-world. Fitur kamera check-in dan QRIS payment benar-benar applicable untuk bisnis nyata. Great learning experience!",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-100 font-medium">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role} • {testimonial.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}