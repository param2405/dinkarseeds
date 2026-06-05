import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Infrastructure', href: '#infrastructure' },
  ]

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isSticky ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
    >
      <div className="container-safe py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 bg-primary-green rounded-full flex items-center justify-center">
            <span className="text-white font-poppins font-bold text-lg">D</span>
          </div>
          <div className="flex flex-col">
            <span className="font-poppins font-bold text-primary-green text-lg">Dinkar</span>
            <span className="font-poppins text-xs text-secondary-green">Seeds</span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="text-text-dark font-medium hover:text-primary-green transition-colors"
              whileHover={{ y: -2 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-accent-gold hover:bg-yellow-600 text-text-dark font-semibold px-6 py-2 rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone size={18} />
          Contact
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-gray-200"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="container-safe py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-dark font-medium hover:text-primary-green"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary w-full justify-center flex items-center gap-2">
              <Phone size={18} />
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
