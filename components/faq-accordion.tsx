"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Apakah program ini cocok untuk pemula?",
    answer:
      "Ya, program ini dirancang untuk web developer pemula yang ingin naik level. Kamu hanya perlu memahami dasar-dasar PHP dan konsep MVC. Semua materi akan dijelaskan step-by-step dengan bahasa yang mudah dipahami.",
  },
  {
    question: "Bagaimana format belajarnya?",
    answer:
      "Program ini terdiri dari 4 sesi live mentoring via Google Meet (masing-masing sekitar 1.5 - 2 jam), akses grup diskusi private, dan rekaman sesi yang bisa ditonton ulang. Kamu juga akan mendapatkan file materi dan source code project.",
  },
  {
    question: "Apakah ada sertifikat setelah selesai program?",
    answer:
      "Sertifikat ini opsional, kalau butuh nanti mentor bisa kasih. Kamu bisa menambahkannya ke CV atau LinkedIn profile kamu.",
  },
  {
    question: "Bagaimana jika saya tidak bisa mengikuti sesi live?",
    answer:
      "Tidak masalah! Semua sesi akan direkam dan bisa kamu tonton kapan saja. Kamu juga tetap bisa bertanya di grup diskusi private jika ada hal yang tidak kamu pahami.",
  },
  {
    question: "Apakah ada tugas atau project yang wajib dikerjakan?",
    answer:
      "Tugas atau project itu opsional, tapi kalau benar-benar butuh, mentor bisa kasih. Jadi kamu bisa menyesuaikan dengan kebutuhan dan waktu kamu.",
  },
]

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-b border-white/10"
        >
          <AccordionTrigger className="text-slate-100 dark:text-slate-100 light:text-gray-900 hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-600 text-left">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-slate-300">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
