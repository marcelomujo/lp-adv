import React, { useState } from 'react';
import { PRACTICE_AREAS, PracticeArea } from '../data/legalData';
import { PracticeAreaModal } from './PracticeAreaModal';
import {
  ArrowUpRight,
  Briefcase,
  Scale,
  Users,
  Building2,
  FileSpreadsheet,
  Landmark,
  ShieldCheck,
  Gavel,
  BookOpenCheck
} from 'lucide-react';

interface PracticeAreasProps {
  onOpenAppointmentModal: (preselectedArea?: string) => void;
}

const renderIcon = (iconName: string) => {
  const iconProps = { className: 'w-6 h-6 text-[#C49335]' };
  switch (iconName) {
    case 'Briefcase':
      return <Briefcase {...iconProps} />;
    case 'Scale':
      return <Scale {...iconProps} />;
    case 'Users':
      return <Users {...iconProps} />;
    case 'Building2':
      return <Building2 {...iconProps} />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet {...iconProps} />;
    case 'Landmark':
      return <Landmark {...iconProps} />;
    case 'ShieldCheck':
      return <ShieldCheck {...iconProps} />;
    case 'Gavel':
      return <Gavel {...iconProps} />;
    case 'BookOpenCheck':
      return <BookOpenCheck {...iconProps} />;
    default:
      return <Scale {...iconProps} />;
  }
};

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onOpenAppointmentModal }) => {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  return (
    <section id="areas" className="py-20 lg:py-28 bg-[#0D1930] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#050505]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C49335]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Structured like reference image */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C49335] mb-2">
              <Scale className="w-4 h-4" />
              <span>Áreas de Atuação</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Nossos Serviços <span className="text-[#C49335]">Jurídicos</span>
            </h2>
          </div>

          <div className="max-w-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-[#F4F2ED]/75 font-light leading-relaxed">
              Atuação especializada, pautada no rigor técnico, lealdade institucional e soluções
              personalizadas para pessoas físicas e empresas.
            </p>
            <button
              onClick={() => onOpenAppointmentModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C49335] hover:bg-[#D4A345] text-[#050505] font-semibold text-xs tracking-wider uppercase whitespace-nowrap transition-colors cursor-pointer shrink-0 shadow-lg"
            >
              <span>Consultar Áreas</span>
              <span className="w-4 h-4 rounded-full bg-black/15 flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>

        {/* 9 Practice Areas Grid (3 columns desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-[#050505]/75 hover:bg-[#050505] border border-[#C49335]/20 hover:border-[#C49335]/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1.5 group relative"
            >
              {/* Card Header: Icon & Editorial Number */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0D1930] border border-[#C49335]/30 flex items-center justify-center group-hover:border-[#C49335] transition-colors shadow-inner">
                    {renderIcon(area.iconName)}
                  </div>
                  <span className="font-cinzel text-xs font-semibold text-[#C49335]/80 tracking-widest">
                    {area.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-[#C49335] transition-colors mb-3 leading-snug">
                  {area.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-[#F4F2ED]/70 font-light leading-relaxed mb-6">
                  {area.shortDescription}
                </p>
              </div>

              {/* Action Button: Opens Details Modal */}
              <div className="pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  className="w-full inline-flex items-center justify-between text-xs font-medium text-white/80 group-hover:text-[#C49335] transition-colors cursor-pointer py-1"
                >
                  <span className="tracking-wide">Ver Detalhes da Atuação</span>
                  <span className="w-6 h-6 rounded-full bg-white/5 group-hover:bg-[#C49335] text-white/60 group-hover:text-[#050505] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Practice Area Modal */}
      <PracticeAreaModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
        onOpenAppointmentModal={onOpenAppointmentModal}
      />
    </section>
  );
};
