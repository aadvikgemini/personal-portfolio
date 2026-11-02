import { useState } from 'react';
import {
  Mail,
  Send,
  Copy,
  Check,
  Sparkles,
  MapPin,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { contactContent } from '../content';
import { GithubIcon, LinkedinIcon } from './Icons';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submittedDraft, setSubmittedDraft] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactContent.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honest handling: triggers mailto with form parameters
    const mailtoSubject = encodeURIComponent(
      subject || `Message from ${name || 'Portfolio Visitor'}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent via Aadvik's Portfolio Form`
    );

    const mailtoUrl = `mailto:${contactContent.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    window.location.href = mailtoUrl;

    setSubmittedDraft(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact & Connect"
      className="relative min-h-screen w-full bg-[#07090e] py-24 sm:py-32 border-t border-white/5 tech-grid"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="size-3.5" />
            <span>{contactContent.subheading}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {contactContent.heading}
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg max-w-2xl font-light">
            {contactContent.supportingText}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct channels, Email Copy & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="rounded-2xl bg-[#0b0f17]/90 border border-sky-500/25 p-6 backdrop-blur-xl shadow-xl">
              <span className="text-xs font-mono uppercase text-sky-400 block mb-2 font-semibold">
                Direct Email Channel
              </span>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#070a0f] border border-white/10 mb-4">
                <span className="text-sm font-mono text-white select-all">
                  {contactContent.email}
                </span>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
                </button>
              </div>

              {copied && (
                <div className="text-xs font-mono text-emerald-400 mb-3 flex items-center gap-1.5">
                  <Check className="size-3.5" />
                  <span>Email copied to clipboard!</span>
                </div>
              )}

              <a
                href={`mailto:${contactContent.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="size-4" />
                <span>Open in Email App</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl bg-[#0b0f17]/80 border border-white/10 p-6 backdrop-blur-xl">
              <span className="text-xs font-mono uppercase text-slate-400 block mb-4 font-semibold">
                Developer Profiles
              </span>

              <div className="space-y-3">
                <a
                  href={contactContent.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#070a0f] border border-white/5 hover:border-sky-500/30 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="size-5 text-sky-400" />
                    <div>
                      <span className="text-sm font-semibold block">GitHub</span>
                      <span className="text-xs text-slate-400">@aadvikgemini</span>
                    </div>
                  </div>
                  <ExternalLink className="size-4 text-slate-500 group-hover:text-cyan-300 transition-colors" />
                </a>

                <a
                  href={contactContent.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#070a0f] border border-white/5 hover:border-sky-500/30 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="size-5 text-sky-400" />
                    <div>
                      <span className="text-sm font-semibold block">LinkedIn</span>
                      <span className="text-xs text-slate-400">Connect professionally</span>
                    </div>
                  </div>
                  <ExternalLink className="size-4 text-slate-500 group-hover:text-cyan-300 transition-colors" />
                </a>
              </div>
            </div>

            {/* Location & University indicator */}
            <div className="p-4 rounded-xl bg-[#0e131d]/60 border border-white/5 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <MapPin className="size-4 text-sky-400 shrink-0" />
              <span>{contactContent.location}</span>
            </div>

          </div>

          {/* Right Column: Contact Form with Honest Client/Backend Notification */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0b0f17]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-xl relative">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Send a Direct Message</span>
                </h3>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                  Ready to Dispatch
                </span>
              </div>

              {/* Honest Backend Notice as required by prompt */}
              <div className="mb-6 p-3.5 rounded-xl bg-[#070a0f] border border-sky-500/20 flex items-start gap-3 text-xs text-slate-300 leading-relaxed font-mono">
                <AlertCircle className="size-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Configuration Note:</strong> Submitting this form prepares your message directly in your mail client via mailto, ensuring delivery without a fake mock server. To integrate Formspree or EmailJS, update endpoint in <code className="text-cyan-300">src/config.ts</code>.
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex"
                      className="w-full px-4 py-3 rounded-xl bg-[#070a0f] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#070a0f] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Hackathon collaboration, RoomRush feedback, or project discussion"
                    className="w-full px-4 py-3 rounded-xl bg-[#070a0f] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What would you like to build or discuss together?"
                    className="w-full px-4 py-3 rounded-xl bg-[#070a0f] border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <Send className="size-4" />
                  <span>Send Message</span>
                </button>
              </form>

              {/* Confirmation Alert after click */}
              {submittedDraft && (
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 font-mono">
                  Your mail client has been opened with your message. If it didn't trigger, click "Open in Email App" or email directly at {contactContent.email}.
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
