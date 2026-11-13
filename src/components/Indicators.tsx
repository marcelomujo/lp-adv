import React from 'react';
import { INDICATORS } from '../data/legalData';

export const Indicators: React.FC = () => {
  return (
    <section className="relative z-20 py-8 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {INDICATORS.map((indicator, index) => (
            <div
              key={index}
              className="bg-[#0D1930] border border-[#C49335]/25 hover:border-[#C49335]/50 rounded-2xl p-6 text-center transition-all duration-300 shadow-xl hover:-translate-y-1 group"
            >
              <div className="text-3xl sm:text-4xl font-serif font-bold text-white group-hover:text-[#C49335] transition-colors tabular-nums">
                {indicator.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-[#C49335] font-semibold mt-2">
                {indicator.label}
              </div>
              <p className="text-xs text-[#F4F2ED]/70 mt-2 font-light leading-relaxed">
                {indicator.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
