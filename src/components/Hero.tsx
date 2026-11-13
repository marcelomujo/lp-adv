import React, { useState } from 'react';
import { INSTITUTIONAL_DATA, OFFICE_IMAGES, TEAM_MEMBERS } from '../data/legalData';
import { Scale, Phone, ArrowUpRight, ShieldCheck, Award } from 'lucide-react';

interface HeroProps {
  onOpenAppointmentModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  const [heroImgError, setHeroImgError] = useState(false);
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#050505] flex items-center"
    >
      {/* Background Ambience: Subtle Golden Halo & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C49335]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#0D1930]/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Subtle Legal Background Watermark */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <Scale className="w-[580px] h-[580px] text-[#C49335]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Institutional Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0D1930] border border-[#C49335]/30 text-xs font-medium text-[#C49335]">
              <Scale className="w-3.5 h-3.5" />
              <span>Advocacia Institucional &amp; Consultoria Estratégica</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] text-balance">
              Defesa Estratégica &amp;{' '}
              <span className="text-[#C49335] italic">Excelência</span> Jurídica
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-[#F4F2ED]/85 leading-relaxed max-w-2xl font-light">
              Assessoramos empresas, investidores e famílias com rigor técnico aprofundado,
              lealdade e ética inegociável. Tradição forense aliada à visão de negócios para
              demandas consultivas e contenciosas de alta complexidade.
            </p>

            {/* CTAs: Primary Gold Button + Secondary Phone Badge */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Primary Consultation Button */}
              <button
                onClick={onOpenAppointmentModal}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#C49335] hover:bg-[#D4A345] text-[#050505] font-semibold text-sm tracking-wide transition-all duration-200 shadow-xl hover:shadow-[#C49335]/25 cursor-pointer whitespace-nowrap"
              >
                <span>Agendar Atendimento</span>
                <span className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-[#050505]" />
                </span>
              </button>

              {/* Call Headquarters Badge */}
              <a
                href={`tel:${INSTITUTIONAL_DATA.phoneRaw}`}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#0D1930] border border-[#C49335]/25 hover:border-[#C49335]/60 text-white hover:text-[#C49335] transition-all duration-200 shadow-md group whitespace-nowrap"
              >
                <span className="w-8 h-8 rounded-full bg-[#C49335]/15 border border-[#C49335]/30 flex items-center justify-center text-[#C49335]">
                  <Phone className="w-4 h-4" />
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] text-[#F4F2ED]/60 uppercase tracking-wider font-medium">
                    Sede São Paulo
                  </span>
                  <span className="text-sm font-semibold text-white tracking-wide">
                    {INSTITUTIONAL_DATA.phoneDisplay}
                  </span>
                </div>
              </a>
            </div>

            {/* Floating Trust Cards Row on Left Bottom */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl">
              {/* Card 1: Equipe Especializada & Avatares */}
              <div className="bg-[#0D1930]/90 backdrop-blur-md border border-[#C49335]/20 rounded-2xl p-4 flex items-center gap-3.5 shadow-lg">
                <div className="flex -space-x-2 overflow-hidden shrink-0">
                  {TEAM_MEMBERS.slice(0, 3).map((member) => (
                    <img
                      key={member.id}
                      src={member.image}
                      alt={member.name}
                      className="w-9 h-9 rounded-full object-cover object-top border-2 border-[#0D1930] bg-[#050505]"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white tracking-wide">
                    Corpo Jurídico Sênior
                  </span>
                  <span className="text-[11px] text-[#F4F2ED]/70">
                    Sócios especialistas e mestres
                  </span>
                </div>
              </div>

              {/* Card 2: Ética & Provimento OAB */}
              <div className="bg-[#0D1930]/90 backdrop-blur-md border border-[#C49335]/20 rounded-2xl p-4 flex items-center gap-3.5 shadow-lg">
                <div className="w-9 h-9 rounded-full bg-[#C49335]/15 border border-[#C49335]/30 flex items-center justify-center text-[#C49335] shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#C49335]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white tracking-wide">
                    Atuação Institucional
                  </span>
                  <span className="text-[11px] text-[#F4F2ED]/70">
                    OAB/SP 28.412 · Ética &amp; Sigilo
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition inspired directly by reference image */}
          <div className="lg:col-span-5 relative flex justify-center items-end mt-8 lg:mt-0">
            
            {/* The Golden Arc Backdrop */}
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-3xl overflow-hidden flex items-end justify-center bg-gradient-to-b from-[#0D1930]/80 via-[#0D1930] to-[#050505] border border-[#C49335]/30 shadow-2xl">
              
              {/* Warm Golden Circular Halo in Background of Portrait */}
              <div className="absolute top-1/4 -right-10 w-72 h-72 rounded-full bg-[#C49335]/30 blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-80 h-80 rounded-tl-full bg-[#C49335]/15 border-t border-l border-[#C49335]/40 pointer-events-none" />

              {/* Lawyer Portrait */}
              <div className="relative z-10 w-full h-full overflow-hidden flex items-end justify-center">
                {heroImgError ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#0D1930] to-[#050505] flex flex-col items-center justify-center p-6 text-center">
                    <Scale className="w-12 h-12 text-[#C49335]/70 mb-3" />
                    <span className="font-serif text-base text-white font-semibold">Dr. Marcelo Valença</span>
                    <span className="text-xs text-[#C49335] mt-1">Sócio Fundador · OAB/SP 184.290</span>
                  </div>
                ) : (
                  <img
                    src={OFFICE_IMAGES.heroPartner}
                    alt="Dr. Marcelo Valença - Sócio Fundador de Valença & Alencar Advogados"
                    className="w-full h-full object-cover object-top select-none"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgError(true)}
                  />
                )}
              </div>

              {/* Bottom Subtle Gradient Scrim */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent z-15 pointer-events-none" />

              {/* Floating Badge Top Right: Atendimento Exclusivo */}
              <div className="absolute top-6 right-6 z-20 bg-[#0D1930]/95 backdrop-blur-md border border-[#C49335]/40 rounded-xl p-2.5 shadow-2xl flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-lg bg-[#C49335]/20 flex items-center justify-center text-[#C49335]">
                  <Award className="w-4 h-4 text-[#C49335]" />
                </div>
                <div className="flex flex-col pr-1">
                  <span className="text-[11px] font-semibold text-white tracking-wide">
                    Atendimento Exclusivo
                  </span>
                  <span className="text-[9px] text-[#C49335]">
                    São Paulo &amp; Brasília
                  </span>
                </div>
              </div>

              {/* Floating Badge Bottom Left: Tradição Forense */}
              <div className="absolute bottom-5 left-5 z-20 bg-[#050505]/90 backdrop-blur-md border border-[#C49335]/30 rounded-xl px-3 py-2 shadow-2xl flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#C49335]" />
                <span className="text-[11px] font-medium text-white/90">
                  Defesa Técnica &amp; Independência
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
