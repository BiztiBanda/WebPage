import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      details: ["+40 730 123 456", "Hétfő-Péntek 9:00-18:00"],
      color: "text-blue-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@biztibanda.ro", "24 órán belül válaszolunk"],
      color: "text-red-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Cím",
      details: ["Sepsiszentgyörgy", "Covasna megye, Románia"],
      color: "text-purple-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Nyitvatartás",
      details: ["Hétfő-Péntek: 9:00-18:00", "Hétvégén: Sürgős esetekben"],
      color: "text-green-500"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kapcsolat
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Készen állunk segíteni! Vegye fel velünk a kapcsolatot ingyenes konzultációért 
            vagy bármilyen kiberbiztonsági kérdéssel kapcsolatban.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Küldjön üzenetet
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Név *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Az Ön neve"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="+40 123 456 789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vállalat
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Vállalat neve"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Szolgáltatás típusa
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option value="">Válasszon szolgáltatást</option>
                  <option value="penetration-testing">Penetrációs Tesztelés</option>
                  <option value="security-consulting">Biztonsági Tanácsadás</option>
                  <option value="incident-response">Incidenskezelés</option>
                  <option value="security-training">Biztonsági Képzés</option>
                  <option value="compliance-audit">Compliance Audit</option>
                  <option value="other">Egyéb</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Üzenet *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  placeholder="Írja le részletesen, miben segíthetünk..."
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 mr-3"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Elfogadom az adatvédelmi szabályzatot és hozzájárulok személyes adataim kezeléséhez. *
                </label>
              </div>

              <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-lg py-4">
                <Send className="w-5 h-5 mr-2" />
                Üzenet Küldése
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Elérhetőségek
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Több módon is kapcsolatba léphet velünk. Válassza ki az Önnek legmegfelelőbb módot!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className={`${info.color} mt-1`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-red-500 mr-3" />
                <h4 className="font-semibold text-red-900">
                  Sürgős Biztonsági Incidens?
                </h4>
              </div>
              <p className="text-red-700 mb-4">
                Ha sürgős biztonsági incidensről van szó, azonnal hívjon minket!
              </p>
              <Button className="bg-red-600 hover:bg-red-700">
                <Phone className="w-4 h-4 mr-2" />
                Sürgős Hívás: +40 730 123 456
              </Button>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">
                Kövessen minket
              </h4>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

