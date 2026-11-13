import React, { useState } from 'react';
import { LEGAL_ARTICLES, Article } from '../data/legalData';
import { ArticleReaderModal } from './ArticleReaderModal';
import { Scale, ArrowUpRight, BookOpen, Clock, Calendar } from 'lucide-react';

interface LegalArticlesProps {
  onOpenAppointmentModal: (preselectedArea?: string) => void;
}

export const LegalArticles: React.FC<LegalArticlesProps> = ({ onOpenAppointmentModal }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section id="conteudos" className="py-20 lg:py-28 bg-[#050505] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] bg-[#0D1930]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C49335] mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Informativo Jurídico</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Conteúdos &amp; <span className="text-[#C49335]">Análises</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#F4F2ED]/75 font-light leading-relaxed">
            Publicações periódicas de nossos sócios e especialistas sobre precedentes, mudanças
            legislativas e segurança jurídica nos negócios e patrimônio.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {LEGAL_ARTICLES.map((article) => {
            const hasFailed = failedImages[article.id];

            return (
              <article
                key={article.id}
                className="bg-[#0D1930] border border-[#C49335]/20 hover:border-[#C49335]/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1.5 group cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <div>
                  {/* Article Cover Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#050505]">
                    {hasFailed ? (
                      <div className="w-full h-full bg-gradient-to-br from-[#0D1930] to-[#050505] flex flex-col items-center justify-center p-6 text-center">
                        <Scale className="w-8 h-8 text-[#C49335]/70 mb-2" />
                        <span className="text-xs text-[#F4F2ED]/80">{article.category}</span>
                      </div>
                    ) : (
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [article.id]: true }))
                        }
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1930] via-[#0D1930]/20 to-transparent pointer-events-none" />
                  </div>

                  <div className="p-7 pt-5">
                    {/* Clean Unboxed Metadata without pills */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#C49335] mb-3">
                      <span className="font-semibold uppercase tracking-wider">{article.category}</span>
                      <span aria-hidden="true" className="text-white/30">·</span>
                      <span className="text-[#F4F2ED]/60 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </span>
                      <span aria-hidden="true" className="text-white/30">·</span>
                      <span className="text-[#F4F2ED]/60 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#C49335] transition-colors leading-snug mb-3">
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-[#F4F2ED]/75 font-light leading-relaxed mb-4">
                      {article.summary}
                    </p>
                  </div>
                </div>

                {/* Author & Read Action */}
                <div className="px-7 pb-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-[#F4F2ED]/60 font-medium">
                    Por {article.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C49335] group-hover:translate-x-0.5 transition-transform">
                    <span>Ler Artigo Completo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer Notice */}
        <div className="mt-12 text-center text-xs text-[#F4F2ED]/50 max-w-xl mx-auto font-light">
          Conteúdo produzido exclusivamente para fins informativos e acadêmicos, em harmonia com o Art. 4º do Provimento 205/2021 do CFOAB.
        </div>

      </div>

      {/* Article Reader Modal */}
      <ArticleReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenAppointmentModal={onOpenAppointmentModal}
      />
    </section>
  );
};
