import { Play, Star, Quote } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  clientName: string;
  location: string;
  testimonial: string;
  rating: number;
}

export function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Dados de exemplo - você pode substituir pelos vídeos e depoimentos reais
  const projects: Project[] = [
    {
      id: 1,
      title: "Instalação Residencial - 5kWp",
      description: "Sistema completo de energia solar para residência de médio porte",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Substitua pelos vídeos reais
      thumbnail: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      clientName: "João Silva",
      location: "Barreiras - BA",
      testimonial: "Excelente trabalho! A equipe da Irrgasol foi muito profissional e o resultado superou minhas expectativas. Já estou economizando muito na conta de luz!",
      rating: 5
    },
    {
      id: 2,
      title: "Sistema de Bombeamento Solar",
      description: "Instalação de bomba solar para irrigação em propriedade rural",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Substitua pelos vídeos reais
      thumbnail: "https://images.unsplash.com/photo-1561115867-be8460fbebfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      clientName: "Maria Santos",
      location: "Luís Eduardo Magalhães - BA",
      testimonial: "A bomba solar revolucionou minha irrigação! Não pago mais energia elétrica e o sistema funciona perfeitamente. Recomendo muito!",
      rating: 5
    },
    {
      id: 3,
      title: "Instalação Residencial - 8kWp",
      description: "Sistema de grande porte para residência com alto consumo",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Substitua pelos vídeos reais
      thumbnail: "https://images.unsplash.com/photo-1626251376234-8bc112f0bcd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      clientName: "Pedro Oliveira",
      location: "Barreiras - BA",
      testimonial: "Investimento que já está se pagando! A instalação foi rápida e limpa, e o sistema está gerando até mais energia do que o previsto.",
      rating: 5
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
            <Play className="text-green-600" size={20} />
            <span className="text-sm text-green-700">Projetos Realizados</span>
          </div>
          <h2 className="text-gray-900 mb-4">
            Veja Nossos Trabalhos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos projetos que já realizamos e os depoimentos 
            de clientes satisfeitos com a economia e qualidade dos nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              {/* Thumbnail do Vídeo */}
              <div className="relative h-56 overflow-hidden group cursor-pointer">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  onClick={() => setSelectedVideo(project.videoUrl)}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors"
                >
                  <div className="bg-green-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="text-white" size={32} fill="white" />
                  </div>
                </div>
              </div>

              {/* Informações do Projeto */}
              <div className="p-6">
                <h3 className="text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Depoimento */}
                <div className="bg-green-50 p-4 rounded-xl mb-4 relative">
                  <Quote className="absolute top-2 left-2 text-green-200" size={24} />
                  <p className="text-sm text-gray-700 italic pl-6">
                    {'"'}{project.testimonial}{'"'}
                  </p>
                </div>

                {/* Cliente */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900">{project.clientName}</p>
                    <p className="text-xs text-gray-500">{project.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: project.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Vídeo */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-green-400 transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src={selectedVideo}
                  title="Video do projeto"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Quer fazer parte dos nossos casos de sucesso?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("calculator");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            Faça Sua Simulação Agora
          </button>
        </div>
      </div>
    </section>
  );
}
