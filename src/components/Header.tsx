import React from 'react';
import { Mail, Phone, Sparkles, MessageSquareText, ArrowRight } from 'lucide-react';
import { ViewStage } from '../types';

interface HeaderProps {
  currentStage: ViewStage;
  onNavigate: (stage: ViewStage) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentStage, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/70 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-xl p-1.5 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
            <MessageSquareText className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              ApexReach
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-indigo-300 border border-white/10 uppercase tracking-wider">
              Contact Portal
            </span>
          </div>
        </button>

        {/* Contact info & CTA */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden md:flex items-center gap-5 text-xs font-medium text-slate-300">
            <a 
              href="mailto:contact@apexreach.com" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>contact@apexreach.com</span>
            </a>
            <span className="text-white/20">•</span>
            <a 
              href="tel:+18005550199" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>+1 (800) 555-0199</span>
            </a>
          </div>

          {currentStage !== 'form' && currentStage !== 'thankyou' ? (
            <button
              onClick={() => onNavigate('form')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-indigo-50 active:scale-95 transition-all shadow-xl shadow-white/10 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Contact Us</span>
            </button>
          ) : (
            <button
              onClick={() => onNavigate('hero')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              <span>Back to Home</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
