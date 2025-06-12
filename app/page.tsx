"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ParticleAnimation } from "@/components/particle-animation"
import { ScrollHeader } from "@/components/scroll-header"
import { MobileMenu } from "@/components/mobile-menu"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { FaqAccordion } from "@/components/faq-accordion"
import { ScrollAnimation } from "@/components/scroll-animation"
import { LoadingAnimation } from "@/components/loading-animation"
import {
  Calendar,
  Clock,
  Users,
  DollarSign,
  CheckCircle,
  MessageCircle,
  Video,
  Target,
  Code,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  Sparkles,
} from "lucide-react"

const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 6-12 12" />
    <path d="m6 6 12 12" />
  </svg>
)

const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#target", label: "Target" },
  { href: "#timeline", label: "Timeline" },
  { href: "#project", label: "Project" },
  { href: "#mentor", label: "Mentor" },
  { href: "#pricing", label: "Pricing" },
]

export default function MentoringLandingPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    // Add smooth scrolling
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const element = document.querySelector(target.getAttribute("href") || "")
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    document.addEventListener("click", handleSmoothScroll)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("click", handleSmoothScroll)
    }
  }, [])

  return (
    <>
      <LoadingAnimation />
      <ParticleAnimation />
      <div className="min-h-screen bg-gradient-to-br from-[#4c1d95] via-[#1e1b4b] to-black dark:bg-gradient-to-br dark:from-[#4c1d95] dark:via-[#1e1b4b] dark:to-black light:bg-gradient-to-br light:from-gray-50 light:via-white light:to-gray-100 relative z-10">
        {/* Background Pattern */}
        <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] light:bg-[url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.02'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none z-5"></div>

        {/* Navigation */}
        <ScrollHeader>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                
                <GraduationCap className="h-7 w-7 text-white" />
                <span className="text-xl font-semibold text-slate-100 dark:text-slate-100 light:text-gray-900">
                  Mentoring with Aditya
                </span>
              </div>

              <div className="hidden md:flex items-center space-x-6">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-slate-300 hover:text-purple-300 dark:text-slate-300 dark:hover:text-purple-300 light:text-gray-700 light:hover:text-purple-600 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0 shadow-lg"
                >
                  <a href="https://forms.gle/tnANAsCzMpc7M5cd7" target="_blank" rel="noopener noreferrer">
                    Daftar Sekarang
                  </a>
                </Button>
                <MobileMenu links={navigationLinks} />
              </div>
            </div>
          </div>
        </ScrollHeader>

        {/* Hero Section */}
        <section id="home" className="relative py-20 overflow-hidden min-h-screen flex items-center">
          {/* Particle background for hero */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <ParticleAnimation />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#4c1d95]/30 to-black/30" style={{ zIndex: 2 }}></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ zIndex: 3 }}>
            <ScrollAnimation>
              <Badge className="mb-4 bg-gradient-to-r from-purple-600/20 to-violet-600/20 text-purple-200 border-purple-500/30 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-violet-600/20 dark:bg-gradient-to-r dark:from-purple-600/20 dark:to-violet-600/20 dark:text-purple-200 dark:border-purple-500/30 light:bg-purple-100 light:text-purple-800 light:border-purple-200">
                🎓 Batch 1 - Pendaftaran Terbuka
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 via-purple-200 to-violet-200 bg-clip-text text-transparent mb-6 dark:from-slate-100 dark:via-purple-200 dark:to-violet-200 light:from-gray-900 light:via-purple-700 light:to-violet-700">
                Laravel, Soft Skill, & Private Intensive Mentoring
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed dark:text-slate-300 light:text-gray-700">
                Mentoring singkat tapi berdampak. Dirancang untuk bantu web developer pemula membangun{" "}
                <em className="text-purple-300 dark:text-purple-300 light:text-purple-700">real project</em> Laravel
                sekaligus upgrade soft skill biar gak cuma jago ngoding, tapi juga{" "}
                <em className="text-purple-300 dark:text-purple-300 light:text-purple-700">siap tempur</em> di dunia
                kerja.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center justify-center space-x-2 text-slate-300 bg-white/5 rounded-lg p-3 backdrop-blur-sm border border-white/10 dark:text-slate-300 dark:bg-white/5 light:text-gray-700 light:bg-white/80 light:backdrop-blur-sm light:border-gray-200">
                  <Calendar className="h-5 w-5 text-purple-400 dark:text-purple-400 light:text-purple-600" />
                  <span className="font-medium">2 minggu</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-slate-300 bg-white/5 rounded-lg p-3 backdrop-blur-sm border border-white/10 dark:text-slate-300 dark:bg-white/5 light:text-gray-700 light:bg-white/80 light:backdrop-blur-sm light:border-gray-200">
                  <Video className="h-5 w-5 text-purple-400 dark:text-purple-400 light:text-purple-600" />
                  <span className="font-medium">4 sesi live</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-slate-300 bg-white/5 rounded-lg p-3 backdrop-blur-sm border border-white/10 dark:text-slate-300 dark:bg-white/5 light:text-gray-700 light:bg-white/80 light:backdrop-blur-sm light:border-gray-200">
                  <Users className="h-5 w-5 text-purple-400 dark:text-purple-400 light:text-purple-600" />
                  <span className="font-medium">Maks. 20 peserta</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-slate-300 bg-white/5 rounded-lg p-3 backdrop-blur-sm border border-white/10 dark:text-slate-300 dark:bg-white/5 light:text-gray-700 light:bg-white/80 light:backdrop-blur-sm light:border-gray-200">
                  <DollarSign className="h-5 w-5 text-purple-400 dark:text-purple-400 light:text-purple-600" />
                  <span className="font-medium">Rp149.000</span>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white font-bold text-lg px-8 border-0 shadow-lg"
                >
                  <a href="https://forms.gle/tnANAsCzMpc7M5cd7" target="_blank" rel="noopener noreferrer">
                    🐣 Early Bird Rp99.000
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white/30 text-slate-200 hover:bg-white/10 bg-white/5 backdrop-blur-sm dark:border-white/30 dark:text-slate-200 dark:hover:bg-white/10 dark:bg-white/5 light:border-gray-300 light:text-gray-800 light:hover:bg-gray-100 light:bg-white/80 hover:text-white dark:hover:text-white"
                >
                  Lihat Detail Program
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Target Audience */}
        <section id="target" className="py-16 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-100 mb-4 dark:text-slate-100 light:text-gray-900">
                  🎯 Target Peserta
                </h2>
                <p className="text-lg text-slate-300 dark:text-slate-300 light:text-gray-700">
                  Program ini cocok untuk kamu yang...
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ScrollAnimation delay={0.1}>
                <Card className="text-center hover:shadow-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 dark:bg-white/5 dark:backdrop-blur-sm dark:border-white/10 dark:hover:border-purple-500/50 light:bg-white light:border-gray-200 light:hover:border-purple-500">
                  <CardHeader>
                    <Target className="h-12 w-12 text-purple-400 mx-auto mb-4 dark:text-purple-400 light:text-purple-600" />
                    <CardTitle className="text-lg text-slate-100 dark:text-slate-100 light:text-gray-900">
                      Web Dev Pemula
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                      Ingin naik level dari basic ke intermediate
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <Card className="text-center hover:shadow-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 dark:bg-white/5 dark:backdrop-blur-sm dark:border-white/10 dark:hover:border-purple-500/50 light:bg-white light:border-gray-200 light:hover:border-purple-500">
                  <CardHeader>
                    <Code className="h-12 w-12 text-purple-400 mx-auto mb-4 dark:text-purple-400 light:text-purple-600" />
                    <CardTitle className="text-lg text-slate-100 dark:text-slate-100 light:text-gray-900">
                      Programmer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                      Belum punya portofolio nyata untuk showcase
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <Card className="text-center hover:shadow-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 dark:bg-white/5 dark:backdrop-blur-sm dark:border-white/10 dark:hover:border-purple-500/50 light:bg-white light:border-gray-200 light:hover:border-purple-500">
                  <CardHeader>
                    <Briefcase className="h-12 w-12 text-purple-400 mx-auto mb-4 dark:text-purple-400 light:text-purple-600" />
                    <CardTitle className="text-lg text-slate-100 dark:text-slate-100 light:text-gray-900">
                      Freelancer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                      Proyek showcase untuk menarik klien
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <Card className="text-center hover:shadow-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 dark:bg-white/5 dark:backdrop-blur-sm dark:border-white/10 dark:hover:border-purple-500/50 light:bg-white light:border-gray-200 light:hover:border-purple-500">
                  <CardHeader>
                    <GraduationCap className="h-12 w-12 text-purple-400 mx-auto mb-4 dark:text-purple-400 light:text-purple-600" />
                    <CardTitle className="text-lg text-slate-100 dark:text-slate-100 light:text-gray-900">
                      Fresh Graduate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                      Bingung mulai dari mana untuk berkarir
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Problems Solved */}
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-100 mb-4 dark:text-slate-100 light:text-gray-900">
                  🔍 Masalah yang Diselesaikan
                </h2>
                <p className="text-lg text-slate-300 dark:text-slate-300 light:text-gray-700">
                  Familiar dengan keluhan-keluhan ini?
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-6 text-center">
              <ScrollAnimation delay={0.1}>
              <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-lg p-6 backdrop-blur-sm dark:bg-gradient-to-r dark:from-red-500/10 dark:to-pink-500/10 dark:border-red-500/20 light:bg-red-50 light:border-red-200">
                <p className="text-red-300 font-medium dark:text-red-300 light:text-red-700">
                {'"Bingung mulai Laravel project dari mana."'}
                </p>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.2}>
              <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-lg p-6 backdrop-blur-sm dark:bg-gradient-to-r dark:from-red-500/10 dark:to-pink-500/10 dark:border-red-500/20 light:bg-red-50 light:border-red-200">
                <p className="text-red-300 font-medium dark:text-red-300 light:text-red-700">
                {'"CV gue ngebosenin & gak dapet panggilan."'}
                </p>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.3}>
              <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-lg p-6 backdrop-blur-sm dark:bg-gradient-to-r dark:from-red-500/10 dark:to-pink-500/10 dark:border-red-500/20 light:bg-red-50 light:border-red-200">
                <p className="text-red-300 font-medium dark:text-red-300 light:text-red-700">
                {'"Portfolio kosong, padahal udah bisa ngoding."'}
                </p>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.4}>
              <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-lg p-6 backdrop-blur-sm dark:bg-gradient-to-r dark:from-red-500/10 dark:to-pink-500/10 dark:border-red-500/20 light:bg-red-50 light:border-red-200">
                <p className="text-red-300 font-medium dark:text-red-300 light:text-red-700">
                {'"Nggak pede jual diri sebagai developer."'}
                </p>
              </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-100 mb-4 dark:text-slate-100 light:text-gray-900">
                  🧩 Timeline Program
                </h2>
                <p className="text-lg text-slate-300 dark:text-slate-300 light:text-gray-700">
                  4 sesi live yang terstruktur dan actionable
                </p>
              </div>
            </ScrollAnimation>

            <div className="space-y-6">
              <ScrollAnimation delay={0.1}>
                <Card className="hover:shadow-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 dark:bg-white/5 dark:backdrop-blur-sm dark:border-white/10 dark:hover:border-purple-500/50 light:bg-white light:border-gray-200 light:hover:border-purple-500">
                  <CardHeader className="bg-gradient-to-r from-[#4c1d95]/10 to-[#1e1b4b]/10 dark:bg-gradient-to-r dark:from-[#4c1d95]/10 dark:to-[#1e1b4b]/10 light:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg text-slate-100 dark:text-slate-100 light:text-gray-900">
                          🚀 Kickoff & Overview Proyek Laravel
                        </CardTitle>
                        <CardDescription className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                          Rabu, 25 Juni 2025
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="flex items-center space-x-1 border-purple-500/60 text-purple-200 bg-purple-700/30 font-bold shadow-md dark:border-purple-400/60 dark:text-purple-200 dark:bg-purple-700/30 light:border-purple-300 light:text-purple-800 light:bg-purple-100/80"
                      >
                        <Clock className="h-4 w-4 animate-pulse" />
                        <span className="tracking-wide">19.00 WIB</span>
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <Card className="hover:shadow-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 dark:bg-white/5 dark:backdrop-blur-sm dark:border-white/10 dark:hover:border-purple-500/50 light:bg-white light:border-gray-200 light:hover:border-purple-500">
                  <CardHeader className="bg-gradient-to-r from-[#4c1d95]/10 to-[#1e1b4b]/10 dark:bg-gradient-to-r dark:from-[#4c1d95]/10 dark:to-[#1e1b4b]/10 light:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg text-slate-100 dark:text-slate-100 light:text-gray-900">
                          🔧 Ngoding Bareng CRUD + QRIS Midtrans
                        </CardTitle>
                        <CardDescription className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                          Minggu, 29 Juni 2025
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="flex items-center space-x-1 border-purple-500/60 text-purple-200 bg-purple-700/30 font-bold shadow-md dark:border-purple-400/60 dark:text-purple-200 dark:bg-purple-700/30 light:border-purple-300 light:text-purple-800 light:bg-purple-100/80"
                      >
                        <Clock className="h-4 w-4" />
                        <span>16.00 WIB</span>
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <Card className="hover:shadow-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 dark:bg-white/5 dark:backdrop-blur-sm dark:border-white/10 dark:hover:border-purple-500/50 light:bg-white light:border-gray-200 light:hover:border-purple-500">
                  <CardHeader className="bg-gradient-to-r from-[#4c1d95]/10 to-[#1e1b4b]/10 dark:bg-gradient-to-r dark:from-[#4c1d95]/10 dark:to-[#1e1b4b]/10 light:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg text-slate-100 dark:text-slate-100 light:text-gray-900">
                          🔍 Build: Search, Kamera, dan Finalisasi
                        </CardTitle>
                        <CardDescription className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                          Rabu, 2 Juli 2025
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="flex items-center space-x-1 border-purple-500/60 text-purple-200 bg-purple-700/30 font-bold shadow-md dark:border-purple-400/60 dark:text-purple-200 dark:bg-purple-700/30 light:border-purple-300 light:text-purple-800 light:bg-purple-100/80"
                      >
                        <Clock className="h-4 w-4" />
                        <span>19.00 WIB</span>
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <Card className="hover:shadow-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/50 dark:bg-white/5 dark:backdrop-blur-sm dark:border-white/10 dark:hover:border-purple-500/50 light:bg-white light:border-gray-200 light:hover:border-purple-500">
                  <CardHeader className="bg-gradient-to-r from-[#4c1d95]/10 to-[#1e1b4b]/10 dark:bg-gradient-to-r dark:from-[#4c1d95]/10 dark:to-[#1e1b4b]/10 light:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg text-slate-100 dark:text-slate-100 light:text-gray-900">
                          💼 Soft Skills, AI Tools, CV, Branding, Portofolio
                        </CardTitle>
                        <CardDescription className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                          Minggu, 6 Juli 2025
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="flex items-center space-x-1 border-purple-500/60 text-purple-200 bg-purple-700/30 font-bold shadow-md dark:border-purple-400/60 dark:text-purple-200 dark:bg-purple-700/30 light:border-purple-300 light:text-purple-800 light:bg-purple-100/80"
                      >
                        <Clock className="h-4 w-4" />
                        <span>16.00 WIB</span>
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              </ScrollAnimation>
            </div>

            <ScrollAnimation delay={0.5}>
              <div className="mt-10 flex justify-center">
                <Badge className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 border-emerald-500/30 hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-green-500/20 dark:bg-gradient-to-r dark:from-emerald-500/20 dark:to-green-500/20 dark:text-emerald-300 dark:border-emerald-500/30 light:bg-emerald-100 light:text-emerald-800 light:border-emerald-200 text-lg px-5 py-2 font-bold shadow-lg">
                  📝 Semua sesi direkam & bisa ditonton ulang!
                </Badge>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Project Case Study */}
        <section id="project" className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-100 mb-4 dark:text-slate-100 light:text-gray-900">
                  🛠️ Studi Kasus Laravel
                </h2>
                <p className="text-xl text-slate-300 mb-6 dark:text-slate-300 light:text-gray-700">
                  Aplikasi Tamu Resepsi Pernikahan
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <Card className="mb-8 bg-white/5 backdrop-blur-sm border-white/10 dark:bg-white/5 dark:backdrop-blur-sm dark:border-white/10 light:bg-white light:border-gray-200">
                <CardHeader>
                  <CardTitle className="text-slate-100 dark:text-slate-100 light:text-gray-900">
                    Fitur Utama yang Akan Dibangun:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 dark:text-emerald-400 light:text-emerald-600" />
                      <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                        Input tamu (nama, no HP, kategori)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 dark:text-emerald-400 light:text-emerald-600" />
                      <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                        Kirim doa + donasi via QRIS (Midtrans)
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 dark:text-emerald-400 light:text-emerald-600" />
                      <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                        Kamera untuk capture kehadiran
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-400 dark:text-emerald-400 light:text-emerald-600" />
                      <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                        Search & filter data tamu
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 md:col-span-2">
                      <CheckCircle className="h-5 w-5 text-emerald-400 dark:text-emerald-400 light:text-emerald-600" />
                      <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                        Panel Admin untuk CRUD & kehadiran
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="text-center">
                <div className="flex flex-col gap-4 items-center">
                  <Badge className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30 hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-orange-500/20 text-lg px-4 py-2 dark:bg-gradient-to-r dark:from-amber-500/20 dark:to-orange-500/20 dark:text-amber-300 dark:border-amber-500/30 light:bg-amber-100 light:text-amber-800 light:border-amber-200">
                  🎁 Bonus: Best practice Laravel, Coding dengan AI, Bikin landing page otomatis pakai AI!
                  </Badge>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Mentor Section */}
        <section id="mentor" className="py-16 relative bg-gradient-to-r from-[#4c1d95]/30 to-[#1e1b4b]/30 dark:bg-gradient-to-r dark:from-[#4c1d95]/30 dark:to-[#1e1b4b]/30 light:bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-100 mb-4 dark:text-slate-100 light:text-gray-900">
                  👨‍🏫 Mentor
                </h2>
                <p className="text-lg text-slate-300 dark:text-slate-300 light:text-gray-700">
                  Siapa yang akan membimbing kamu?
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden dark:bg-white/5 dark:backdrop-blur-sm dark:border-white/10 light:bg-white light:border-gray-200">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-[#4c1d95] via-[#1e1b4b] to-black p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 mx-auto mb-4 overflow-hidden flex items-center justify-center shadow-xl">
                        <img
                          src="https://i.ibb.co.com/G43QDGTX/profile1.jpg"
                          alt="Aditya Fakhri Riansyah"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-slate-100">Aditya Fakhri Riansyah</h3>
                      <p className="text-purple-300">Mentor at CODEPOLITAN</p>
                      <p className="text-purple-300">AI-Driven Web Developer</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-slate-100 mb-2 dark:text-slate-100 light:text-gray-900">
                        Technical Learning Facilitator & AI Driven Web Developer
                      </h4>
                      <p className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                        Mentor di berbagai pelatihan IT & pembicara aktif di event teknologi. Bagian dari Organizer
                        Google Developer Groups Bandung. Pernah menangani puluhan proyek, termasuk untuk brand besar
                        seperti Panasonic, dan membimbing ratusan siswa dari nol 💪.
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-slate-100 mb-2 dark:text-slate-100 light:text-gray-900">
                        Keahlian:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 dark:bg-purple-600/20 dark:text-purple-300 dark:border-purple-500/30 light:bg-purple-100 light:text-purple-800 light:border-purple-200">
                          Laravel
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 dark:bg-purple-600/20 dark:text-purple-300 dark:border-purple-500/30 light:bg-purple-100 light:text-purple-800 light:border-purple-200">
                          Full Stack
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 dark:bg-purple-600/20 dark:text-purple-300 dark:border-purple-500/30 light:bg-purple-100 light:text-purple-800 light:border-purple-200">
                          AI Integration
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 dark:bg-purple-600/20 dark:text-purple-300 dark:border-purple-500/30 light:bg-purple-100 light:text-purple-800 light:border-purple-200">
                          Web Development
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 dark:bg-purple-600/20 dark:text-purple-300 dark:border-purple-500/30 light:bg-purple-100 light:text-purple-800 light:border-purple-200">
                          Technical Mentoring
                        </Badge>
                        <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 dark:bg-purple-600/20 dark:text-purple-300 dark:border-purple-500/30 light:bg-purple-100 light:text-purple-800 light:border-purple-200">
                          Soft Skills
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-100 mb-2 dark:text-slate-100 light:text-gray-900">
                        Connect:
                      </h4>
                      <div className="flex space-x-4">
                        <a
                          href="https://instagram.com/adityafakhrii"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 hover:text-purple-400 transition-colors dark:text-slate-300 dark:hover:text-purple-400 light:text-gray-600 light:hover:text-purple-600"
                        >
                          <Instagram className="h-6 w-6" />
                        </a>
                        <a
                          href="https://linkedin.com/in/adityafakhrii"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 hover:text-purple-400 transition-colors dark:text-slate-300 dark:hover:text-purple-400 light:text-gray-600 light:hover:text-purple-600"
                        >
                          <Linkedin className="h-6 w-6" />
                        </a>
                        <a
                          href="https://github.com/adityafakhrii"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 hover:text-purple-400 transition-colors dark:text-slate-300 dark:hover:text-purple-400 light:text-gray-600 light:hover:text-purple-600"
                        >
                          <Github className="h-6 w-6" />
                        </a>
                        <a
                          href="https://twitter.com/adityafakhrii"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 hover:text-purple-400 transition-colors dark:text-slate-300 dark:hover:text-purple-400 light:text-gray-600 light:hover:text-purple-600"
                        >
                          <XIcon className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-100 mb-4 dark:text-slate-100 light:text-gray-900">
                  🎁 Apa yang Didapat Peserta?
                </h2>
                <p className="text-lg text-slate-300 dark:text-slate-300 light:text-gray-700">
                  Value yang kamu dapatkan dari program ini
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-6">
              <ScrollAnimation delay={0.1}>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0 dark:text-emerald-400 light:text-emerald-600" />
                <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                4 sesi <b>live mentoring interaktif</b> (total 6+ jam) langsung bareng mentor
                </span>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.2}>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0 dark:text-emerald-400 light:text-emerald-600" />
                <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                <b>Akses grup diskusi private</b> untuk tanya jawab & networking bareng peserta lain
                </span>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.3}>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0 dark:text-emerald-400 light:text-emerald-600" />
                <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                <b>Rekaman & file materi</b> semua sesi, bisa diakses kapan saja
                </span>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.4}>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0 dark:text-emerald-400 light:text-emerald-600" />
                <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                <b>Studi kasus real project Laravel</b> (Aplikasi Tamu Resepsi Pernikahan)
                </span>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.5}>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0 dark:text-emerald-400 light:text-emerald-600" />
                <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                <b>Review portofolio & CV</b> langsung dari mentor, siap tempur ke HR/klien
                </span>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.6}>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0 dark:text-emerald-400 light:text-emerald-600" />
                <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                <b>Tanya jawab langsung</b> di setiap sesi, bebas konsultasi masalah coding & karir
                </span>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.7}>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0 dark:text-emerald-400 light:text-emerald-600" />
                <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                <b>Rekomendasi tools & resource belajar</b> yang relevan & up-to-date
                </span>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.8}>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0 dark:text-emerald-400 light:text-emerald-600" />
                <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                <b>Networking</b> dengan peserta lain & mentor, buka peluang kolaborasi/proyek
                </span>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={0.9}>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0 dark:text-emerald-400 light:text-emerald-600" />
                <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                <b>Tools AI</b> untuk <span className="text-emerald-300">CV ATS-friendly</span> & produktivitas programmer
                </span>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={1.0}>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0 dark:text-emerald-400 light:text-emerald-600" />
                <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                <b>Bonus:</b> Tips soft skill, personal branding, dan <span className="text-amber-300">AI untuk developer</span>
                </span>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={1.1}>
              <div className="flex items-start space-x-3 md:col-span-2">
                <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0 dark:text-emerald-400 light:text-emerald-600" />
                <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                <b>Sertifikat digital</b> (opsional) untuk portofolio & LinkedIn
                </span>
              </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Private Mentoring Intro */}
        <section className="py-8 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollAnimation delay={1.0}>
              <div className="inline-block px-6 py-4 rounded-xl bg-gradient-to-r from-purple-700/70 to-violet-800/70 dark:from-purple-700/70 dark:to-violet-800/70 light:from-purple-100 light:to-violet-200 shadow-lg">
          <ScrollAnimation>
            <p className="text-xl text-white dark:text-white light:text-purple-900 font-semibold">
              Butuh Mentoring <span className="text-amber-300">Private</span> dan <span className="text-emerald-300">Personal</span>?
            </p>
          </ScrollAnimation>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Private Mentoring Section */}
        <section className="py-16 relative bg-gradient-to-r from-[#4c1d95]/30 to-[#1e1b4b]/30 dark:bg-gradient-to-r dark:from-[#4c1d95]/30 dark:to-[#1e1b4b]/30 light:bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-100 mb-4 dark:text-slate-100 light:text-gray-900">
                  👤 Private 1:1 Mentoring
                </h2>
                <p className="text-lg text-slate-300 dark:text-slate-300 light:text-gray-700">
                  Belajar lebih fokus dengan sesi personal
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden dark:bg-white/5 dark:backdrop-blur-sm dark:border-white/10 light:bg-white light:border-gray-200">
              {/* BEST VALUE Badge */}
                <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-orange-400 text-black px-3 py-1 text-xs font-bold z-10 rounded-bl-lg shadow">
                BEST VALUE!
                </div>
              <div className="md:flex">
                <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-bold text-slate-100 mb-4 dark:text-slate-100 light:text-gray-900">
                  Kenapa Private Mentoring?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0 dark:text-purple-400 light:text-purple-600" />
                  <div>
                    <h4 className="font-semibold text-slate-100 dark:text-slate-100 light:text-gray-900">
                    Fokus pada kebutuhanmu
                    </h4>
                    <p className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                    Topik bebas kamu tentuin sesuai kebutuhan spesifik
                    </p>
                  </div>
                  </div>
                  <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0 dark:text-purple-400 light:text-purple-600" />
                  <div>
                    <h4 className="font-semibold text-slate-100 dark:text-slate-100 light:text-gray-900">
                    Jadwal fleksibel
                    </h4>
                    <p className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                    Atur waktu sesuai ketersediaan kamu
                    </p>
                  </div>
                  </div>
                  <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0 dark:text-purple-400 light:text-purple-600" />
                  <div>
                    <h4 className="font-semibold text-slate-100 dark:text-slate-100 light:text-gray-900">
                    Hasil lebih maksimal
                    </h4>
                    <p className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                    Perhatian penuh dari mentor untuk progress kamu
                    </p>
                  </div>
                  </div>
                </div>
                </div>
                <div className="md:w-1/2 p-6 bg-gradient-to-br from-[#4c1d95]/20 to-[#1e1b4b]/20 dark:bg-gradient-to-br dark:from-[#4c1d95]/20 dark:to-[#1e1b4b]/20 light:bg-gray-100">
                <h3 className="text-xl font-bold text-slate-100 mb-4 dark:text-slate-100 light:text-gray-900">
                  Topik yang Bisa Dibahas:
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <Badge className="bg-purple-600/30 text-purple-300 border-purple-500/30 justify-center dark:bg-purple-600/30 dark:text-purple-300 dark:border-purple-500/30 light:bg-purple-100 light:text-purple-800 light:border-purple-200">
                  Laravel Advanced
                  </Badge>
                  <Badge className="bg-purple-600/30 text-purple-300 border-purple-500/30 justify-center dark:bg-purple-600/30 dark:text-purple-300 dark:border-purple-500/30 light:bg-purple-100 light:text-purple-800 light:border-purple-200">
                  AI Integration
                  </Badge>
                  <Badge className="bg-purple-600/30 text-purple-300 border-purple-500/30 justify-center dark:bg-purple-600/30 dark:text-purple-300 dark:border-purple-500/30 light:bg-purple-100 light:text-purple-800 light:border-purple-200">
                  CV Review
                  </Badge>
                  <Badge className="bg-purple-600/30 text-purple-300 border-purple-500/30 justify-center dark:bg-purple-600/30 dark:text-purple-300 dark:border-purple-500/30 light:bg-purple-100 light:text-purple-800 light:border-purple-200">
                  Portfolio Review
                  </Badge>
                  <Badge className="bg-purple-600/30 text-purple-300 border-purple-500/30 justify-center dark:bg-purple-600/30 dark:text-purple-300 dark:border-purple-500/30 light:bg-purple-100 light:text-purple-800 light:border-purple-200">
                  Career Guidance
                  </Badge>
                  <Badge className="bg-purple-600/30 text-purple-300 border-purple-500/30 justify-center dark:bg-purple-600/30 dark:text-purple-300 dark:border-purple-500/30 light:bg-purple-100 light:text-purple-800 light:border-purple-200">
                  Project Review
                  </Badge>
                </div>
                <div className="mt-6 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-1">
                    <span className="text-base text-gray-400 line-through dark:text-gray-400 light:text-gray-400">
                      Rp699.000
                    </span>
                    <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                      79% OFF (Hemat Rp550.000)
                    </span>
                    </div>
                    <div className="text-3xl font-bold text-purple-400 dark:text-purple-400 light:text-purple-600">
                    Rp149.000
                    </div>
                    <p className="text-slate-300 dark:text-slate-300 light:text-gray-700">2 sesi @60 menit</p>
                  <Button
                  asChild
                  size="lg"
                  className="mt-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold border-0 shadow-lg"
                  >
                  <a
                    href="https://forms.gle/tnANAsCzMpc7M5cd7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ikut Private Mentoring
                  </a>
                  </Button>
                </div>
                </div>
              </div>
              </Card>
            </ScrollAnimation>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-100 mb-4 dark:text-slate-100 light:text-gray-900">
                  🔥 Pilihan Program
                </h2>
                <p className="text-lg text-slate-300 dark:text-slate-300 light:text-gray-700">
                  Pilih yang sesuai dengan kebutuhan kamu
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Early Bird */}
                <ScrollAnimation delay={0.1}>
                <Card className="border-2 border-amber-500/50 relative overflow-hidden bg-white/5 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 dark:bg-white/5 dark:backdrop-blur-sm dark:border-amber-500/50 light:bg-white light:border-amber-400">
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 text-xs font-bold z-10 rounded-bl-lg shadow">
                  TERBATAS
                  </div>
                  <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-slate-100 dark:text-slate-100 light:text-gray-900">
                    🐣 Early Bird
                  </CardTitle>
                  <CardDescription className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                    5 peserta pertama &mdash; <span className="font-bold text-amber-400">Sisa 5 slot!</span>
                  </CardDescription>
                  <div className="flex flex-col items-center mt-4 mb-2">
                    <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-black text-xs font-bold px-2 py-0.5 rounded mt-1 mb-1">
                    Diskon 80% (Hemat Rp400.000)
                    </span>
                    <span className="text-gray-400 text-lg line-through dark:text-gray-400 light:text-gray-400">
                    Rp499.000
                    </span>
                    <span className="text-4xl font-bold text-amber-400 dark:text-amber-400 light:text-amber-600">
                    Rp99.000
                    </span>
                  </div>
                  <div className="text-slate-300 dark:text-slate-300 light:text-gray-700 text-sm">
                    Untuk akses <b>Group Mentoring</b> <br /> (semua sesi & materi)
                  </div>
                  </CardHeader>
                  <CardContent>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white font-bold border-0 shadow-lg"
                  >
                    <a href="https://forms.gle/tnANAsCzMpc7M5cd7" target="_blank" rel="noopener noreferrer">
                    Ambil Early Bird
                    </a>
                  </Button>
                  </CardContent>
                </Card>
                </ScrollAnimation>

              {/* Group Mentoring */}
                <ScrollAnimation delay={0.2}>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:shadow-2xl transition-all duration-300 dark:bg-white/5 dark:backdrop-blur-sm dark:border-white/10 light:bg-white light:border-gray-200">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl text-slate-100 dark:text-slate-100 light:text-gray-900">
                        👥 Group Mentoring
                      </CardTitle>
                      <CardDescription className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                        Setelah early bird habis
                      </CardDescription>
                      <div className="flex flex-col items-center mt-4 mb-2">
                        <span className="bg-gradient-to-r from-purple-400 to-violet-400 text-black text-xs font-bold px-2 py-0.5 rounded mb-1">
                          Diskon 70% (Hemat Rp350.000)
                        </span>
                        <span className="text-gray-400 text-lg line-through dark:text-gray-400 light:text-gray-400">
                          Rp499.000
                        </span>
                        <span className="text-4xl font-bold text-purple-400 dark:text-purple-400 light:text-purple-600">
                          Rp149.000
                        </span>
                      </div>
                      <div className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                        Akses semua sesi & materi
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-700 text-left mb-4">
                        ✅ 4 sesi live mentoring (total 6+ jam)<br />
                        ✅ Akses grup diskusi private<br />
                        ✅ Rekaman + file materi<br />
                        ✅ Review portofolio langsung dari mentor<br />
                        ✅ Tanya jawab langsung di setiap sesi<br />
                        ✅ Studi kasus real project Laravel<br />
                        ✅ Rekomendasi tools & resource belajar<br />
                        ✅ Networking dengan peserta lain<br />
                        ✅ Tools AI untuk CV & produktivitas<br />
                        ✅ Sertifikat digital (opsional)<br />
                      </div>
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0 shadow-lg"
                      >
                        <a href="https://forms.gle/tnANAsCzMpc7M5cd7" target="_blank" rel="noopener noreferrer">
                          Daftar Group
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollAnimation>

              {/* Private 1:1 */}
                <ScrollAnimation delay={0.3}>
                <Card className="border-2 border-purple-500/50 relative overflow-hidden bg-white/5 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 dark:bg-white/5 dark:backdrop-blur-sm dark:border-purple-500/50 light:bg-white light:border-purple-400">
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-orange-400 text-black px-3 py-1 text-xs font-bold z-10 rounded-bl-lg shadow">
                  PREMIUM
                  </div>
                  <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-slate-100 dark:text-slate-100 light:text-gray-900">
                    👤 Private 1:1
                  </CardTitle>
                  <CardDescription className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                    2 sesi personal
                  </CardDescription>
                  <div className="flex flex-col items-center mt-4 mb-2">
                    <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-black text-xs font-bold px-2 py-0.5 rounded mb-1">
                    Diskon 79% (Hemat Rp550.000)
                    </span>
                    <span className="text-gray-400 text-lg line-through dark:text-gray-400 light:text-gray-400">
                    Rp699.000
                    </span>
                    <span className="text-4xl font-bold text-purple-400 dark:text-purple-400 light:text-purple-600">
                    Rp149.000
                    </span>
                  </div>
                  <div className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                    Topik bebas kamu tentuin
                  </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                  <div className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-700 text-left mb-4">
                    ✅ Berbagai topik sesuai kebutuhanmu
                    <br />✅ Jadwal fleksibel
                    <br />✅ Lebih fokus & personal
                    <br />✅ Dibimbing langsung oleh mentor
                    <br />✅ Akses Rekaman mentoring
                    <br />✅ Tanya private sepusanya
                    <br />✅ Tools AI untuk produktivitas
                    <br />✅ Rekomendasi tools & resource
                    <br />✅ Review portofolio langsung
                    <br />✅ Networking dengan mentor <br />
                  </div>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0 shadow-lg"
                  >
                    <a href="https://forms.gle/tnANAsCzMpc7M5cd7" target="_blank" rel="noopener noreferrer">
                    Pilih Private
                    </a>
                  </Button>
                  </CardContent>
                </Card>
                </ScrollAnimation>
            </div>

            <ScrollAnimation delay={0.4}>
              <div className="mt-8 text-center">
                <Badge className="bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border-red-500/30 hover:bg-gradient-to-r hover:from-red-500/20 hover:to-pink-500/20 text-lg px-4 py-2 dark:bg-gradient-to-r dark:from-red-500/20 dark:to-pink-500/20 dark:text-red-300 dark:border-red-500/30 light:bg-red-100 light:text-red-800 light:border-red-200">
                  ⏰ Deadline pendaftaran: Minggu, 22 Juni 2025
                </Badge>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 relative bg-gradient-to-r from-[#4c1d95]/30 to-[#1e1b4b]/30 dark:bg-gradient-to-r dark:from-[#4c1d95]/30 dark:to-[#1e1b4b]/30 light:bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-100 mb-4 dark:text-slate-100 light:text-gray-900">
                  💬 Testimoni Peserta
                </h2>
                <p className="text-lg text-slate-300 dark:text-slate-300 light:text-gray-700">
                  Apa kata mereka yang sudah ikut program sebelumnya?
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <TestimonialCarousel />
            </ScrollAnimation>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-100 mb-4 dark:text-slate-100 light:text-gray-900">
                  ❓ Frequently Asked Questions
                </h2>
                <p className="text-lg text-slate-300 dark:text-slate-300 light:text-gray-700">
                  Pertanyaan yang sering ditanyakan
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <FaqAccordion />
            </ScrollAnimation>
          </div>
        </section>

        {/* Registration */}
        <section className="py-16 relative bg-gradient-to-r from-[#4c1d95]/20 to-[#1e1b4b]/20 dark:bg-gradient-to-r dark:from-[#4c1d95]/20 dark:to-[#1e1b4b]/20 light:bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold text-slate-100 mb-4 dark:text-slate-100 light:text-gray-900">
                🧑‍💻 Siap Upgrade Skill & Portfoliomu?
              </h2>
              <p className="text-xl text-slate-300 mb-8 dark:text-slate-300 light:text-gray-700">
                Gak cuma belajar teori, mentoring ini bantu kamu naik level secara teknis & personal.
                <br />
                Kalau kamu ngerasa waktunya seriusin skill, klik link ini dan daftar sekarang ⬇️
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8 border border-white/20 dark:bg-white/10 dark:backdrop-blur-sm dark:border-white/20 light:bg-white light:border-gray-200">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white text-lg px-8 border-0 shadow-lg"
                >
                  <a href="https://forms.gle/tnANAsCzMpc7M5cd7" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Daftar Sekarang
                  </a>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-100 dark:text-slate-100 light:text-gray-900">
                  💬 Ada pertanyaan?
                </h3>
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-gray-700">
                  Yuk langsung ngobrol bareng di:
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-5 w-5 text-purple-400 dark:text-purple-400 light:text-purple-600" />
                    <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                      <a
                        href="https://instagram.com/adityafakhrii"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 dark:text-purple-400 dark:hover:text-purple-300 light:text-purple-600 light:hover:text-purple-500"
                      >
                        @adityafakhrii
                      </a>
                    </span>
                  </div>
                  <p className="text-white">atau</p>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-purple-400 dark:text-purple-400 light:text-purple-600" />
                    <span className="text-slate-300 dark:text-slate-300 light:text-gray-700">
                      <a
                        href="http://wa.me/62895808860080"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 dark:text-purple-400 dark:hover:text-purple-300 light:text-purple-600 light:hover:text-purple-500"
                      >
                        WhatsApp
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Mindset */}
        <section className="py-20 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation>
              <div className="flex flex-col items-center text-center">
                <blockquote className="relative bg-white/10 dark:bg-white/10 light:bg-white rounded-xl px-6 py-8 md:py-10 md:px-10 shadow-lg border border-white/20 dark:border-white/20 light:border-purple-200 max-w-2xl mx-auto">
                  
                  <p className="text-xl md:text-2xl italic font-light leading-relaxed text-slate-200 dark:text-slate-200 light:text-gray-700">
                    Gue nggak ngajarin lo ngoding doang. Gue bantu lo jadi developer yang <span className="text-amber-300 font-semibold">bisa dijual</span> — baik ke HR, klien, maupun diri lo sendiri.
                  </p>
                </blockquote>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-lg border-t border-white/10 py-16 dark:bg-black/40 dark:backdrop-blur-lg dark:border-white/10 light:bg-white light:border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 flex items-center justify-center shadow-lg">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-semibold text-slate-100 dark:text-slate-100 light:text-gray-900">
                    Mentoring with Aditya
                  </span>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed dark:text-slate-300 light:text-gray-700">
                  Mentoring singkat tapi berdampak untuk web developer yang ingin naik level. Dari Laravel project nyata
                  sampai soft skill yang bikin kamu stand out di industri.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/adityafakhrii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-purple-400 transition-colors dark:text-slate-400 dark:hover:text-purple-400 light:text-gray-600 light:hover:text-purple-600"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/adityafakhrii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-purple-400 transition-colors dark:text-slate-400 dark:hover:text-purple-400 light:text-gray-600 light:hover:text-purple-600"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com/adityafakhrii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-purple-400 transition-colors dark:text-slate-400 dark:hover:text-purple-400 light:text-gray-600 light:hover:text-purple-600"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-slate-100 font-semibold mb-4 dark:text-slate-100 light:text-gray-900">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {navigationLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-slate-300 hover:text-purple-400 transition-colors dark:text-slate-300 dark:hover:text-purple-400 light:text-gray-700 light:hover:text-purple-600"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-slate-100 font-semibold mb-4 dark:text-slate-100 light:text-gray-900">Kontak</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-purple-400 dark:text-purple-400 light:text-purple-600" />
                    <a
                      href="https://instagram.com/adityafakhrii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-purple-400 transition-colors dark:text-slate-300 dark:hover:text-purple-400 light:text-gray-700 light:hover:text-purple-600"
                    >
                      @adityafakhrii
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-purple-400 dark:text-purple-400 light:text-purple-600" />
                    <a
                      href="mailto:adityafakhri03@gmail.com"
                      className="text-slate-300 hover:text-purple-400 transition-colors dark:text-slate-300 dark:hover:text-purple-400 light:text-gray-700 light:hover:text-purple-600"
                    >
                      adityafakhri03@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4 text-purple-400 dark:text-purple-400 light:text-purple-600" />
                    <a
                      href="http://wa.me/62895808860080"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-purple-400 transition-colors dark:text-slate-300 dark:hover:text-purple-400 light:text-gray-700 light:hover:text-purple-600"
                    >
                      0895808860080
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-8 dark:border-white/10 light:border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-slate-400 text-sm dark:text-slate-400 light:text-gray-600">
                  © 2025 Mentoring with Aditya. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-purple-400 text-sm transition-colors dark:text-slate-400 dark:hover:text-purple-400 light:text-gray-600 light:hover:text-purple-600"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-purple-400 text-sm transition-colors dark:text-slate-400 dark:hover:text-purple-400 light:text-gray-600 light:hover:text-purple-600"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-purple-400 text-sm transition-colors dark:text-slate-400 dark:hover:text-purple-400 light:text-gray-600 light:hover:text-purple-600"
                  >
                    FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
