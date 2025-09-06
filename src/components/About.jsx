import { Users, Award, MapPin, Target, Heart, Zap } from 'lucide-react'
import teamLogo from '../assets/519396065_122095710152957339_7155518060989866873_n.jpg'

const About = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precizitás",
      description: "Minden projekthez alapos és módszeres megközelítést alkalmazunk."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Etikus Szemlélet",
      description: "Minden tevékenységünket etikus elvek és átláthatóság jellemzi."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Gyors Reagálás",
      description: "24/7 elérhetőség és azonnali válaszadás kritikus helyzetekben."
    }
  ]

  const stats = [
    { number: "5+", label: "Év Tapasztalat" },
    { number: "50+", label: "Sikeres Projekt" },
    { number: "100%", label: "Ügyfél Elégedettség" },
    { number: "24/7", label: "Támogatás" }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Rólunk
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Erdélyi kiberbiztonsági szakértők, akik helyi ismeretekkel és nemzetközi tapasztalattal 
            védik meg vállalkozását a digitális fenyegetésektől.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Biztonság <span className="text-red-500">Erdély</span> szívében
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A BiztiBanda csapata tapasztalt kiberbiztonsági szakértőkből áll, akik mélyen értik 
                a helyi vállalkozások igényeit és kihívásait. Sepsiszentgyörgyből kiindulva szolgáljuk 
                ki Erdély és egész Románia magyar vállalkozásait.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Küldetésünk, hogy a legmodernebb kiberbiztonsági megoldásokat tegyük elérhetővé 
                minden méretű vállalkozás számára, személyre szabott szolgáltatásokkal és 
                folyamatos támogatással.
              </p>
            </div>

            {/* Location Info */}
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <MapPin className="w-8 h-8 text-red-500" />
              <div>
                <h4 className="font-semibold text-gray-900">Sepsiszentgyörgy, Románia</h4>
                <p className="text-gray-600">Helyi jelenlét, nemzetközi tapasztalat</p>
              </div>
            </div>
          </div>

          {/* Right Content - Team Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={teamLogo} 
                alt="BiztiBanda Team" 
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Értékeink
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-500 rounded-full mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-red-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <Award className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Küldetésünk
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              "Minden erdélyi vállalkozás megérdemli a legmagasabb szintű kiberbiztonsági védelmet. 
              Célunk, hogy a legmodernebb technológiákat és szakértelmet helyi nyelven, 
              személyes megközelítéssel tegyük elérhetővé."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

