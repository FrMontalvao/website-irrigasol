import { Home, Droplets, Zap, TrendingDown } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Home,
      title: "Instalação Residencial",
      description: "Painéis solares de alta eficiência para sua residência. Reduza até 95% da sua conta de energia elétrica.",
      features: [
        "Projeto personalizado",
        "Instalação profissional",
        "Manutenção incluída",
        "Garantia estendida"
      ],
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MXx8fHwxNzY1MTMzMzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Droplets,
      title: "Bombas Solares",
      description: "Sistemas de bombeamento movidos a energia solar para propriedades rurais. Irrigação sustentável e econômica.",
      features: [
        "Sem custo de energia",
        "Ideal para áreas rurais",
        "Baixa manutenção",
        "Alta durabilidade"
      ],
      image: "https://images.unsplash.com/photo-1561115867-be8460fbebfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHdhdGVyJTIwcHVtcHxlbnwxfHx8fDE3NjUxMzMzNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <Zap className="text-green-600" size={20} />
            <span className="text-sm text-green-700">Nossos Serviços</span>
          </div>
          <h2 className="text-gray-900 mb-4">
            Soluções em Energia Solar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos as melhores soluções em energia solar para diferentes necessidades, 
            com qualidade garantida e economia real na sua conta de energia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8">
                <div className="bg-gradient-to-br from-green-600 to-green-700 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="bg-green-500 rounded-full p-1">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="mt-6 w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-lg hover:shadow-lg transition-all"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}