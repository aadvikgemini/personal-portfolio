import { useEffect, useState, type FormEvent } from 'react';
import { brand, contactData } from '../content';
import { useReveals } from '../hooks/useReveals';

type Status = 'idle' | 'invalid' | 'sent';

function useCountdown(target: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const ms = Math.max(0, new Date(target).getTime() - now);
  const s = Math.floor(ms / 1000);
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
  };
}

export function ReserveContact() {
  const ref = useReveals<HTMLElement>();
  const t = useCountdown(contactData.window);
  const [status, setStatus] = useState<Status>('idle');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(brand.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus('invalid');
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Manifest / Contact from ${String(data.get('name'))}: ${String(data.get('topic') || 'Collaboration')}`
    );
    const body = encodeURIComponent(
      `Name: ${String(data.get('name'))}\nEmail: ${String(data.get('email'))}\nTopic: ${String(
        data.get('topic')
      )}\n\nMessage:\n${String(data.get('message'))}\n\n---\nSent via Aadvik Gemini Portfolio Manifest`
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  const field =
    'w-full rounded-[4px] bg-white/[0.04] px-4 py-3.5 text-body text-white ring-1 ring-white/15 outline-none placeholder:text-regolith/40 focus:ring-earth user-invalid:ring-red-400/70 font-sans';

  const units: [string, number][] = [
    ['Days', t.d],
    ['Hrs', t.h],
    ['Min', t.m],
    ['Sec', t.s],
  ];

  return (
    <section
      ref={ref}
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-void px-4 pb-28 sm:px-6 md:px-[6vw] md:pb-40 border-t border-white/10"
    >
      {/* Sliver of Earth rising at the bottom edge — the hero, bookended */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[62vw] left-1/2 size-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(111,182,255,0.35),rgba(111,182,255,0.05)_55%,transparent_70%)]"
      />

      <div className="relative grid gap-12 pt-20 md:grid-cols-2 md:gap-16 md:pt-28">
        {/* Left Column: Ticking timer & direct info */}
        <div data-reveal>
          <p className="font-mono text-label text-earth uppercase tracking-[0.2em]">
            // {contactData.eyebrow}
          </p>
          <h2 id="contact-title" className="mt-4 font-display text-display text-white">
            {contactData.heading}
          </h2>
          <p className="mt-5 max-w-[28rem] text-body text-regolith/80 font-light leading-relaxed">
            {contactData.body}
          </p>

          {/* Ticking countdown window */}
          <div className="mt-10">
            <p className="font-mono text-label text-regolith/50 uppercase">
              {contactData.windowLabel}
            </p>
            <div
              className="mt-3 flex gap-2 md:gap-3"
              role="timer"
              aria-label={`${t.d} days, ${t.h} hours, ${t.m} minutes until next build window`}
            >
              {units.map(([label, v]) => (
                <div
                  key={label}
                  className="brackets min-w-[4.25rem] px-3 py-3 text-center text-white/25 md:min-w-[5.25rem] bg-void-2/60"
                >
                  <span className="block font-display text-[1.5rem] text-white tabular-nums md:text-[2.25rem]">
                    {String(v).padStart(2, '0')}
                  </span>
                  <span className="mt-1 block font-mono text-[0.625rem] tracking-[0.14em] text-regolith/60 uppercase">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct channels & Copy Email */}
          <div className="mt-10 space-y-3 font-mono text-xs text-regolith/75">
            <div className="flex items-center gap-3">
              <span className="text-earth font-bold">DIRECT DISPATCH:</span>
              <span className="select-all text-white font-medium">{brand.email}</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-2.5 py-1 rounded border border-white/20 bg-void-2 text-earth hover:bg-earth hover:text-void uppercase text-[0.625rem] transition-colors cursor-pointer"
              >
                {copied ? 'Copied [✓]' : 'Copy Address'}
              </button>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={brand.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-earth transition-colors underline underline-offset-4"
              >
                GitHub Profile ↗
              </a>
              <a
                href={brand.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-earth transition-colors underline underline-offset-4"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Telemetry Manifest Form */}
        <form
          noValidate
          onSubmit={onSubmit}
          aria-describedby="reserve-status"
          className="space-y-4 rounded-[8px] bg-void-2/60 p-6 sm:p-8 border border-white/10 brackets relative"
          data-reveal
        >
          <span className="font-mono text-[0.625rem] text-earth uppercase tracking-widest block mb-1">
            TELEMETRY MANIFEST // DISPATCH
          </span>

          <label className="block">
            <span className="mb-1.5 block font-mono text-label text-regolith/60 uppercase">
              Your Name
            </span>
            <input
              name="name"
              required
              autoComplete="name"
              placeholder="As it should appear on the manifest"
              className={field}
              onInput={() => setStatus('idle')}
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block font-mono text-label text-regolith/60 uppercase">
              Your Email
            </span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@domain.com"
              className={field}
              onInput={() => setStatus('idle')}
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block font-mono text-label text-regolith/60 uppercase">
              Collaboration Topic
            </span>
            <input
              name="topic"
              placeholder="e.g. Hackathon Team, RoomRush, or Project Discussion"
              className={field}
              onInput={() => setStatus('idle')}
            />
          </label>

          <label className="block">
            <span className="mb-1.5 block font-mono text-label text-regolith/60 uppercase">
              Message Payload
            </span>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="What would you like to build or explore together?"
              className={`${field} resize-none`}
              onInput={() => setStatus('idle')}
            />
          </label>

          <button
            type="submit"
            className="mt-2 w-full rounded-[4px] bg-white px-5 py-4 font-mono text-label text-void font-bold uppercase tracking-wider transition-colors hover:bg-earth cursor-pointer"
          >
            Dispatch to Manifest →
          </button>

          <p id="reserve-status" role="status" className="min-h-[1.25rem] font-mono text-xs text-regolith/70 pt-1">
            {status === 'invalid' && 'Name and valid email required — the manifest is strict.'}
            {status === 'sent' &&
              `Your mail app should be open with your dispatch drafted. If not, write directly to: ${brand.email}.`}
          </p>
        </form>
      </div>
    </section>
  );
}
