import { Calculator as CalcIcon, TrendingDown, Zap, DollarSign } from "lucide-react";
import React ,{ useState } from "react";


export function Calculator() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    bill1: "",
    bill2: "",
    bill3: ""
  });

  const [result, setResult] = useState<{
    average: number;
    annualCost: number;
    savings: number;
    systemSize: number;
    roi: number;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateSavings = (e: React.FormEvent) => {
    e.preventDefault();

    const bill1 = parseFloat(formData.bill1) || 0;
    const bill2 = parseFloat(formData.bill2) || 0;
    const bill3 = parseFloat(formData.bill3) || 0;

    // Calcula a média das 3 contas
    const average = (bill1 + bill2 + bill3) / 3;

    // Custo anual
    const annualCost = average * 12;

    // Economia de 90% (pode ajustar conforme necessário)
    const savingsPercentage = 0.90;
    const annualSavings = annualCost * savingsPercentage;

    // Estimativa de tamanho do sistema (aproximado)
    // Considerando R$ 0,80 por kWh e consumo médio
    const estimatedKwh = average / 0.80;
    const systemSize = estimatedKwh / 150; // kWp necessário

    // ROI estimado (considerando investimento médio de R$ 5.000 por kWp)
    const estimatedInvestment = systemSize * 5000;
    const roi = estimatedInvestment / annualSavings;

    setResult({
      average,
      annualCost,
      savings: annualSavings,
      systemSize: Math.ceil(systemSize * 10) / 10, // Arredonda para 1 casa decimal
      roi: Math.ceil(roi * 10) / 10
    });
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <CalcIcon className="text-green-600" size={20} />
            <span className="text-sm text-green-700">Calculadora</span>
          </div>
          <h2 className="text-gray-900 mb-4">
            Calcule Sua Economia
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra quanto você pode economizar com energia solar. 
            Preencha os dados abaixo e receba uma estimativa personalizada do projeto ideal para você.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={calculateSavings} className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                  placeholder="Seu nome"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                  placeholder="(77) 99999-9999"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block text-gray-700 mb-2">
                Endereço Completo *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                placeholder="Rua, número, bairro, cidade - Estado"
              />
            </div>

            <div className="mb-6">
              <h3 className="text-gray-900 mb-4">
                Valores das Últimas 3 Contas de Energia
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="bill1" className="block text-gray-700 mb-2">
                    1ª Conta (R$) *
                  </label>
                  <input
                    type="number"
                    id="bill1"
                    name="bill1"
                    value={formData.bill1}
                    onChange={handleChange}
                    required
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                    placeholder="0,00"
                  />
                </div>

                <div>
                  <label htmlFor="bill2" className="block text-gray-700 mb-2">
                    2ª Conta (R$) *
                  </label>
                  <input
                    type="number"
                    id="bill2"
                    name="bill2"
                    value={formData.bill2}
                    onChange={handleChange}
                    required
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                    placeholder="0,00"
                  />
                </div>

                <div>
                  <label htmlFor="bill3" className="block text-gray-700 mb-2">
                    3ª Conta (R$) *
                  </label>
                  <input
                    type="number"
                    id="bill3"
                    name="bill3"
                    value={formData.bill3}
                    onChange={handleChange}
                    required
                    step="0.01"
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                    placeholder="0,00"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <CalcIcon size={20} />
              Calcular Economia
            </button>
          </form>

          {result && (
            <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 border-2 border-green-300">
              <h3 className="text-gray-900 mb-6 text-center">
                Seu Projeto Ideal de Energia Solar
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8 ">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3 ">
                    <div className="bg-orange-500 p-2 rounded-lg">
                      <DollarSign className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Conta Média Mensal</p>
                      <p className="text-gray-900">{formatCurrency(result.average)}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-orange-500 p-2 rounded-lg">
                      <TrendingDown className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Gasto Anual Atual</p>
                      <p className="text-gray-900">{formatCurrency(result.annualCost)}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-500 p-2 rounded-lg">
                      <DollarSign className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Economia Anual Estimada</p>
                      <p className="text-green-700">{formatCurrency(result.savings)}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-orange-500 p-2 rounded-lg">
                      <Zap className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Tamanho do Sistema</p>
                      <p className="text-gray-900">{result.systemSize} kWp</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-xl text-white text-center">
                <p className="mb-2">Retorno do Investimento Estimado</p>
                <p className="text-white">
                  Aproximadamente {result.roi} anos
                </p>
                <p className="text-sm text-yellow-50 mt-2">
                  Após esse período, toda economia é lucro direto no seu bolso!
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">
                  Quer um orçamento detalhado e personalizado?
                </p>
                <button
                  onClick={() => {
                    const message = `Olá! Fiz uma simulação no site e gostaria de um orçamento detalhado.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nEndereço: ${formData.address}\nMédia da conta: ${formatCurrency(result.average)}\nSistema estimado: ${result.systemSize} kWp`;
                    const whatsappUrl = `https://wa.me/5577999736040?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Falar no WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}