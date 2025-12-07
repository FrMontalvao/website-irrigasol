import { Mail, Phone, MapPin, Send } from "lucide-react";
import React ,{ useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    alert("Obrigado pelo contato! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <Mail className="text-green-600" size={20} />
            <span className="text-sm text-green-700">Fale Conosco</span>
          </div>
          <h2 className="text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas e solicite um orçamento personalizado. 
            Nossa equipe está pronta para atendê-lo!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-900 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Telefone / WhatsApp</p>
                    <p className="text-gray-900">(77) 99973-6040</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">E-mail</p>
                    <p className="text-gray-900">orcamento@irrgasol.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Endereço</p>
                    <p className="text-gray-900">Montalvania, MG</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-xl">
              <h4 className="text-gray-900 mb-3">
                Horário de Atendimento
              </h4>
              <div className="space-y-2 text-gray-700">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 mb-2">
                  Serviço de Interesse *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="residential">Instalação Residencial</option>
                  <option value="pump">Bombas Solares</option>
                  <option value="both">Ambos os Serviços</option>
                  <option value="other">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  placeholder="Conte-nos mais sobre seu projeto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700
 text-white py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Enviar Mensagem
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}