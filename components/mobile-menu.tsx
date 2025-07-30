"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

interface MobileMenuProps {
  links: { href: string; label: string }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="md:hidden bg-transparent hover:bg-white/10 text-slate-200"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-50 bg-gradient-to-br from-[#4c1d95] via-[#1e1b4b] to-black p-4"
          >
            <nav className="flex flex-col space-y-4 pt-4 px-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-slate-200 text-lg py-2 px-4 hover:bg-white/10 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="mt-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white border-0 shadow-lg"
                onClick={closeMenu}
              >
                <a href="https://forms.gle/tnANAsCzMpc7M5cd7" target="_blank" rel="noopener noreferrer">
                  Daftar Sekarang
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
