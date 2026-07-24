import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950/80 border-t border-white/10 mt-auto py-8 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
            A
          </div>
          <span className="font-semibold text-white">ApexReach Portal</span>
          <span>© {new Date().getFullYear()} ApexReach Inc. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6 font-medium text-slate-400">
          <span className="flex items-center gap-1 text-emerald-400">
            <Shield className="w-3.5 h-3.5" />
            256-Bit Encrypted
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};
