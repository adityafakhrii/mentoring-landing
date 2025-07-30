import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Mentoring with Aditya",
  description: "Laravel & Soft Skill Intensive Mentoring Program",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}
