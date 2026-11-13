import React, { useState } from 'react';
import { INSTITUTIONAL_DATA } from '../data/legalData';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Dialog */}
      {tooltipOpen && (
        <div className="mb-3 max-w-xs bg-[#0D1930] border border-[#C49335]/40 rounded-2xl p-4 shadow-2xl text-left animate-fadeIn relative">
          <button
            onClick={() => setTooltipOpen(false)}
            className="absolute top-2 right-2 p-1 text-white/50 hover:text-white"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            <span className="text-[11px] font-semibold text-[#C49335] uppercase tracking-wider">
              Secretaria Jurídica
            </span>
          </div>
          <p className="text-xs text-[#F4F2ED]/90 leading-relaxed font-light">
            Deseja atendimento direto com nossa equipe via WhatsApp? Estamos disponíveis para triagem e agendamentos.
          </p>
          <a
            href={`https://wa.me/${INSTITUTIONAL_DATA.whatsappRaw}?text=${encodeURIComponent(
              INSTITUTIONAL_DATA.whatsappDefaultMsg
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center w-full py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs transition-colors"
          >
            Abrir Conversa Oficial
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        <a
          href={`https://wa.me/${INSTITUTIONAL_DATA.whatsappRaw}?text=${encodeURIComponent(
            INSTITUTIONAL_DATA.whatsappDefaultMsg
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setTooltipOpen(true)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer border-2 border-white/20"
          aria-label="Falar no WhatsApp Institucional"
        >
          <MessageSquare className="w-7 h-7 text-[#050505]" />
        </a>
      </div>
    </div>
  );
};
