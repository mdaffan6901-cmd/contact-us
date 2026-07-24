import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  User, 
  Mail, 
  MapPin, 
  Phone, 
  AlertCircle, 
  ArrowLeft,
  Sparkles,
  RotateCcw
} from 'lucide-react';
import { ContactFormData, FormErrors } from '../types';

interface ContactFormSectionProps {
  onSubmitSuccess: (data: ContactFormData) => void;
  onBackToHome: () => void;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  onSubmitSuccess,
  onBackToHome,
}) => {
  // Requirement 4: All fields start completely empty on page load
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    address: '',
    phone: '',
    comments: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Requirement 2 & 3: Strict validation for ONLY Name, Email, Address. Phone & Comments are optional with NO restrictions.
  const validate = (data: ContactFormData): FormErrors => {
    const errs: FormErrors = {};

    if (!data.name.trim()) {
      errs.name = 'Full name is required';
    }

    if (!data.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!data.address.trim()) {
      errs.address = 'Street address is required';
    }

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (touched[name]) {
      const currentErrors = validate(updated);
      setErrors((prev) => ({
        ...prev,
        [name]: currentErrors[name as keyof FormErrors],
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const currentErrors = validate(formData);
    setErrors((prev) => ({
      ...prev,
      [name]: currentErrors[name as keyof FormErrors],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitError(null);

    setTouched({
      name: true,
      email: true,
      address: true,
      phone: true,
      comments: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd9h0biV6T1c5p2fV31QH1rVdBYzz29LYq7K_zWNUv3F6zZzg/formResponse';

      const bodyData = new URLSearchParams();
      bodyData.append('entry.2005620554', formData.name || '');
      bodyData.append('entry.1045781291', formData.email || '');
      bodyData.append('entry.1065046570', formData.address || '');
      bodyData.append('entry.1166974658', formData.phone || '');
      bodyData.append('entry.839337160', formData.comments || '');

      try {
        await fetch(GOOGLE_FORM_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: bodyData,
        });

        setIsSubmitting(false);
        onSubmitSuccess(formData);
      } catch (err: any) {
        setSubmitError('Unable to send message. Please check your internet connection and try again.');
        setIsSubmitting(false);
      }
    } else {
      const firstErrorKey = Object.keys(validationErrors)[0];
      const element = document.getElementById(`input-${firstErrorKey}`);
      element?.focus();
    }
  };

  const handleFillSample = () => {
    setFormData({
      name: 'Sarah Jenkins',
      email: 'sarah.jenkins@example.com',
      address: '742 Evergreen Terrace, Springfield, OR 97477',
      phone: '+1 (555) 000-0000',
      comments: 'Hello! I would like to inquire about your consultation packages.',
    });
    setErrors({});
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      address: '',
      phone: '',
      comments: '',
    });
    setErrors({});
    setTouched({});
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="max-w-3xl mx-auto py-4"
    >
      {/* Navigation Header */}
      <div className="mb-6 flex items-center justify-between">
        <button
          type="button"
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors group px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleFillSample}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 transition-colors border border-indigo-500/20 flex items-center gap-1.5 cursor-pointer"
            title="Auto-fill sample data for quick preview"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Fill Sample</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 text-slate-300 hover:bg-white/10 transition-colors border border-white/10 flex items-center gap-1 cursor-pointer"
            title="Clear all fields"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Main Frosted Glass Form Card */}
      <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-[-20%] right-[-10%] w-72 h-72 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="mb-8 space-y-2 relative">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
            Send a Message
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm text-slate-400">
            Fill out the form below. Only Name, Email, and Address are required.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} noValidate className="space-y-6 relative">
          {/* Network Failure Alert */}
          {submitError && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-200">Submission Error</p>
                <p className="text-xs text-amber-300/90 mt-0.5">
                  {submitError}
                </p>
              </div>
            </motion.div>
          )}

          {/* Validation Alert */}
          {Object.keys(errors).length > 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-rose-200">Please review required fields</p>
                <p className="text-xs text-rose-300/80 mt-0.5">
                  Ensure Name, Email, and Address are filled out correctly.
                </p>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Field 1: Name (Required) */}
            <div className="flex flex-col space-y-2">
              <label 
                htmlFor="input-name" 
                className="text-sm font-medium text-slate-200 ml-1 flex items-center justify-between"
              >
                <span>Name <span className="text-red-400">*</span></span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="input-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Jane Doe"
                  className={`w-full pl-11 pr-4 py-3.5 bg-white/5 border rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all ${
                    errors.name ? 'border-red-400 bg-red-500/5' : 'border-white/10'
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-red-400 text-xs mt-1 ml-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Field 2: Email (Required) */}
            <div className="flex flex-col space-y-2">
              <label 
                htmlFor="input-email" 
                className="text-sm font-medium text-slate-200 ml-1 flex items-center justify-between"
              >
                <span>Email <span className="text-red-400">*</span></span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="input-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="jane@example.com"
                  className={`w-full pl-11 pr-4 py-3.5 bg-white/5 border rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all ${
                    errors.email ? 'border-red-400 bg-red-500/5' : 'border-white/10'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-xs mt-1 ml-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Field 3: Address (Required) */}
          <div className="flex flex-col space-y-2">
            <label 
              htmlFor="input-address" 
              className="text-sm font-medium text-slate-200 ml-1"
            >
              Address <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                <MapPin className="w-4 h-4" />
              </div>
              <input
                id="input-address"
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="123 Modern St, City, Country"
                className={`w-full pl-11 pr-4 py-3.5 bg-white/5 border rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all ${
                  errors.address ? 'border-red-400 bg-red-500/5' : 'border-white/10'
                }`}
              />
            </div>
            {errors.address && (
              <p className="text-red-400 text-xs mt-1 ml-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.address}</span>
              </p>
            )}
          </div>

          {/* Field 4: Phone Number (Optional) */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label 
                htmlFor="input-phone" 
                className="text-sm font-medium text-slate-200"
              >
                Phone number
              </label>
              <span className="text-xs text-slate-500 font-normal">Optional</span>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                <Phone className="w-4 h-4" />
              </div>
              <input
                id="input-phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
              />
            </div>
          </div>

          {/* Field 5: Comments (Optional Textarea) */}
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label 
                htmlFor="input-comments" 
                className="text-sm font-medium text-slate-200"
              >
                Comments
              </label>
              <span className="text-xs text-slate-500 font-normal">Optional</span>
            </div>
            <textarea
              id="input-comments"
              name="comments"
              rows={3}
              value={formData.comments}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
            />
          </div>

          {/* Form Actions */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-white text-slate-950 py-4 rounded-2xl font-bold text-base hover:bg-indigo-50 transition-all active:scale-95 cursor-pointer shadow-xl shadow-white/5 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onBackToHome}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};
