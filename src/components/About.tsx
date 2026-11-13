import React, { useState } from 'react';
import { OFFICE_IMAGES } from '../data/legalData';
import { Award, ShieldCheck, Scale, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onOpenAppointmentModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAppointmentModal }) => {
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#050505] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0D1930]/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Staggered Institutional Photography Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative grid grid-cols-2 gap-4 max-w-lg mx-auto lg:max-w-none">
              
              {/* Image 1: Boardroom Meeting */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-[#C49335]/20 shadow-2xl bg-[#0D1930]">
                {img1Error ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#0D1930] to-[#050505] flex flex-col items-center justify-center p-4 text-center">
                    <Scale className="w-8 h-8 text-[#C49335]/70 mb-2" />
                    <span className="text-xs text-[#F4F2ED]/80">Sala de Reuniões · Sede SP</span>
                  </div>
                ) : (
                  <img
                    src={OFFICE_IMAGES.boardroom}
                    alt="Sala de reuniões de diretoria jurídica de Valença & Alencar Advogados"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setImg1Error(true)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1930]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Image 2: Scales of Justice & Law Library */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-[#C49335]/20 shadow-2xl bg-[#0D1930] mt-8">
                {img2Error ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#0D1930] to-[#050505] flex flex-col items-center justify-center p-4 text-center">
                    <Scale className="w-8 h-8 text-[#C49335]/70 mb-2" />
                    <span className="text-xs text-[#F4F2ED]/80">Acervo Jurídico &amp; Tradição</span>
                  </div>
                ) : (
                  <img
                    src={OFFICE_IMAGES.justiceScales}
                    alt="Balança da justiça e acervo doutrinário do escritório"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={() => setImg2Error(true)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1930]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Floating Dark Navy Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-[#0D1930]/95 backdrop-blur-md border border-[#C49335]/40 rounded-2xl p-4 shadow-2xl text-center">
                <div className="flex items-center justify-center gap-2 text-[#C49335] text-xs font-semibold tracking-wider uppercase mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Compromisso Ético</span>
                </div>
                <p className="text-xs text-[#F4F2ED]/90 font-light">
                  Rigor técnico, sigilo absoluto e lealdade na defesa dos interesses de nossos constituintes.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Institutional Story, Values & Leadership */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C49335]">
              <Scale className="w-4 h-4" />
              <span>Sobre o Escritório</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.2] text-balance">
              Parceiro Jurídico Estratégico para Demandas{' '}
              <span className="text-[#C49335] italic">Complexas</span>
            </h2>

            {/* Narrative text */}
            <p className="text-base text-[#F4F2ED]/85 leading-relaxed font-light">
              Fundado com o propósito de aliar o rigor doutrinário tradicional à agilidade demandada
              pelo mundo empresarial contemporâneo, <strong className="text-white font-medium">Valença &amp; Alencar Advogados</strong> consolidou-se
              como referência no assessoramento preventivo e na condução de litígios estratégicos.
            </p>

            <p className="text-sm text-[#F4F2ED]/75 leading-relaxed font-light">
              Nossa prática rejeita soluções genéricas: cada caso é submetido a uma triagem minuciosa por
              nossos sócios titulares, garantindo teses consistentes perante os Tribunais e contratos
              estruturados com precisão cirúrgica.
            </p>

            {/* Two Side-by-side Navy Feature Cards (Just like in reference) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="bg-[#0D1930] border border-[#C49335]/20 hover:border-[#C49335]/40 rounded-2xl p-5 transition-colors shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-[#C49335]/15 border border-[#C49335]/30 flex items-center justify-center text-[#C49335] mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-white tracking-wide mb-1.5">
                  Corpo Jurídico Especializado
                </h3>
                <p className="text-xs text-[#F4F2ED]/70 font-light leading-relaxed">
                  Advogados formados e pós-graduados pelas mais renomadas faculdades de Direito do país (USP, PUC e UnB).
                </p>
              </div>

              <div className="bg-[#0D1930] border border-[#C49335]/20 hover:border-[#C49335]/40 rounded-2xl p-5 transition-colors shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-[#C49335]/15 border border-[#C49335]/30 flex items-center justify-center text-[#C49335] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-white tracking-wide mb-1.5">
                  Consultoria &amp; Contencioso
                </h3>
                <p className="text-xs text-[#F4F2ED]/70 font-light leading-relaxed">
                  Atuação preventiva para blindar negócios e representação vigorosa perante o Poder Judiciário e órgãos arbitrais.
                </p>
              </div>

            </div>

            {/* Principles Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#F4F2ED]/85">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C49335] shrink-0" />
                <span>Atendimento direto e contínuo pelos sócios</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C49335] shrink-0" />
                <span>Atuação em conformidade estrita com a OAB</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C49335] shrink-0" />
                <span>Sigilo e segurança da informação (LGPD)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C49335] shrink-0" />
                <span>Presença em São Paulo e Brasília</span>
              </div>
            </div>

            {/* Action & Founder Signature Row */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-6 border-t border-white/10">
              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#C49335] hover:bg-[#D4A345] text-[#050505] font-semibold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-lg whitespace-nowrap"
              >
                <span>Conhecer Nossas Sedes</span>
                <span className="w-5 h-5 rounded-full bg-black/15 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>

              {/* Founder Signature & Avatar */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C49335]/40 bg-[#0D1930] shrink-0 flex items-center justify-center">
                  {avatarError ? (
                    <span className="text-xs font-bold text-[#C49335]">MV</span>
                  ) : (
                    <img
                      src={OFFICE_IMAGES.heroPartner}
                      alt="Dr. Marcelo Valença"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() => setAvatarError(true)}
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-serif font-bold text-white tracking-wide">
                    Dr. Marcelo Valença
                  </span>
                  <span className="text-[11px] text-[#C49335] font-medium">
                    Sócio Fundador · OAB/SP 184.290
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
