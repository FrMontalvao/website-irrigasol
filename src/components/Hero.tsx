import { Sun, ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Sun className="text-green-600" size={20} />
              <span className="text-sm text-gray-700">Energia Limpa e Renovável</span>
            </div>
            
            <h1 className="text-gray-900">
              Economia e Sustentabilidade com Energia Solar
            </h1>
            
            <p className="text-gray-600">
              Soluções completas em energia solar para sua casa ou propriedade rural. 
              Reduza sua conta de energia e invista no futuro sustentável com a Irrgasol.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Solicite um Orçamento
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-all"
              >
                Conheça os Serviços
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-green-600">5+</div>
                <p className="text-sm text-gray-600">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <div className="text-green-600">500+</div>
                <p className="text-sm text-gray-600">Projetos Instalados</p>
              </div>
              <div className="text-center">
                <div className="text-green-600">95%</div>
                <p className="text-sm text-gray-600">Economia Média</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MXx8fHwxNzY1MTMzMzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Painéis solares instalados"
              className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}