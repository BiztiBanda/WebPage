import { Mail, Phone, MapPin, Shield, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logo from '../assets/Screenshot2025-09-01130640.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const services = [
    "Penetrációs Tesztelés",
    "Biztonsági Tanácsadás", 
    "Incidenskezelés",
    "Biztonsági Képzés",
    "Compliance Audit",
    "Infrastruktúra Védelem"
  ]

  const quickLinks = [
    { name: "Kezdőlap", href: "#home" },
    { name: "Szolgáltatások", href: "#services" },
    { name: "Rólunk", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Kapcsolat", href: "#contact" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="BiztiBanda Logo" className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="text-xl font-bold">BiztiBanda</h3>
                <p className="text-sm text-gray-400">Cybersecurity Consulting</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Professzionális kiberbiztonsági szolgáltatások Erdélyben. 
              Védjük meg vállalkozását a digitális fenyegetésektől.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                f
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                t
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                in
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Szolgáltatások</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Gyors Linkek</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h5 className="font-medium mb-3">Jogi Információk</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Adatvédelmi Szabályzat
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Felhasználási Feltételek
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Cookie Szabályzat
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kapcsolat</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Sepsiszentgyörgy</p>
                  <p className="text-gray-400">Covasna megye, Románia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+40730123456" className="text-gray-400 hover:text-white transition-colors">
                  +40 730 123 456
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <a href="mailto:info@biztibanda.ro" className="text-gray-400 hover:text-white transition-colors">
                  info@biztibanda.ro
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-red-900/20 border border-red-800 rounded-lg">
              <div className="flex items-center mb-2">
                <Shield className="w-4 h-4 text-red-500 mr-2" />
                <span className="text-sm font-medium text-red-400">24/7 Sürgős Támogatás</span>
              </div>
              <p className="text-xs text-gray-400">
                Biztonsági incidensek esetén azonnal hívható
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 BiztiBanda. Minden jog fenntartva.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Kiberbiztonság Sepsiszentgyörgy számára | Ethical Hacking
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-xs">Készítve ❤️-vel Erdélyben</span>
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-gray-700 text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

