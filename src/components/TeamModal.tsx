import React, { useState, useEffect } from 'react';
import { TeamMember } from '../data/legalData';
import { X, Mail, GraduationCap, Scale, Award, ArrowUpRight } from 'lucide-react';

interface TeamModalProps {
  member: TeamMember | null;
  onClose: () => void;
  onOpenAppointmentModal: (preselectedArea?: string) => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({
  member,
  onClose,
  onOpenAppointmentModal,
}) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [member?.id]);

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-member-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0D1930] border border-[#C49335]/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-black/40 hover:bg-[#C49335]/20 text-white/70 hover:text-[#C49335] transition-colors cursor-pointer"
          aria-label="Fechar perfil"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Member Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b border-white/10 pb-6 mb-6">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#C49335]/40 bg-[#050505] shrink-0 flex items-center justify-center">
            {imgError ? (
              <Scale className="w-7 h-7 text-[#C49335]/70" />
            ) : (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top scale-[1.15]"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
              />
            )}
          </div>
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#050505] border border-[#C49335]/30 text-[11px] font-semibold text-[#C49335] mb-1">
              {member.oab}
            </div>
            <h3
              id="team-member-modal-title"
              className="text-2xl font-serif font-bold text-white tracking-tight"
            >
              {member.name}
            </h3>
            <p className="text-xs text-[#F4F2ED]/70 mt-0.5">
              {member.role}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-6">
          {/* Academic Background */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#C49335] font-semibold mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#C49335]" />
              <span>Formação Acadêmica &amp; Titulações</span>
            </h4>
            <div className="bg-[#050505]/60 border border-white/5 rounded-xl p-3.5 text-xs text-[#F4F2ED]/90 leading-relaxed">
              {member.education}
            </div>
          </div>

          {/* Practice Specialties */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#C49335] font-semibold mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C49335]" />
              <span>Áreas de Especialização Comprovada</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((spec, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-[#050505] border border-[#C49335]/25 text-xs text-[#F4F2ED]/90"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Biography */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#C49335] font-semibold mb-2 flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#C49335]" />
              <span>Trajetória Profissional &amp; Atuação</span>
            </h4>
            <p className="text-sm text-[#F4F2ED]/85 leading-relaxed font-light">
              {member.bio}
            </p>
          </div>

          {/* Contact Direct */}
          <div className="bg-[#050505] border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#C49335]" />
              <span className="text-xs text-[#F4F2ED]/80 font-mono">
                {member.email}
              </span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenAppointmentModal(`Consulta com ${member.name}`);
              }}
              className="px-4 py-2 rounded-full bg-[#C49335] hover:bg-[#D4A345] text-[#050505] text-xs font-semibold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Solicitar Atendimento</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
