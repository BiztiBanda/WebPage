import { Shield, Search, Users, AlertTriangle, BookOpen, CheckCircle, Lock, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Services = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Penetrációs Tesztelés",
      description: "Átfogó biztonsági tesztelés rendszerei sebezhetőségének feltárására. Etikus hackelési technikákkal azonosítjuk a potenciális biztonsági réseket.",
      features: ["Webalkalmazás tesztelés", "Hálózati penetráció", "Vezeték nélküli audit", "Részletes jelentés"],
      color: "text-red-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Biztonsági Tanácsadás",
      description: "Személyre szabott biztonsági stratégia kidolgozása vállalkozása számára. Kockázatelemzés és biztonsági irányelvek meghatározása.",
      features: ["Kockázatelemzés", "Biztonsági politika", "Compliance audit", "Stratégiai tervezés"],
      color: "text-blue-400"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Incidenskezelés",
      description: "24/7 gyors reagálás biztonsági incidensek esetén. Helyreállítási terv kidolgozása és végrehajtása.",
      features: ["Azonnali reagálás", "Forensic analízis", "Helyreállítási terv", "Megelőzési stratégia"],
      color: "text-purple-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Biztonsági Képzés",
      description: "Munkatársai tudatosságának növelése a kiberfenyegetésekkel kapcsolatban. Gyakorlati képzések és szimulációk.",
      features: ["Phishing szimuláció", "Tudatossági képzés", "Biztonsági protokollok", "Rendszeres frissítések"],
      color: "text-green-400"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Compliance Audit",
      description: "GDPR, ISO 27001 és egyéb szabványoknak való megfelelés ellenőrzése. Compliance jelentések készítése.",
      features: ["GDPR megfelelőség", "ISO 27001 audit", "Jogszabályi követelmények", "Dokumentáció"],
      color: "text-yellow-400"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Infrastruktúra Védelem",
      description: "IT infrastruktúra átfogó védelme. Tűzfal konfiguráció, hálózati szegmentálás és monitoring.",
      features: ["Tűzfal konfiguráció", "Hálózati monitoring", "Endpoint védelem", "Backup stratégia"],
      color: "text-cyan-400"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Szolgáltatásaink
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Átfogó kiberbiztonsági megoldások kis- és középvállalkozások számára. 
            Professzionális szolgáltatások helyi szakértőktől.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${service.color} mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full hover:bg-gray-900 hover:text-white">
                Részletek
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Készen áll a biztonságos jövőre?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Kérjen ingyenes biztonsági felmérést és tudja meg, hogyan védheti meg vállalkozását a kiberfenyegetésektől.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-3">
              <Shield className="w-5 h-5 mr-2" />
              Ingyenes Konzultáció
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3">
              <Eye className="w-5 h-5 mr-2" />
              Kapcsolatfelvétel
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

