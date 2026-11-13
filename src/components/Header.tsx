import React, { useState, useEffect } from 'react';
import { INSTITUTIONAL_DATA } from '../data/legalData';
import { Menu, X, ArrowUpRight, Scale } from 'lucide-react';

interface HeaderProps {
  onOpenAppointmentModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Escritório', href: '#sobre' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Conteúdos', href: '#conteudos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#C49335]/20 py-3 shadow-2xl'
          : 'bg-[#050505]/80 backdrop-blur-sm border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
            aria-label="Valença & Alencar Advogados - Página Inicial"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0D1930] to-[#050505] border border-[#C49335]/40 flex items-center justify-center text-[#C49335] shadow-md group-hover:border-[#C49335] transition-colors">
              <Scale className="w-5 h-5 text-[#C49335]" />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-[#F4F2ED] transition-colors">
                VALENÇA <span className="text-[#C49335]">&</span> ALENCAR
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C49335]/90 font-medium">
                ADVOGADOS ASSOCIADOS
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#F4F2ED]/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#C49335] transition-colors whitespace-nowrap shrink-0 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C49335] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAppointmentModal}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#050505] bg-[#C49335] hover:bg-[#D4A345] rounded-full transition-all duration-200 shadow-lg hover:shadow-[#C49335]/30 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Atendimento</span>
              <span className="w-5 h-5 rounded-full bg-black/15 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-white hover:text-[#C49335] hover:bg-[#0D1930] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050505] border-b border-[#C49335]/30 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-white/90 hover:text-[#C49335] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#C49335] text-[#050505] font-semibold text-center uppercase tracking-wider text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Agendar Atendimento Institucional</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={`https://wa.me/${INSTITUTIONAL_DATA.whatsappRaw}?text=${encodeURIComponent(
                  INSTITUTIONAL_DATA.whatsappDefaultMsg
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-[#C49335]/40 text-[#C49335] font-medium text-center text-xs flex items-center justify-center gap-2 hover:bg-[#0D1930] transition-colors"
              >
                <span>Falar via WhatsApp</span>
                <span className="text-white/60">({INSTITUTIONAL_DATA.whatsappDisplay})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
