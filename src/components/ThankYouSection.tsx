import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Home, 
  PlusCircle, 
  Mail, 
  User, 
  MapPin, 
  Phone, 
  MessageSquare,
  Sparkles,
  Calendar,
  Hash
} from 'lucide-react';
import { SubmittedMessage } from '../types';

interface ThankYouSectionProps {
  submittedData: SubmittedMessage | null;
  onBackToHome: () => void;
  onSendAnother: () => void;
}

export const ThankYouSection: React.FC<ThankYouSectionProps> = ({
  submittedData,
  onBackToHome,
  onSendAnother,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="max-w-2xl mx-auto space-y-8 py-8"
    >
      {/* Thank You Card */}
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 text-center space-y-8 shadow-2xl relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Emerald Checkmark Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
          className="w-20 h-20 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto shadow-2xl"
        >
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </motion.div>

        {/* Confirmation Messaging */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Submission Received</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Thank You!
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-md mx-auto leading-relaxed">
            Your message has been received. We’ll get back to you soon.
          </p>
        </div>

        {/* Submission Summary Card */}
        {submittedData && (
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <Hash className="w-3.5 h-3.5 text-indigo-400" />
                <span>Reference:</span>
                <strong className="text-white font-mono">{submittedData.referenceId}</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <span>{submittedData.submittedAt}</span>
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <User className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[11px] uppercase tracking-wider font-semibold">Name</span>
                  <span className="font-semibold text-white">{submittedData.name}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[11px] uppercase tracking-wider font-semibold">Email</span>
                  <span className="font-semibold text-white">{submittedData.email}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-fuchsia-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-500 block text-[11px] uppercase tracking-wider font-semibold">Address</span>
                  <span className="font-semibold text-white">{submittedData.address}</span>
                </div>
              </div>

              {submittedData.phone && (
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[11px] uppercase tracking-wider font-semibold">Phone</span>
                    <span className="font-semibold text-white">{submittedData.phone}</span>
                  </div>
                </div>
              )}

              {submittedData.comments && (
                <div className="flex items-start gap-3 pt-1">
                  <MessageSquare className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-500 block text-[11px] uppercase tracking-wider font-semibold">Comments</span>
                    <p className="text-slate-200 bg-white/5 p-3 rounded-xl border border-white/10 mt-1 text-xs italic">
                      "{submittedData.comments}"
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBackToHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-indigo-50 transition-all shadow-xl active:scale-95 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={onSendAnother}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 border border-white/10 text-white font-semibold text-sm hover:bg-white/15 transition-all active:scale-95 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 text-indigo-400" />
            <span>Send Another Message</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
