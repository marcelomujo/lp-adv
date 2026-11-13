import React, { useState } from 'react';
import { INSTITUTIONAL_DATA, PRACTICE_AREAS } from '../data/legalData';
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Building,
  ArrowUpRight
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [activeUnit, setActiveUnit] = useState<'sp' | 'df'>('sp');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    message: '',
    lgpdConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [protocolNumber, setProtocolNumber] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Por favor, informe seu nome completo.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Informe um endereço de e-mail válido.';
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      errs.phone = 'Informe seu telefone ou WhatsApp com DDD.';
    }
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = 'Descreva brevemente a demanda (mínimo de 15 caracteres).';
    }
    if (!formData.lgpdConsent) {
      errs.lgpd = 'É necessário concordar com os termos de sigilo e tratamento de dados.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const generatedProtocol = `VAL-${new Date().getFullYear()}-${Math.floor(
        100000 + Math.random() * 900000
      )}`;
      setProtocolNumber(generatedProtocol);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      area: '',
      message: '',
      lgpdConsent: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#050505] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#0D1930]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C49335] mb-2">
            <Mail className="w-4 h-4" />
            <span>Canais Oficiais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Atendimento <span className="text-[#C49335]">Institucional</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F4F2ED]/75 mt-4 font-light leading-relaxed">
            Entre em contato para agendamento de consultas ou triagem técnica de sua demanda.
            Nosso atendimento é pautado pelo rigor ético e pelo sigilo absoluto previsto no Estatuto da Advocacia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Units, Phone, WhatsApp, Maps (7 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Action Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${INSTITUTIONAL_DATA.whatsappRaw}?text=${encodeURIComponent(
                  INSTITUTIONAL_DATA.whatsappDefaultMsg
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0D1930] border border-[#C49335]/30 hover:border-[#C49335] rounded-2xl p-5 flex items-center gap-4 transition-all duration-200 shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] text-[#C49335] uppercase font-semibold tracking-wider block">
                    WhatsApp Institucional
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-[#C49335] transition-colors">
                    {INSTITUTIONAL_DATA.whatsappDisplay}
                  </span>
                  <span className="text-[10px] text-[#F4F2ED]/60 block mt-0.5">
                    Atendimento imediato em horário comercial
                  </span>
                </div>
              </a>

              {/* Central Phone Card */}
              <a
                href={`tel:${INSTITUTIONAL_DATA.phoneRaw}`}
                className="bg-[#0D1930] border border-[#C49335]/30 hover:border-[#C49335] rounded-2xl p-5 flex items-center gap-4 transition-all duration-200 shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C49335]/15 border border-[#C49335]/40 flex items-center justify-center text-[#C49335] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] text-[#C49335] uppercase font-semibold tracking-wider block">
                    Central Telefônica
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-[#C49335] transition-colors">
                    {INSTITUTIONAL_DATA.phoneDisplay}
                  </span>
                  <span className="text-[10px] text-[#F4F2ED]/60 block mt-0.5">
                    PABX Sede Faria Lima
                  </span>
                </div>
              </a>
            </div>

            {/* Email & Business Hours Strip */}
            <div className="bg-[#0D1930]/80 border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C49335]" />
                <div>
                  <span className="text-white/60 block text-[10px] uppercase tracking-wider">E-mail Oficial</span>
                  <span className="text-white font-mono text-xs">{INSTITUTIONAL_DATA.email}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C49335]" />
                <div>
                  <span className="text-white/60 block text-[10px] uppercase tracking-wider">Horário de Expediente</span>
                  <span className="text-white font-medium text-xs">{INSTITUTIONAL_DATA.hours}</span>
                </div>
              </div>
            </div>

            {/* Office Units Selector */}
            <div className="bg-[#0D1930] border border-[#C49335]/25 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2 text-white font-serif font-bold text-base">
                  <Building className="w-4 h-4 text-[#C49335]" />
                  <span>Nossas Unidades Físicas</span>
                </div>
                <div className="flex items-center gap-1 p-1 bg-[#050505] rounded-xl border border-white/5">
                  <button
                    onClick={() => setActiveUnit('sp')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeUnit === 'sp'
                        ? 'bg-[#C49335] text-[#050505]'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    São Paulo - SP
                  </button>
                  <button
                    onClick={() => setActiveUnit('df')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      activeUnit === 'df'
                        ? 'bg-[#C49335] text-[#050505]'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Brasília - DF
                  </button>
                </div>
              </div>

              {/* Active Unit Info */}
              {activeUnit === 'sp' ? (
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C49335] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Sede Corporativa - São Paulo
                      </h4>
                      <p className="text-xs text-[#F4F2ED]/80 font-light mt-0.5">
                        {INSTITUTIONAL_DATA.headquarters.address}
                      </p>
                      <p className="text-xs text-[#F4F2ED]/60 font-light">
                        {INSTITUTIONAL_DATA.headquarters.neighborhood} · CEP {INSTITUTIONAL_DATA.headquarters.cep}
                      </p>
                    </div>
                  </div>

                  {/* Stylized Map View */}
                  <div className="mt-4 rounded-xl overflow-hidden border border-white/10 h-44 bg-[#050505] relative flex items-center justify-center">
                    <iframe
                      title="Mapa da Sede São Paulo"
                      src="https://maps.google.com/maps?q=Av.+Brigadeiro+Faria+Lima,+3477,+Itaim+Bibi,+S%C3%A3o+Paulo+-+SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-70"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 right-2 bg-[#050505]/90 border border-[#C49335]/40 rounded-lg px-2.5 py-1 text-[10px] text-[#C49335] font-semibold flex items-center gap-1 shadow-md">
                      <span>Faria Lima · Itaim Bibi</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C49335] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Unidade Tribunais Superiores - Brasília
                      </h4>
                      <p className="text-xs text-[#F4F2ED]/80 font-light mt-0.5">
                        {INSTITUTIONAL_DATA.branch.address}
                      </p>
                      <p className="text-xs text-[#F4F2ED]/60 font-light">
                        {INSTITUTIONAL_DATA.branch.neighborhood} · CEP {INSTITUTIONAL_DATA.branch.cep}
                      </p>
                    </div>
                  </div>

                  {/* Stylized Map View */}
                  <div className="mt-4 rounded-xl overflow-hidden border border-white/10 h-44 bg-[#050505] relative flex items-center justify-center">
                    <iframe
                      title="Mapa da Unidade Brasília"
                      src="https://maps.google.com/maps?q=Setor+Bancario+Sul+Quadra+2+Bloco+E+Edificio+Prime+Brasilia+DF&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-70"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 right-2 bg-[#050505]/90 border border-[#C49335]/40 rounded-lg px-2.5 py-1 text-[10px] text-[#C49335] font-semibold flex items-center gap-1 shadow-md">
                      <span>SBS · Asa Sul</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Institutional Contact Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-[#0D1930] border border-[#C49335]/35 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-xs uppercase tracking-widest text-[#C49335] font-semibold block mb-1">
                  Formulário Institucional
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                  Solicitação de Atendimento &amp; Triagem
                </h3>
                <p className="text-xs text-[#F4F2ED]/70 mt-1 font-light">
                  Preencha os campos para que nossa secretaria jurídica direcione sua consulta ao sócio da respectiva matéria.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#C49335]/20 border border-[#C49335] mx-auto flex items-center justify-center text-[#C49335]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-white">
                    Solicitação Recebida com Sucesso
                  </h4>
                  <p className="text-xs text-[#F4F2ED]/80 max-w-md mx-auto leading-relaxed font-light">
                    Sua mensagem foi protocolada sob o número <strong className="text-[#C49335] font-mono">{protocolNumber}</strong>. Nossa equipe técnica efetuará a conferência prévia de conflito de interesses e entrará em contato em até 1 dia útil.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full bg-[#050505] hover:bg-black text-[#C49335] border border-[#C49335]/40 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-[#F4F2ED]/90 mb-1">
                      Nome Completo ou Razão Social <span className="text-[#C49335]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Dr. Roberto Guimarães ou Indústria Alpha S/A"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 focus:border-[#C49335] focus:outline-none text-xs text-white placeholder-white/30 transition-colors"
                    />
                    {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F4F2ED]/90 mb-1">
                        E-mail de Contato <span className="text-[#C49335]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seuemail@empresa.com.br"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 focus:border-[#C49335] focus:outline-none text-xs text-white placeholder-white/30 transition-colors"
                      />
                      {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F4F2ED]/90 mb-1">
                        Telefone / WhatsApp com DDD <span className="text-[#C49335]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(11) 98765-4321"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 focus:border-[#C49335] focus:outline-none text-xs text-white placeholder-white/30 transition-colors"
                      />
                      {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Practice Area Selection */}
                  <div>
                    <label className="block text-xs font-medium text-[#F4F2ED]/90 mb-1">
                      Área Jurídica Relacionada
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 focus:border-[#C49335] focus:outline-none text-xs text-white transition-colors cursor-pointer"
                    >
                      <option value="">Selecione uma área jurídica (ou Geral)</option>
                      {PRACTICE_AREAS.map((pa) => (
                        <option key={pa.id} value={pa.title}>
                          {pa.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-[#F4F2ED]/90 mb-1">
                      Breve Síntese da Demanda <span className="text-[#C49335]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Descreva de forma concisa os fatos e a orientação jurídica desejada..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 focus:border-[#C49335] focus:outline-none text-xs text-white placeholder-white/30 transition-colors resize-none"
                    />
                    {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                  </div>

                  {/* LGPD Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer text-left">
                      <input
                        type="checkbox"
                        checked={formData.lgpdConsent}
                        onChange={(e) => setFormData({ ...formData, lgpdConsent: e.target.checked })}
                        className="mt-0.5 rounded border-white/20 text-[#C49335] focus:ring-[#C49335] bg-[#050505] cursor-pointer"
                      />
                      <span className="text-[11px] text-[#F4F2ED]/75 leading-tight font-light">
                        Concordo com o tratamento dos dados fornecidos estritamente para a finalidade de atendimento prévio e triagem institucional, sob total sigilo profissional e em conformidade com a LGPD (Lei nº 13.709/2018).
                      </span>
                    </label>
                    {errors.lgpd && <p className="text-[11px] text-rose-400 mt-1">{errors.lgpd}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-[#C49335] hover:bg-[#D4A345] text-[#050505] font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-[#C49335]/30 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmitir Mensagem Institucional</span>
                    </button>
                  </div>
                </form>
              )}

              {/* Security Badge */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] text-white/50">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C49335]" />
                <span>Criptografia de ponta a ponta e sigilo legal nos termos do Art. 7º da Lei 8.906/94</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
