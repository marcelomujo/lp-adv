import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Indicators } from './components/Indicators';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { Team } from './components/Team';
import { Methodology } from './components/Methodology';
import { LegalArticles } from './components/LegalArticles';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { LegalDocsModal } from './components/LegalDocsModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [preselectedArea, setPreselectedArea] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenAppointmentModal = (area?: string) => {
    setPreselectedArea(area);
    setAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F4F2ED] selection:bg-[#C49335] selection:text-[#050505]">
      {/* 2. Cabeçalho */}
      <Header onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

      <main>
        {/* 3. Hero Section */}
        <Hero onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* 5. Indicadores Institucionais */}
        <Indicators />

        {/* 4. Sobre o Escritório */}
        <About onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* 6. Áreas de Atuação */}
        <PracticeAreas onOpenAppointmentModal={(area) => handleOpenAppointmentModal(area)} />

        {/* 7. Equipe Jurídica */}
        <Team onOpenAppointmentModal={(area) => handleOpenAppointmentModal(area)} />

        {/* 8. Metodologia de Atendimento */}
        <Methodology onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* 9. Conteúdos Jurídicos */}
        <LegalArticles onOpenAppointmentModal={(area) => handleOpenAppointmentModal(area)} />

        {/* 10. Perguntas Frequentes */}
        <FAQ />

        {/* 11. Contato & Sedes */}
        <Contact />
      </main>

      {/* 12. Rodapé */}
      <Footer onOpenLegalModal={(type) => setLegalModalType(type)} />

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        preselectedArea={preselectedArea}
        onClose={() => {
          setAppointmentModalOpen(false);
          setPreselectedArea(undefined);
        }}
      />

      <LegalDocsModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating Institutional WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
