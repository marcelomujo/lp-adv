import React from 'react';
import { INSTITUTIONAL_DATA, PRACTICE_AREAS } from '../data/legalData';
import { Scale, ShieldCheck, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenLegalModal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#C49335]/25 text-[#F4F2ED] relative z-20">
      
      {/* Upper Footer: Main columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Institutional Wordmark, OAB registration & Ethos (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0D1930] border border-[#C49335]/40 flex items-center justify-center text-[#C49335] shadow-md">
                <Scale className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-lg font-bold tracking-wider text-white">
                  VALENÇA <span className="text-[#C49335]">&</span> ALENCAR
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C49335] font-semibold">
                  ADVOGADOS ASSOCIADOS
                </span>
              </div>
            </div>

            <p className="text-xs text-[#F4F2ED]/70 leading-relaxed font-light">
              Sociedade de advogados inscrita na Ordem dos Advogados do Brasil, Seccional de São Paulo, sob o nº <strong>28.412</strong>. Atuação consultiva e contenciosa estratégica com independência técnica e rigor ético.
            </p>

            <div className="pt-2 flex flex-col space-y-1.5 text-xs text-[#F4F2ED]/80">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C49335]" />
                <span>{INSTITUTIONAL_DATA.phoneDisplay} · Sede SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C49335]" />
                <span className="font-mono">{INSTITUTIONAL_DATA.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Institutional Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C49335] font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-[#F4F2ED]/80 font-light">
              <li>
                <a href="#inicio" className="hover:text-[#C49335] transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#C49335] transition-colors">O Escritório</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#C49335] transition-colors">Áreas de Atuação</a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-[#C49335] transition-colors">Corpo Jurídico</a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-[#C49335] transition-colors">Metodologia</a>
              </li>
              <li>
                <a href="#conteudos" className="hover:text-[#C49335] transition-colors">Informativo Jurídico</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#C49335] transition-colors">Atendimento</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Areas Quick List (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C49335] font-semibold">
              Áreas de Prática
            </h4>
            <ul className="space-y-1.5 text-xs text-[#F4F2ED]/70 font-light">
              {PRACTICE_AREAS.slice(0, 6).map((pa) => (
                <li key={pa.id}>
                  <a href="#areas" className="hover:text-[#C49335] transition-colors line-clamp-1">
                    {pa.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Sedes & Unidades Físicas (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C49335] font-semibold">
              Sedes Físicas
            </h4>
            <div className="space-y-3 text-xs text-[#F4F2ED]/75 font-light">
              <div>
                <strong className="text-white block font-medium">São Paulo (Sede)</strong>
                <span>{INSTITUTIONAL_DATA.headquarters.address}</span>
                <span className="block text-[11px] text-[#F4F2ED]/50">{INSTITUTIONAL_DATA.headquarters.neighborhood}</span>
              </div>
              <div>
                <strong className="text-white block font-medium">Brasília (Unidade Tribunais)</strong>
                <span>{INSTITUTIONAL_DATA.branch.address}</span>
                <span className="block text-[11px] text-[#F4F2ED]/50">{INSTITUTIONAL_DATA.branch.neighborhood}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Middle Bar: OAB Deontological Disclaimer */}
      <div className="bg-[#0D1930] py-4 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#C49335] shrink-0 mt-0.5" />
          <p className="text-[11px] text-[#F4F2ED]/70 font-light leading-relaxed">
            {INSTITUTIONAL_DATA.oabEthicsNotice}
          </p>
        </div>
      </div>

      {/* Lower Bar: Copyright, Legal Links & Back to Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4F2ED]/60 font-light">
        <div>
          &copy; {new Date().getFullYear()} {INSTITUTIONAL_DATA.legalEntity} · Todos os direitos reservados.
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => onOpenLegalModal('privacy')}
            className="hover:text-[#C49335] transition-colors cursor-pointer"
          >
            Política de Privacidade (LGPD)
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={() => onOpenLegalModal('terms')}
            className="hover:text-[#C49335] transition-colors cursor-pointer"
          >
            Termos de Uso &amp; Sigilo
          </button>
          <span className="text-white/20">|</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#C49335] hover:text-[#D4A345] transition-colors cursor-pointer"
            aria-label="Voltar ao início da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </footer>
  );
};
