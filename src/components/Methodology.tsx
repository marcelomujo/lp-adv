import React from 'react';
import { METHODOLOGY_STEPS } from '../data/legalData';
import { Scale, ShieldCheck, ArrowRight } from 'lucide-react';

interface MethodologyProps {
  onOpenAppointmentModal: () => void;
}

export const Methodology: React.FC<MethodologyProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="metodologia" className="py-20 lg:py-28 bg-[#0D1930] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#C49335]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C49335] mb-2">
            <Scale className="w-4 h-4" />
            <span>Rigor Operacional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Metodologia de <span className="text-[#C49335]">Atendimento</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F4F2ED]/75 mt-4 font-light leading-relaxed">
            Nossa atuação baseia-se em etapas claras, previsíveis e transparentes. Rejeitamos
            promessas infundadas de resultado, focando na excelência da técnica jurídica, na
            lealdade ao cliente e na segurança documental.
          </p>
        </div>

        {/* 5-Step Flow Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {METHODOLOGY_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="bg-[#050505]/70 hover:bg-[#050505] border border-[#C49335]/20 hover:border-[#C49335]/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 shadow-xl group relative"
            >
              <div>
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#0D1930] border border-[#C49335]/30 text-[#C49335] font-cinzel text-xs font-bold flex items-center justify-center shadow-inner group-hover:border-[#C49335] transition-colors">
                    {item.step}
                  </span>
                  {index < METHODOLOGY_STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-[#C49335]/40 group-hover:text-[#C49335] transition-colors" />
                  )}
                </div>

                {/* Step Title */}
                <h3 className="text-sm font-serif font-bold text-white group-hover:text-[#C49335] transition-colors mb-2.5 leading-snug">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-[#F4F2ED]/70 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom hairline */}
              <div className="pt-4 mt-4 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-wider text-[#C49335]/70 font-medium">
                  Etapa {index + 1} de 5
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Box Callout */}
        <div className="mt-12 bg-[#050505] border border-[#C49335]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C49335]/15 border border-[#C49335]/30 flex items-center justify-center text-[#C49335] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wide">
                Garantia de Meio e Diligência Técnica
              </h4>
              <p className="text-xs text-[#F4F2ED]/75 font-light leading-relaxed mt-0.5">
                Conforme o Código de Ética da OAB, a advocacia é atividade de meio. Empregamos todos os recursos doutrinários, processuais e jurisprudenciais cabíveis para a mais vigorosa defesa de seus direitos.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenAppointmentModal}
            className="px-6 py-3 rounded-full bg-[#C49335] hover:bg-[#D4A345] text-[#050505] font-semibold text-xs uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer shadow-lg shrink-0"
          >
            Iniciar Triagem
          </button>
        </div>

      </div>
    </section>
  );
};
