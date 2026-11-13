import React from 'react';
import { X, ShieldCheck, Lock, FileText } from 'lucide-react';
import { INSTITUTIONAL_DATA } from '../data/legalData';

interface LegalDocsModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalDocsModal: React.FC<LegalDocsModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl bg-[#0D1930] border border-[#C49335]/40 rounded-3xl p-6 sm:p-10 shadow-2xl text-left my-8 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-black/40 hover:bg-[#C49335]/20 text-white/70 hover:text-[#C49335] transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#050505] border border-[#C49335]/30 flex items-center justify-center text-[#C49335]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C49335] font-semibold">
                  Conformidade Regulatória
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Política de Privacidade &amp; Proteção de Dados (LGPD)
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#F4F2ED]/85 leading-relaxed font-light">
              <p>
                A <strong className="text-white font-medium">{INSTITUTIONAL_DATA.legalEntity}</strong>, inscrita na{' '}
                <strong className="text-white font-medium">{INSTITUTIONAL_DATA.oabSocietyNumber}</strong>, valoriza a transparência, a segurança e a inviolabilidade da intimidade de seus clientes e usuários, em estrita consonância com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD) e com as prerrogativas da Lei nº 8.906/1994.
              </p>

              <h4 className="text-xs uppercase tracking-wider text-[#C49335] font-semibold pt-2">
                1. Coleta e Finalidade do Tratamento
              </h4>
              <p>
                Os dados fornecidos mediante preenchimento de formulários de contato (como nome, endereço de e-mail, telefone e descrição fática) são utilizados com a exclusiva finalidade de realizar a triagem preliminar da consulta jurídica, conferência prévia de eventual conflito de interesses e agendamento de atendimentos.
              </p>

              <h4 className="text-xs uppercase tracking-wider text-[#C49335] font-semibold pt-2">
                2. Sigilo Profissional e Inviolabilidade
              </h4>
              <p>
                Todas as informações e documentos recebidos são protegidos pelo sigilo profissional inerente ao exercício da advocacia (Art. 7º, inciso XIX, do Estatuto da Advocacia e da OAB), não sendo comercializados, compartilhados com terceiros ou utilizados para fins publicitários em nenhuma hipótese.
              </p>

              <h4 className="text-xs uppercase tracking-wider text-[#C49335] font-semibold pt-2">
                3. Direitos do Titular de Dados
              </h4>
              <p>
                O titular dos dados pessoais poderá a qualquer momento solicitar a confirmação da existência de tratamento, o acesso aos dados, a correção de dados incompletos ou inexatos, ou a eliminação dos dados tratados com base em seu consentimento, através de comunicação formal ao e-mail institucional <span className="font-mono text-white">{INSTITUTIONAL_DATA.email}</span>.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#050505] border border-[#C49335]/30 flex items-center justify-center text-[#C49335]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C49335] font-semibold">
                  Normas Deontológicas
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Termos de Uso &amp; Diretrizes Institucionais
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#F4F2ED]/85 leading-relaxed font-light">
              <p>
                O presente portal institucional tem caráter estritamente informativo e educativo, em estrita observância ao Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB) e ao Provimento nº 205/2021 do Conselho Federal da OAB.
              </p>

              <h4 className="text-xs uppercase tracking-wider text-[#C49335] font-semibold pt-2">
                1. Ausência de Caráter Vinculante e Não Promessa de Resultados
              </h4>
              <p>
                Os artigos, informativos e materiais disponibilizados neste ambiente digital não configuram pareceres jurídicos formais nem constituem aconselhamento jurídico para situações concretas específicas. A contratação de serviços advocatícios depende de instrumento contratual escrito formalizado entre as partes.
              </p>

              <h4 className="text-xs uppercase tracking-wider text-[#C49335] font-semibold pt-2">
                2. Natureza da Atividade Advocatícia
              </h4>
              <p>
                Reiteramos que a advocacia brasileira constitui atividade de meio, sendo expressamente vedada a garantia de êxito processual ou a veiculação de percentuais de sucesso, primando este escritório pela técnica, diligência e transparência em todas as suas manifestações.
              </p>

              <h4 className="text-xs uppercase tracking-wider text-[#C49335] font-semibold pt-2">
                3. Propriedade Intelectual
              </h4>
              <p>
                Todos os textos, análises legislativas, marcas e elementos visuais deste sítio eletrônico são de titularidade de {INSTITUTIONAL_DATA.legalEntity}, sendo vedada a reprodução sem expressa citação da fonte e de seus respectivos autores.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-white/10 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#C49335] text-[#050505] font-semibold text-xs uppercase tracking-wider hover:bg-[#D4A345] transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
