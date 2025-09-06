import { Calendar, User, ArrowRight, Shield, Lock, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Alapvető Kiberbiztonsági Lépés Kisvállalkozások Számára",
      excerpt: "Ismerje meg azokat az alapvető biztonsági intézkedéseket, amelyeket minden kisvállalkozásnak meg kell tennie a kiberfenyegetések ellen.",
      author: "BiztiBanda Csapat",
      date: "2024. március 15.",
      category: "Alapok",
      icon: <Shield className="w-5 h-5" />,
      readTime: "5 perc olvasás"
    },
    {
      id: 2,
      title: "Phishing Támadások Felismerése és Megelőzése",
      excerpt: "Hogyan azonosíthatja és kerülheti el a phishing támadásokat? Gyakorlati tippek és valós példák a mindennapi munkához.",
      author: "BiztiBanda Csapat",
      date: "2024. március 10.",
      category: "Fenyegetések",
      icon: <AlertTriangle className="w-5 h-5" />,
      readTime: "7 perc olvasás"
    },
    {
      id: 3,
      title: "Jelszókezelés 2024-ben: Legjobb Gyakorlatok",
      excerpt: "Modern jelszókezelési stratégiák és eszközök, amelyek megvédik vállalkozását a jelszó-alapú támadásoktól.",
      author: "BiztiBanda Csapat",
      date: "2024. március 5.",
      category: "Biztonság",
      icon: <Lock className="w-5 h-5" />,
      readTime: "6 perc olvasás"
    }
  ]

  const categories = [
    { name: "Összes", count: 12, active: true },
    { name: "Alapok", count: 4, active: false },
    { name: "Fenyegetések", count: 3, active: false },
    { name: "Biztonság", count: 5, active: false }
  ]

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Blog & Tudásbázis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hasznos cikkek, tippek és útmutatók a kiberbiztonsági tudatosság növeléséhez. 
            Naprakész információk a legújabb fenyegetésekről és védekezési módszerekről.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                category.active
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Post Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-600">
                    {post.icon}
                    <span className="ml-1">{post.category}</span>
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-red-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Post Footer */}
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group hover:bg-red-600 hover:text-white hover:border-red-600">
                  Tovább olvasom
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Iratkozzon fel hírlevelünkre
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Kapja meg a legfrissebb kiberbiztonsági híreket, tippeket és cikkeket közvetlenül az email címére.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email cím"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Button className="bg-red-600 hover:bg-red-700 px-8 py-3">
                Feliratkozás
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Bármikor leiratkozhat. Adatait biztonságban tartjuk.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog

