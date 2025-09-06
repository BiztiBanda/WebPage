import { useState } from 'react'
import { Menu, X, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logo from '../assets/Screenshot2025-09-01130640.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="BiztiBanda Logo" className="h-12 w-12 rounded-full" />
            <div>
              <h1 className="text-xl font-bold">BiztiBanda</h1>
              <p className="text-sm text-gray-300">Cybersecurity Consulting</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">Kezdőlap</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Szolgáltatások</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Rólunk</a>
            <a href="#blog" className="hover:text-blue-400 transition-colors">Blog</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Kapcsolat</a>
            <Button className="bg-red-600 hover:bg-red-700">
              <Shield className="w-4 h-4 mr-2" />
              Ingyenes Konzultáció
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-blue-400 transition-colors" onClick={toggleMenu}>Kezdőlap</a>
              <a href="#services" className="hover:text-blue-400 transition-colors" onClick={toggleMenu}>Szolgáltatások</a>
              <a href="#about" className="hover:text-blue-400 transition-colors" onClick={toggleMenu}>Rólunk</a>
              <a href="#blog" className="hover:text-blue-400 transition-colors" onClick={toggleMenu}>Blog</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors" onClick={toggleMenu}>Kapcsolat</a>
              <Button className="bg-red-600 hover:bg-red-700 w-full">
                <Shield className="w-4 h-4 mr-2" />
                Ingyenes Konzultáció
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

