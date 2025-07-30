"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ScrollHeader } from "@/components/scroll-header"
import { ParticleAnimation } from "@/components/particle-animation"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { FaqAccordion } from "@/components/faq-accordion"
import { MobileMenu } from "@/components/mobile-menu"
import { LoadingAnimation } from "@/components/loading-animation"
import {
  Calendar,
  Clock,
  Users,
  BookOpen,
  Code,
  Zap,
  Target,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  User,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  ExternalLink,
  Play,
  Download,
  Heart,
  Lightbulb,
  Rocket,
  Shield,
  Briefcase,
  GraduationCap,
  Trophy,
  Gift,
  Camera,
  Search,
  Database,
  CreditCard,
  Settings,
  FileText,
  MessageSquare,
  Video,
  Headphones,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
} from "lucide-react"

const navigationLinks = [
  { href: "#about", label: "Tentang Program" },
  { href: "#timeline", label: "Timeline" },
  { href: "#benefits", label: "Benefit" },
  { href: "#pricing", label: "Harga" },
  { href: "#testimonials", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white overflow-x-hidden">
      <LoadingAnimation />
      <ParticleAnimation />

      {/* Header */}
      <ScrollHeader>
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Mentoring with Aditya</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-200 hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                asChild
                className="hidden md:inline-flex bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0 shadow-lg"
              >
                <a href="https://forms.gle/tnANAsCzMpc7M5cd7" target="_blank" rel="noopener noreferrer">
                  Daftar Sekarang
                </a>
              </Button>

              {/* Mobile Menu */}
              <MobileMenu links={navigationLinks} />
            </div>
          </div>
        </div>
      </ScrollHeader>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto text-center relative z-10">
          <ScrollAnimation>
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm">
              Batch 1 - Pendaftaran Terbuka
            </Badge>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent leading-tight">
              Mentoring with Aditya
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Laravel & Soft Skill Intensive Mentoring - Build Real Wedding Guest App
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.6}>
            <div className="mb-10 max-w-4xl mx-auto">
              <p className="text-lg text-slate-400 mb-6">
                Program mentoring singkat, padat, tapi berdampak buat web developer pemula yang ingin naik level dengan
                real project & upgrade soft skill!
              </p>
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Project yang Akan Kamu Bangun:</h3>
                <p className="text-lg text-slate-200 font-medium mb-2">Aplikasi Tamu Resepsi Pernikahan</p>
                <p className="text-slate-300">
                  Aplikasi lengkap dengan fitur CRUD, QRIS payment integration, kamera check-in, search & filter, 
                  plus admin panel yang siap pakai untuk bisnis wedding organizer!
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0 shadow-xl px-8 py-4 text-lg"
              >
                <a href="https://forms.gle/tnANAsCzMpc7M5cd7" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Daftar Sekarang
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Lihat Demo
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
                Apa yang Akan Dipelajari?
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Program komprehensif yang menggabungkan skill teknis dan soft skill untuk karir yang sukses
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.2}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-slate-100">Real Laravel Project</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">
                    Build aplikasi Tamu Resepsi Pernikahan dengan fitur CRUD, QRIS payment, kamera check-in, dan admin
                    panel yang lengkap
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-slate-100">CV & Portfolio Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">
                    Review mendalam CV dan portfolio kamu agar siap tempur di dunia kerja dengan feedback yang actionable
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.6}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-slate-100">Soft Skill Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">
                    Personal branding, penggunaan AI tools, dan strategi career growth yang akan membedakan kamu dari
                    yang lain
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Timeline Program</h2>
              <p className="text-slate-400 text-lg">4 sesi intensif yang akan mengubah karir kamu</p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  session: "Sesi 1",
                  title: "Kickoff & Overview Proyek",
                  date: "Rabu, 25 Juni 2025",
                  time: "19.00 WIB",
                  icon: Rocket,
                },
                {
                  session: "Sesi 2",
                  title: "CRUD + Midtrans",
                  date: "Minggu, 29 Juni 2025",
                  time: "16.00 WIB",
                  icon: Database,
                },
                {
                  session: "Sesi 3",
                  title: "Search, Kamera, Finalisasi",
                  date: "Rabu, 2 Juli 2025",
                  time: "19.00 WIB",
                  icon: Camera,
                },
                {
                  session: "Sesi 4",
                  title: "Soft Skill & Portofolio",
                  date: "Minggu, 6 Juli 2025",
                  time: "16.00 WIB",
                  icon: Trophy,
                },
              ].map((item, index) => (
                <ScrollAnimation key={index} delay={index * 0.2}>
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <div>
                              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 mb-2">
                                {item.session}
                              </Badge>
                              <h3 className="text-xl font-semibold text-slate-100 mb-1">{item.title}</h3>
                            </div>
                            <div className="text-right">
                              <p className="text-slate-300 font-medium">{item.date}</p>
                              <p className="text-slate-400">{item.time}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation delay={0.8}>
              <div className="mt-8 text-center">
                <Badge className="bg-green-600/20 text-green-300 border-green-500/30 px-4 py-2">
                  Semua sesi direkam & bisa ditonton ulang!
                </Badge>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Target Peserta</h2>
              <p className="text-slate-400 text-lg">Siapa yang cocok mengikuti program ini?</p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: "Web Developer Pemula",
                description: "Yang pengen naik level skill dan karir",
              },
              {
                icon: User,
                title: "Programmer Tanpa Portfolio",
                description: "Yang belum punya showcase project",
              },
              {
                icon: Briefcase,
                title: "Freelancer",
                description: "Yang butuh proyek untuk portfolio",
              },
              {
                icon: GraduationCap,
                title: "Fresh Graduate",
                description: "Yang bingung mulai karir dari mana",
              },
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.2}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Benefit Program</h2>
              <p className="text-slate-400 text-lg">Apa yang kamu dapatkan dari program ini</p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: "Live Mentoring 4 Sesi",
                description: "Total 6+ jam pembelajaran intensif dengan mentor berpengalaman",
              },
              {
                icon: MessageSquare,
                title: "Grup Diskusi Private",
                description: "Akses eksklusif ke grup diskusi untuk bertanya dan sharing",
              },
              {
                icon: Database,
                title: "Studi Kasus Real Project",
                description: "Aplikasi Tamu Resepsi Pernikahan dengan fitur lengkap",
              },
              {
                icon: Download,
                title: "File Materi & Rekaman",
                description: "Semua materi dan rekaman sesi bisa diakses selamanya",
              },
              {
                icon: FileText,
                title: "CV & Portfolio Review",
                description: "Review mendalam untuk meningkatkan daya saing kamu",
              },
              {
                icon: Award,
                title: "Sertifikat Digital",
                description: "Sertifikat kelulusan yang bisa ditambahkan ke LinkedIn",
              },
            ].map((benefit, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-2">{benefit.title}</h3>
                    <p className="text-slate-400">{benefit.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
                Studi Kasus: Laravel Guestbook App
              </h2>
              <p className="text-slate-400 text-lg">Project nyata yang akan kamu bangun selama program</p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <ScrollAnimation delay={0.2}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-100 mb-6 text-center">Fitur Utama Aplikasi</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: User,
                        title: "Input Data Tamu",
                        description: "Form registrasi tamu dengan validasi lengkap",
                      },
                      {
                        icon: CreditCard,
                        title: "QRIS untuk Donasi",
                        description: "Integrasi Midtrans untuk pembayaran digital",
                      },
                      {
                        icon: Camera,
                        title: "Kamera Check-in",
                        description: "Fitur foto untuk dokumentasi kehadiran tamu",
                      },
                      {
                        icon: Search,
                        title: "Search & Filter",
                        description: "Pencarian dan filter data tamu yang efisien",
                      },
                      {
                        icon: Settings,
                        title: "Admin Panel CRUD",
                        description: "Dashboard admin untuk mengelola semua data",
                      },
                      {
                        icon: Shield,
                        title: "Security Features",
                        description: "Authentication dan authorization yang proper",
                      },
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-slate-100 font-medium mb-1">{feature.title}</h4>
                          <p className="text-slate-400 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="text-center">
                <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2">
                  Bonus: Best practice Laravel, clean code, dan deployment tips
                </Badge>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Mentor</h2>
              <p className="text-slate-400 text-lg">Belajar langsung dari praktisi berpengalaman</p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <ScrollAnimation delay={0.2}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-slate-100 mb-2">Aditya Fakhri Riansyah</h3>
                      <p className="text-purple-400 text-lg mb-4">Technical Facilitator, AI-Driven Web Dev</p>
                      <p className="text-slate-300 mb-4">
                        Mentor @CODEPOLITAN | GDG Organizer | Ex-Panasonic project engineer
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                        {["Laravel", "Full Stack", "AI Integration", "Tech Speaker"].map((skill) => (
                          <Badge key={skill} className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-slate-400">
                        Pembicara aktif di komunitas tech dengan pengalaman mengajar ratusan developer
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Harga Program</h2>
              <p className="text-slate-400 text-lg">Pilih paket yang sesuai dengan kebutuhan kamu</p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Early Bird",
                price: "Rp99.000",
                originalPrice: "Rp149.000",
                description: "Terbatas untuk 5 orang pertama",
                features: [
                  "Akses semua 4 sesi live mentoring",
                  "Grup diskusi private",
                  "File materi & rekaman",
                  "Studi kasus project lengkap",
                  "CV & portfolio review",
                  "Sertifikat digital",
                ],
                popular: true,
                icon: Gift,
              },
              {
                name: "Group Mentoring",
                price: "Rp149.000",
                description: "Akses semua sesi & materi",
                features: [
                  "Akses semua 4 sesi live mentoring",
                  "Grup diskusi private",
                  "File materi & rekaman",
                  "Studi kasus project lengkap",
                  "CV & portfolio review",
                  "Sertifikat digital",
                ],
                icon: Users,
              },
              {
                name: "Private 1:1",
                price: "Rp149.000",
                description: "2 sesi x 60 menit, topik fleksibel",
                features: [
                  "2 sesi private mentoring",
                  "Topik sesuai kebutuhan",
                  "Flexible scheduling",
                  "Personal guidance",
                  "Direct feedback",
                  "Sertifikat digital",
                ],
                icon: User,
              },
            ].map((plan, index) => (
              <ScrollAnimation key={index} delay={index * 0.2}>
                <Card
                  className={`relative bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 ${
                    plan.popular ? "ring-2 ring-purple-500 scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-4 py-1">
                        Paling Populer
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-slate-100 text-xl">{plan.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="flex flex-col items-center gap-1">
                        {plan.originalPrice && (
                          <span className="text-lg text-slate-400 line-through">{plan.originalPrice}</span>
                        )}
                        <span className="text-3xl font-bold text-slate-100">{plan.price}</span>
                      </div>
                      <CardDescription className="text-slate-400">{plan.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
                          : "bg-white/10 hover:bg-white/20 text-slate-100"
                      }`}
                    >
                      <a href="https://forms.gle/tnANAsCzMpc7M5cd7" target="_blank" rel="noopener noreferrer">
                        Pilih Paket Ini
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.6}>
            <div className="text-center mt-12">
              <p className="text-slate-400 mb-4">Daftar sekarang dan mulai transformasi karir kamu!</p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0 shadow-xl px-8 py-4 text-lg"
              >
                <a href="https://forms.gle/tnANAsCzMpc7M5cd7" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Daftar Sekarang
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Testimoni Alumni</h2>
              <p className="text-slate-400 text-lg">Apa kata mereka yang sudah mengikuti mentoring</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <TestimonialCarousel />
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Frequently Asked Questions</h2>
              <p className="text-slate-400 text-lg">Pertanyaan yang sering ditanyakan tentang program ini</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <FaqAccordion />
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 via-violet-900 to-indigo-900">
        <div className="container mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">
              Siap Untuk Mengubah Karir Kamu?
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Jangan sia-siakan kesempatan untuk belajar dari mentor berpengalaman dan bangun project yang akan
              membedakan kamu dari kandidat lain.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0 shadow-xl px-8 py-4 text-lg"
              >
                <a href="https://forms.gle/tnANAsCzMpc7M5cd7" target="_blank" rel="noopener noreferrer">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Daftar Sekarang
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg"
                asChild
              >
                <a href="https://wa.me/6289580886080" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Tanya Mentor
                </a>
              </Button>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.6}>
            <div className="mt-12 flex justify-center items-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-400" />
                <span>Built with passion</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-400" />
                <span>Next.js & Tailwind CSS</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/40 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-100">Mentoring with Aditya</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Program mentoring intensif untuk web developer yang ingin naik level dengan real project dan soft skill
                development.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/adityafakhrii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-slate-100 font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-slate-400 hover:text-purple-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-slate-100 font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-400">
                  <Mail className="w-4 h-4" />
                  <span>adityafakhri03@gmail.com</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <Phone className="w-4 h-4" />
                  <span>0895 8088 60080</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span>Bandung, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-white/10" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Mentoring with Aditya. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}