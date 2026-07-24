import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ContactFormSection } from './components/ContactFormSection';
import { ThankYouSection } from './components/ThankYouSection';
import { Footer } from './components/Footer';
import { ViewStage, ContactFormData, SubmittedMessage } from './types';

interface AppProps {}

export default function App() {
  const [stage, setStage] = useState<ViewStage>('hero');
  const [submittedData, setSubmittedData] = useState<SubmittedMessage | null>(null);

  const handleFormSubmit = (data: ContactFormData) => {
    const formattedDate = new Date().toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    const refId = 'REF-' + Math.floor(100000 + Math.random() * 900000);

    setSubmittedData({
      ...data,
      submittedAt: formattedDate,
      referenceId: refId,
    });

    setStage('thankyou');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (targetStage: ViewStage) => {
    setStage(targetStage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-x-hidden selection:bg-indigo-500 selection:text-white flex flex-col">
      {/* Background Glow Orbs for Frosted Glass Effect */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-fuchsia-600/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[40%] right-[20%] w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Top Header */}
      <Header currentStage={stage} onNavigate={handleNavigate} />

      {/* Main Content View Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 relative z-10">
        <AnimatePresence mode="wait">
          {stage === 'hero' && (
            <HeroSection 
              key="hero-stage" 
              onContactClick={() => handleNavigate('form')} 
            />
          )}

          {stage === 'form' && (
            <ContactFormSection
              key="form-stage"
              onSubmitSuccess={handleFormSubmit}
              onBackToHome={() => handleNavigate('hero')}
            />
          )}

          {stage === 'thankyou' && (
            <ThankYouSection
              key="thankyou-stage"
              submittedData={submittedData}
              onBackToHome={() => handleNavigate('hero')}
              onSendAnother={() => handleNavigate('form')}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
