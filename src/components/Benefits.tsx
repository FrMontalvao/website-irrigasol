import { TrendingDown, Leaf, Shield, Zap, Sun, Award } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Economia na Conta de Luz",
      description: "Reduza até 95% do valor da sua conta de energia elétrica mensalmente."
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Energia limpa e renovável, reduzindo impactos ambientais."
    },
    {
      icon: Shield,
      title: "Garantia e Qualidade",
      description: "Equipamentos de primeira linha com garantia estendida."
    },
    {
      icon: Zap,
      title: "Instalação Rápida",
      description: "Processo ágil com equipe técnica especializada e certificada."
    },
    {
      icon: Sun,
      title: "Valorização do Imóvel",
      description: "Imóveis com energia solar têm valorização de até 10%."
    },
    {
      icon: Award,
      title: "Retorno do Investimento",
      description: "Recupere o investimento em 3 a 5 anos com a economia gerada."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
            <Sun className="text-green-600" size={20} />
            <span className="text-sm text-green-700">Vantagens</span>
          </div>
          <h2 className="text-gray-900 mb-4">
            Por Que Escolher Energia Solar?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Investir em energia solar é investir no seu futuro. Conheça os principais 
            benefícios de fazer parte da revolução da energia limpa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-all group"
            >
              <div className="bg-gradient-to-r from-green-600 to-green-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">


                  <benefit.icon className="text-white" size={24} />
              </div>
              <h3 className="text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="mb-4">
            Pronto para Economizar com Energia Solar?
          </h3>
          <p className="mb-6 text-yellow-50">
            Entre em contato conosco e receba um orçamento personalizado sem compromisso.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-white text-green-700 px-8 py-3 rounded-lg hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            Solicitar Orçamento Grátis
          </button>
        </div>
      </div>
    </section>
  );
}