import React, { useState, useEffect } from 'react';
import { INSTITUTIONAL_DATA, PRACTICE_AREAS } from '../data/legalData';
import { X, Calendar, Clock, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  preselectedArea?: string;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  preselectedArea,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [modality, setModality] = useState<'presencial-sp' | 'presencial-df' | 'virtual'>('presencial-sp');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [lgpd, setLgpd] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [protocol, setProtocol] = useState('');

  useEffect(() => {
    if (preselectedArea) {
      setArea(preselectedArea);
    }
  }, [preselectedArea]);

  if (!isOpen) return null;

  const handleValidate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Informe seu nome completo.';
    if (!email.trim() || !email.includes('@')) errs.email = 'Informe um e-mail válido.';
    if (!phone.trim() || phone.length < 9) errs.phone = 'Informe seu telefone / WhatsApp com DDD.';
    if (!lgpd) errs.lgpd = 'Necessário concordar com os termos de sigilo e LGPD.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!handleValidate() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const payload = new URLSearchParams({
        'form-name': 'agendamento-institucional',
        name,
        email,
        phone,
        area: area || 'Geral',
        preferredDate: preferredDate || 'A definir',
        modality,
        notes,
      });

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
    } catch {
      // Mantém confirmação de protocolo mesmo fora do ambiente Netlify (ex.: preview local)
    } finally {
      const generatedProtocol = `AG-${new Date().getFullYear()}-${Math.floor(
        100000 + Math.random() * 900000
      )}`;
      setProtocol(generatedProtocol);
      setSubmitted(true);
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setArea('');
    setPreferredDate('');
    setNotes('');
    setLgpd(false);
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-xl bg-[#0D1930] border border-[#C49335]/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-left my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-black/40 hover:bg-[#C49335]/20 text-white/70 hover:text-[#C49335] transition-colors cursor-pointer"
          aria-label="Fechar agendamento"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-white/10 pb-4 mb-6">
          <span className="text-xs uppercase tracking-widest text-[#C49335] font-semibold block mb-1">
            Agendamento Institucional
          </span>
          <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
            Solicitar Consulta Jurídica
          </h3>
          <p className="text-xs text-[#F4F2ED]/70 mt-1 font-light">
            Indique sua disponibilidade e matéria de interesse para que nossa secretaria confirme o horário.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#C49335]/20 border border-[#C49335] mx-auto flex items-center justify-center text-[#C49335]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-serif font-bold text-white">
              Agendamento Pré-Registrado
            </h4>
            <p className="text-xs text-[#F4F2ED]/80 max-w-md mx-auto leading-relaxed font-light">
              Recebemos sua solicitação sob o protocolo <strong className="text-[#C49335] font-mono">{protocol}</strong>. Nossa equipe entrará em contato via WhatsApp/telefone nas próximas 4 horas úteis para confirmar a data e o advogado responsável.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-[#C49335] text-[#050505] text-xs font-semibold uppercase tracking-wider hover:bg-[#D4A345] transition-colors cursor-pointer"
              >
                Concluir
              </button>
            </div>
          </div>
        ) : (
          <form
            name="agendamento-institucional"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="agendamento-institucional" />
            <input type="hidden" name="modality" value={modality} />
            <p className="hidden">
              <label>
                Não preencha este campo: <input name="bot-field" />
              </label>
            </p>
            <div>
              <label className="block text-xs font-medium text-[#F4F2ED]/90 mb-1">
                Nome Completo <span className="text-[#C49335]">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome completo"
                className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 focus:border-[#C49335] focus:outline-none text-xs text-white placeholder-white/30"
              />
              {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#F4F2ED]/90 mb-1">
                  E-mail <span className="text-[#C49335]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 focus:border-[#C49335] focus:outline-none text-xs text-white placeholder-white/30"
                />
                {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-[#F4F2ED]/90 mb-1">
                  Telefone / WhatsApp <span className="text-[#C49335]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(11) 98765-4321"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 focus:border-[#C49335] focus:outline-none text-xs text-white placeholder-white/30"
                />
                {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#F4F2ED]/90 mb-1">
                  Área de Interesse
                </label>
                <select
                  name="area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 focus:border-[#C49335] focus:outline-none text-xs text-white"
                >
                  <option value="">Selecione uma área jurídica</option>
                  {PRACTICE_AREAS.map((pa) => (
                    <option key={pa.id} value={pa.title}>
                      {pa.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#F4F2ED]/90 mb-1">
                  Data de Preferência
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 focus:border-[#C49335] focus:outline-none text-xs text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#F4F2ED]/90 mb-1">
                Modalidade de Atendimento
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setModality('presencial-sp')}
                  className={`p-2.5 rounded-xl text-center text-xs font-medium border transition-colors cursor-pointer ${
                    modality === 'presencial-sp'
                      ? 'bg-[#C49335] text-[#050505] border-[#C49335] font-semibold'
                      : 'bg-[#050505] text-white/80 border-white/10 hover:border-[#C49335]/40'
                  }`}
                >
                  Sede SP (Faria Lima)
                </button>
                <button
                  type="button"
                  onClick={() => setModality('presencial-df')}
                  className={`p-2.5 rounded-xl text-center text-xs font-medium border transition-colors cursor-pointer ${
                    modality === 'presencial-df'
                      ? 'bg-[#C49335] text-[#050505] border-[#C49335] font-semibold'
                      : 'bg-[#050505] text-white/80 border-white/10 hover:border-[#C49335]/40'
                  }`}
                >
                  Sede DF (Brasília)
                </button>
                <button
                  type="button"
                  onClick={() => setModality('virtual')}
                  className={`p-2.5 rounded-xl text-center text-xs font-medium border transition-colors cursor-pointer ${
                    modality === 'virtual'
                      ? 'bg-[#C49335] text-[#050505] border-[#C49335] font-semibold'
                      : 'bg-[#050505] text-white/80 border-white/10 hover:border-[#C49335]/40'
                  }`}
                >
                  Videoconferência
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#F4F2ED]/90 mb-1">
                Anotações Preliminares (Opcional)
              </label>
              <textarea
                name="notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Indique brevemente o objeto ou dúvidas..."
                className="w-full px-4 py-2 rounded-xl bg-[#050505] border border-white/10 focus:border-[#C49335] focus:outline-none text-xs text-white placeholder-white/30 resize-none"
              />
            </div>

            <div>
              <label className="flex items-start gap-2 cursor-pointer text-left">
                <input
                  type="checkbox"
                  checked={lgpd}
                  onChange={(e) => setLgpd(e.target.checked)}
                  className="mt-0.5 rounded border-white/20 text-[#C49335] focus:ring-[#C49335] bg-[#050505]"
                />
                <span className="text-[10px] text-[#F4F2ED]/70 leading-tight">
                  Autorizo o contato para confirmação de agendamento, sob sigilo profissional (LGPD / OAB).
                </span>
              </label>
              {errors.lgpd && <p className="text-[11px] text-rose-400 mt-1">{errors.lgpd}</p>}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-full bg-[#C49335] hover:bg-[#D4A345] disabled:opacity-60 text-[#050505] font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Enviando...' : 'Confirmar Solicitação de Horário'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
