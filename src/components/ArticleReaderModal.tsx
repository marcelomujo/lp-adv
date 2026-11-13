import React, { useState, useEffect } from 'react';
import { Article } from '../data/legalData';
import { X, Clock, Calendar, User, ArrowUpRight, BookOpen, CheckCircle2 } from 'lucide-react';

interface ArticleReaderModalProps {
  article: Article | null;
  onClose: () => void;
  onOpenAppointmentModal: (preselectedArea?: string) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  onOpenAppointmentModal,
}) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [article?.id]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-reader-modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#0D1930] border border-[#C49335]/40 rounded-3xl p-6 sm:p-10 shadow-2xl text-left my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-full bg-black/60 hover:bg-[#C49335]/20 text-white/80 hover:text-[#C49335] transition-colors cursor-pointer"
          aria-label="Fechar artigo"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cover Image */}
        {!imgError && (
          <div className="relative aspect-[16/8] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-[#050505]">
            <img
              src={article.image}
              alt={article.imageAlt}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1930]/70 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        {/* Article Meta Bar (Unboxed metadata with typographic separators per frontend-design rules) */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#C49335] mb-4">
          <span className="font-semibold uppercase tracking-wider">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-[#F4F2ED]/60">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.date}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 text-[#F4F2ED]/60">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </span>
        </div>

        {/* Article Title */}
        <h2
          id="article-reader-modal-title"
          className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug mb-4"
        >
          {article.title}
        </h2>

        {/* Author Byline */}
        <div className="flex items-center gap-2.5 text-xs text-[#F4F2ED]/80 border-b border-white/10 pb-5 mb-6">
          <div className="w-7 h-7 rounded-full bg-[#C49335]/20 border border-[#C49335]/40 flex items-center justify-center text-[#C49335]">
            <User className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-white font-medium">{article.author}</span>
            <span className="text-[#C49335]/80 text-[11px] block">Artigo Institucional e Informativo</span>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="space-y-4 text-sm sm:text-base text-[#F4F2ED]/85 leading-relaxed font-light">
          {article.content.map((paragraph, index) => (
            <p key={index} className={index === 0 ? 'text-base font-normal text-white/95' : ''}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Key Takeaways Box */}
        <div className="mt-8 bg-[#050505] border border-[#C49335]/30 rounded-2xl p-5">
          <h4 className="text-xs uppercase tracking-wider text-[#C49335] font-semibold mb-3 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#C49335]" />
            <span>Pontos Práticos para Atenção Imediata</span>
          </h4>
          <ul className="space-y-2 text-xs text-[#F4F2ED]/80">
            {article.keyTakeaways.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C49335] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer & Action */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-[11px] text-[#F4F2ED]/50 font-light max-w-md">
            Nota: Este artigo possui finalidade exclusivamente didática e informativa, não substituindo consulta formal com profissional habilitado.
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenAppointmentModal(`Discussão técnica sobre: ${article.title}`);
            }}
            className="px-5 py-2.5 rounded-full bg-[#C49335] hover:bg-[#D4A345] text-[#050505] text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap shadow-md"
          >
            <span>Consultar Advogado Autor</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
