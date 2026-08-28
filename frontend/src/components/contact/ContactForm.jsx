import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, Shield, Sparkles, Send, AlertCircle, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { enquiryApi } from '../../api/enquiryApi';
import { Button } from '../common/Button';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Development',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Web Development',
    'Custom Software',
    'UI/UX Design',
    'API Development',
    'Other',
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your full name (at least 2 characters)';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid business email address';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      errs.phone = 'Please provide a valid contact phone number';
    }
    if (!formData.service) {
      errs.service = 'Please select the required service';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide project details (minimum 10 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await enquiryApi.createEnquiry(formData);
      if (response && response.success) {
        setIsSuccess(true);
        // Trigger celebratory confetti effect
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#8B5CF6', '#06B6D4', '#6366F1', '#38BDF8'],
          });
        } catch (e) {
          // ignore if canvas-confetti is not supported
        }
      } else {
        setErrorMessage(response?.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'Web Development',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-xs font-bold tracking-widest uppercase w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
              GET IN TOUCH
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight font-display">
              Let's build something <br />
              <span className="text-gradient-purple">meaningful.</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Tell us about your idea, challenge or project. Our senior engineering &amp; design
              leadership will review your enquiry and get back to you with a tailored technical
              roadmap.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-violet-50 text-violet-600 mt-0.5 border border-violet-100">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Rapid Response</h4>
                  <p className="text-xs text-slate-500">
                    Guaranteed response and initial project review within 2 business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-cyan-50 text-cyan-600 mt-0.5 border border-cyan-100">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Mutual NDA Protected</h4>
                  <p className="text-xs text-slate-500">
                    Your proprietary intellectual property and concept remains 100% confidential.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 mt-0.5 border border-emerald-100">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Principal Engineers</h4>
                  <p className="text-xs text-slate-500">
                    You talk directly with senior architects and developers, never sales middlemen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Glass-Style Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200 backdrop-blur-2xl p-6 sm:p-10 shadow-xl relative">
              {isSuccess ? (
                /* Success State */
                <div className="py-10 text-center flex flex-col items-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-[1px] shadow-sm mb-6 flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-emerald-500 animate-bounce" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-2">
                    You're all set. We'll be in touch soon.
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you for reaching out to NexaTech. Your enquiry has been routed directly to our
                    technical leadership team.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 text-sm font-semibold transition-all shadow-sm"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Send Another Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Full Name <span className="text-violet-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Elena Rostova"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-violet-500'
                        } text-slate-900 placeholder-slate-400 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-violet-500/20`}
                      />
                      {errors.name && <p className="text-rose-500 text-xs mt-1.5">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Business Email <span className="text-violet-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="elena@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-violet-500'
                        } text-slate-900 placeholder-slate-400 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-violet-500/20`}
                      />
                      {errors.email && <p className="text-rose-500 text-xs mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Phone Number <span className="text-violet-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.phone ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-violet-500'
                        } text-slate-900 placeholder-slate-400 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-violet-500/20`}
                      />
                      {errors.phone && <p className="text-rose-500 text-xs mt-1.5">{errors.phone}</p>}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Company Name <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Ventures"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-violet-500 text-slate-900 placeholder-slate-400 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-violet-500/20"
                      />
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Service Required <span className="text-violet-600">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-violet-500 text-slate-900 text-sm outline-none transition-all focus:ring-2 focus:ring-violet-500/20 cursor-pointer"
                    >
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-white text-slate-900">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Project Details &amp; Objectives <span className="text-violet-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about the product vision, timeline, target users, or key architectural challenges..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                        errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-slate-200 focus:border-violet-500'
                      } text-slate-900 placeholder-slate-400 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-violet-500/20 resize-none`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-rose-500 text-xs mt-1.5">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={loading}
                    className="w-full py-4 text-base font-bold shadow-xl shadow-violet-600/30"
                    icon={Send}
                    iconPosition="right"
                  >
                    {loading ? 'Submitting Enquiry...' : 'Send Enquiry →'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
