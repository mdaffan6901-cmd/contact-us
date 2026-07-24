import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Headphones, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  MessageSquare, 
  Zap, 
  Award, 
  Lock, 
  Star 
} from 'lucide-react';

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How quickly will I receive a reply after submitting?",
      a: "Our team reviews incoming messages continuously and guarantees a personal response within 24 hours during standard business days."
    },
    {
      q: "What information should I include in my message?",
      a: "Sharing a brief outline of your goals, preferred timeframe, and any specific questions will help us match you with the right specialist immediately."
    },
    {
      q: "Is my personal and business information kept private?",
      a: "Yes, absolutely. We strictly adhere to enterprise-grade data privacy standards and never share your contact details with third parties."
    },
    {
      q: "Can I request a live video consultation or phone call?",
      a: "Yes! Simply mention your preferred consultation method in your message comments and we will send a calendar link for your convenience."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="space-y-20 pb-16"
    >
      {/* 1. Main Hero Section */}
      <section className="relative text-center max-w-4xl mx-auto space-y-8 pt-8 sm:pt-12">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-indigo-300 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Connecting Ideas • 24/7 Response</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/60 leading-tight">
          Let’s start your <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-300 via-purple-200 to-fuchsia-300 bg-clip-text text-transparent">
            next chapter.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
          We’re here to help you bring your vision to life. Send us a message and our team will get back to you within 24 hours.
        </p>

        {/* Centered Primary CTA Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onContactClick}
            className="group px-10 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-500/10 cursor-pointer inline-flex items-center gap-3"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Quick Value Indicators */}
        <div className="pt-8 flex flex-wrap justify-center items-center gap-y-3 gap-x-8 text-xs sm:text-sm font-medium text-slate-400 border-t border-white/10 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Under 24-hr response</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Confidential & secure</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-fuchsia-400" />
            <span>Dedicated specialists</span>
          </div>
        </div>
      </section>

      {/* 2. Direct Contact Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="group p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-300 mb-5 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Email Support</h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Send us an email anytime. Our team actively monitors inquiries and responds promptly.
            </p>
          </div>
          <a 
            href="mailto:contact@apexreach.com" 
            className="text-sm font-semibold text-indigo-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <span>contact@apexreach.com</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="group p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-300 mb-5 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Direct Hotline</h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Mon – Fri from 8:00 AM to 6:00 PM EST. Toll-free direct phone line.
            </p>
          </div>
          <a 
            href="tel:+18005550199" 
            className="text-sm font-semibold text-fuchsia-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <span>+1 (800) 555-0199</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="group p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-300 mb-5 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Main Office</h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Visit our central headquarters or request an in-person briefing.
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-200 block">
            450 Innovation Parkway, Suite 800, San Francisco, CA
          </span>
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Simple Process
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            How We Work Together
          </h2>
          <p className="text-sm text-slate-400">
            Reaching out is quick and straightforward. Here is what happens after you send a message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Step 1 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative space-y-4">
            <span className="text-3xl font-black text-indigo-400/80 block font-mono">01</span>
            <h3 className="text-lg font-bold text-white">Submit Your Inquiry</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fill out our simple contact form with your name, address, email, and any details or comments.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative space-y-4">
            <span className="text-3xl font-black text-purple-400/80 block font-mono">02</span>
            <h3 className="text-lg font-bold text-white">Expert Evaluation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our specialists review your message carefully to prepare a clear, tailored response or solution.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative space-y-4">
            <span className="text-3xl font-black text-fuchsia-400/80 block font-mono">03</span>
            <h3 className="text-lg font-bold text-white">Connect & Resolve</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We respond promptly with answers, recommendations, or a direct follow-up consultation.
            </p>
          </div>
        </div>
      </section>

      {/* 4. What We Offer / Key Advantages */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-fuchsia-400">
            Why Reach Out
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Built for Seamless Communication
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Fast Response</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Guaranteed 24-hour turnaround on all submitted inquiries.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Privacy First</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your contact info is strictly confidential and encrypted.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Direct Human Touch</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No chatbots or automated loops — speak directly with real professionals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Tailored Guidance</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get clear, relevant answers specific to your individual goals.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Client Testimonials / Trust Building */}
      <section className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Client Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Trusted by Leaders & Creators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "Reaching out through their portal was seamlessly fast. I received a comprehensive response within a few hours."
              </p>
            </div>
            <div className="border-t border-white/10 pt-3 text-xs">
              <span className="font-bold text-white block">Elena Rostova</span>
              <span className="text-slate-400">Operations Director, Apex Studio</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "Clean, elegant, and professional. The follow-up call was scheduled immediately with zero hassle."
              </p>
            </div>
            <div className="border-t border-white/10 pt-3 text-xs">
              <span className="font-bold text-white block">Marcus Vance</span>
              <span className="text-slate-400">Product Manager, NovaTech</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "Impressive attention to detail. Every question in our initial message was addressed in detail."
              </p>
            </div>
            <div className="border-t border-white/10 pt-3 text-xs">
              <span className="font-bold text-white block">Sophia Lin</span>
              <span className="text-slate-400">Founder, Catalyst Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Quick answers regarding our communication process.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <span className="font-semibold text-sm text-white">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-300 border-t border-white/5 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Bottom CTA Band */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-indigo-900/60 via-purple-900/60 to-slate-900/80 border border-white/15 p-8 sm:p-14 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready to start the conversation?
          </h2>
          <p className="text-sm text-slate-300">
            Click below to send us your message now. We look forward to connecting with you.
          </p>
          <div className="pt-2">
            <button
              onClick={onContactClick}
              className="px-10 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10 cursor-pointer inline-flex items-center gap-3"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
