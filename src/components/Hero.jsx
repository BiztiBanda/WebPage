import { Shield, Lock, Eye, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import heroLogo from '../assets/Screenshot2025-09-01130959.png'

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-red-500">Biztonság</span> a{' '}
                <span className="text-blue-400">digitális</span> világban
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Professzionális kiberbiztonsági tanácsadás Erdélyben. 
                Etikus hackelés, penetrációs tesztelés és biztonsági megoldások vállalkozások számára.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3">
                <Shield className="w-5 h-5 mr-2" />
                Ingyenes Felmérés
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white text-lg px-8 py-3">
                <Eye className="w-5 h-5 mr-2" />
                Szolgáltatások
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">5+</div>
                <div className="text-sm text-gray-400">Év Tapasztalat</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-gray-400">Sikeres Projekt</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-400">Támogatás</div>
              </div>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={heroLogo} 
                alt="BiztiBanda Team" 
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300">
            <Shield className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Penetrációs Tesztelés</h3>
            <p className="text-gray-400">Rendszerei sebezhetőségének feltárása etikus módszerekkel.</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300">
            <Lock className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Biztonsági Tanácsadás</h3>
            <p className="text-gray-400">Átfogó biztonsági stratégia kidolgozása vállalkozása számára.</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300">
            <Eye className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Incidenskezelés</h3>
            <p className="text-gray-400">Gyors reagálás és helyreállítás biztonsági incidensek esetén.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

