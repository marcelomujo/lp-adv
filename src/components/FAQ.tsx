import React, { useState } from 'react';
import { FAQ_LIST } from '../data/legalData';
import { HelpCircle, ChevronDown, Scale } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#0D1930] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-[#C49335]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C49335] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Esclarecimentos Institucionais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Perguntas <span className="text-[#C49335]">Frequentes</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F4F2ED]/75 mt-4 font-light leading-relaxed max-w-2xl mx-auto">
            Informações objetivas sobre o funcionamento do escritório, agendamento de consultas,
            honorários e segurança jurídica no atendimento.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#050505]/80 border border-[#C49335]/25 hover:border-[#C49335]/45 rounded-2xl overflow-hidden transition-all duration-200 shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C49335]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-medium text-white tracking-wide pr-2">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full bg-[#0D1930] border border-[#C49335]/30 flex items-center justify-center text-[#C49335] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C49335] text-[#050505]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 border-t border-white/5 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-[#F4F2ED]/80 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
