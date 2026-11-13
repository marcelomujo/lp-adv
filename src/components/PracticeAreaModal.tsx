import React from 'react';
import { PracticeArea, INSTITUTIONAL_DATA } from '../data/legalData';
import {
  X,
  CheckCircle,
  FileText,
  ShieldCheck,
  ArrowUpRight,
  Briefcase,
  Scale,
  Users,
  Building2,
  FileSpreadsheet,
  Landmark,
  ShieldAlert,
  Gavel,
  BookOpenCheck
} from 'lucide-react';

interface PracticeAreaModalProps {
  area: PracticeArea | null;
  onClose: () => void;
  onOpenAppointmentModal: (preselectedArea?: string) => void;
}

const getAreaIcon = (iconName: string) => {
  switch (iconName) {
    case 'Briefcase':
      return <Briefcase className="w-6 h-6 text-[#C49335]" />;
    case 'Scale':
      return <Scale className="w-6 h-6 text-[#C49335]" />;
    case 'Users':
      return <Users className="w-6 h-6 text-[#C49335]" />;
    case 'Building2':
      return <Building2 className="w-6 h-6 text-[#C49335]" />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet className="w-6 h-6 text-[#C49335]" />;
    case 'Landmark':
      return <Landmark className="w-6 h-6 text-[#C49335]" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-6 h-6 text-[#C49335]" />;
    case 'Gavel':
      return <Gavel className="w-6 h-6 text-[#C49335]" />;
    case 'BookOpenCheck':
      return <BookOpenCheck className="w-6 h-6 text-[#C49335]" />;
    default:
      return <Scale className="w-6 h-6 text-[#C49335]" />;
  }
};

export const PracticeAreaModal: React.FC<PracticeAreaModalProps> = ({
  area,
  onClose,
  onOpenAppointmentModal
}) => {
  if (!area) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="practice-area-modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#0D1930] border border-[#C49335]/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-black/40 hover:bg-[#C49335]/20 text-white/70 hover:text-[#C49335] transition-colors cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#050505] border border-[#C49335]/30 flex items-center justify-center shrink-0">
            {getAreaIcon(area.iconName)}
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C49335] font-semibold">
              Área de Prática Jurídica · {area.number}
            </span>
            <h3
              id="practice-area-modal-title"
              className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight"
            >
              {area.title}
            </h3>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#C49335] font-semibold mb-2">
              Visão Geral &amp; Abordagem Técnica
            </h4>
            <p className="text-sm sm:text-base text-[#F4F2ED]/90 leading-relaxed font-light">
              {area.fullOverview}
            </p>
          </div>

          {/* Scope of Legal Services */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#C49335] font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#C49335]" />
              <span>Escopo de Serviços &amp; Atuação Típica</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {area.services.map((service, idx) => (
                <li
                  key={idx}
                  className="bg-[#050505]/60 border border-white/5 rounded-xl p-3 text-xs text-[#F4F2ED]/85 flex items-start gap-2.5"
                >
                  <span className="text-[#C49335] font-bold">·</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Documents Required */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#C49335] font-semibold mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#C49335]" />
              <span>Documentos Recomendados para Diagnóstico Inicial</span>
            </h4>
            <div className="bg-[#050505]/50 border border-white/5 rounded-xl p-4">
              <ul className="space-y-2 text-xs text-[#F4F2ED]/80">
                {area.documentsRequired.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C49335] shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Preventive Focus Callout */}
          <div className="bg-[#050505] border border-[#C49335]/30 rounded-2xl p-4 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C49335] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-1">
                Foco Preventivo &amp; Mitigação de Riscos
              </span>
              <p className="text-xs text-[#F4F2ED]/80 font-light leading-relaxed">
                {area.preventiveFocus}
              </p>
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="text-[11px] text-[#F4F2ED]/60 font-light">
              Atendimento em conformidade com as normas éticas do Provimento 205/2021 do CFOAB.
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenAppointmentModal(area.title);
              }}
              className="px-6 py-3 rounded-full bg-[#C49335] hover:bg-[#D4A345] text-[#050505] font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors cursor-pointer shadow-lg"
            >
              <span>Consultar Especialista Nesta Área</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
