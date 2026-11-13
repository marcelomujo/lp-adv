import React, { useState } from 'react';
import { TEAM_MEMBERS, TeamMember } from '../data/legalData';
import { TeamModal } from './TeamModal';
import { Scale, ArrowUpRight, GraduationCap } from 'lucide-react';

interface TeamProps {
  onOpenAppointmentModal: (preselectedArea?: string) => void;
}

export const Team: React.FC<TeamProps> = ({ onOpenAppointmentModal }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section id="equipe" className="py-20 lg:py-28 bg-[#050505] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0D1930]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C49335] mb-2">
            <Scale className="w-4 h-4" />
            <span>Corpo Jurídico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Advogados <span className="text-[#C49335]">Especialistas</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F4F2ED]/75 mt-4 font-light leading-relaxed">
            Profissionais com formação sólida nas principais universidades do Brasil, aliando
            profundidade acadêmica a extensa experiência prática contenciosa e consultiva.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => {
            const hasFailed = failedImages[member.id];

            return (
              <div
                key={member.id}
                className="bg-[#0D1930] border border-[#C49335]/20 hover:border-[#C49335]/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1.5 group"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#050505]">
                    {hasFailed ? (
                      <div className="w-full h-full bg-gradient-to-br from-[#0D1930] to-[#050505] flex flex-col items-center justify-center p-6 text-center">
                        <Scale className="w-10 h-10 text-[#C49335]/60 mb-2" />
                        <span className="font-serif text-sm text-white font-semibold">{member.name}</span>
                      </div>
                    ) : (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top scale-[1.12] transition-transform duration-500 group-hover:scale-[1.16] select-none"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [member.id]: true }))
                        }
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1930] via-transparent to-transparent pointer-events-none" />
                    
                    {/* OAB Chip */}
                    <div className="absolute bottom-3 left-3 bg-[#050505]/90 backdrop-blur-sm border border-[#C49335]/30 rounded-lg px-2.5 py-1 text-[10px] font-semibold text-[#C49335] tracking-wider uppercase">
                      {member.oab.split('|')[0].trim()}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#C49335] transition-colors leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#C49335] font-medium mt-1">
                      {member.role}
                    </p>

                    <div className="mt-3 pt-3 border-t border-white/5 flex items-start gap-2 text-[11px] text-[#F4F2ED]/70 font-light leading-relaxed">
                      <GraduationCap className="w-3.5 h-3.5 text-[#C49335] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{member.education}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 pb-5">
                  <button
                    type="button"
                    onClick={() => setSelectedMember(member)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#050505] hover:bg-[#C49335] text-[#F4F2ED] hover:text-[#050505] border border-white/5 hover:border-[#C49335] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
                  >
                    <span>Ver Credenciais</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical disclaimer note below team */}
        <div className="mt-12 text-center text-xs text-[#F4F2ED]/50 max-w-2xl mx-auto font-light">
          Identificação dos advogados e sociedades em rigoroso cumprimento ao Art. 29 do Código de Ética e Disciplina da OAB.
        </div>

      </div>

      {/* Team Member Profile Modal */}
      <TeamModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
        onOpenAppointmentModal={onOpenAppointmentModal}
      />
    </section>
  );
};
