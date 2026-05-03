import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import { CONTACT_LINKS } from '../data'

const SOCIAL_ICONS: Record<string, { icon: IconType; color: string }> = {
  Email:    { icon: FaEnvelope,   color: '#a78bfa' },
  LinkedIn: { icon: FaLinkedinIn, color: '#0A66C2' },
  GitHub:   { icon: FaGithub,     color: '#ffffff' },
  Twitter:  { icon: FaTwitter,    color: '#1DA1F2' },
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('loading')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass = `w-full bg-bg-3 border border-border rounded-lg px-4 py-3 font-mono text-[13px] text-white placeholder:text-muted/50
    outline-none transition-all duration-200 focus:border-accent/50 focus:shadow-[0_0_0_3px_rgba(167,139,250,0.08)]`

  return (
    <div className="animate-fade-up max-w-5xl mx-auto px-6 md:px-10 py-14">

      {/* Header */}
      <p className="font-mono text-[10px] text-muted tracking-[1.5px] mb-3">CONTACT</p>
      <h2 className="text-[clamp(36px,6vw,52px)] font-black tracking-[-2px] mb-3">
        Get in <span className="gradient-text">Touch</span>
      </h2>
      <p className="font-mono text-[12px] text-muted mb-12">
        {'// Let\'s build something great together'}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8">

        {/* Left: info */}
        <div className="flex flex-col gap-5">

          {/* Social link cards */}
          {CONTACT_LINKS.map((link) => {
            const cfg = SOCIAL_ICONS[link.title]
            if (!cfg) return null
            const Icon = cfg.icon
            return (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-bg-2 border border-border rounded-xl p-4 transition-all duration-200 hover:border-accent/30 hover:-translate-y-0.5 no-underline"
              >
                <div
                  className="w-10 h-10 rounded-lg bg-bg-3 border border-border flex items-center justify-center shrink-0 transition-all duration-200 group-hover:border-accent/30"
                  style={{ '--brand': cfg.color } as React.CSSProperties}
                >
                  <Icon size={16} className="text-muted group-hover:text-[var(--brand)] transition-colors duration-200" />
                </div>
                <div className="min-w-0">
                  <p className="font-cabinet font-bold text-[13px] group-hover:text-white transition-colors duration-200">
                    {link.title}
                  </p>
                  <p className="font-mono text-[11px] text-muted truncate">{link.value}</p>
                </div>
                <span className="ml-auto text-muted text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
              </a>
            )
          })}

          {/* Availability badge */}
          <div className="bg-gradient-to-br from-accent/[0.08] to-accent-2/[0.08] border border-accent/20 rounded-xl p-5 mt-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-cabinet font-extrabold text-[14px]">Available for Freelance</span>
            </div>
            <p className="font-mono text-[11px] text-muted leading-relaxed">
              Open to new projects & collaborations. Response within 24 hours.
            </p>
          </div>

        </div>

        {/* Right: form */}
        <div className="bg-bg-2 border border-border rounded-2xl overflow-hidden">
          <div className="h-[2px] bg-gradient-to-r from-accent via-accent-2 to-accent-3" />

          <div className="p-6 md:p-8">
            <h3 className="font-cabinet font-extrabold text-[17px] mb-1">Send a Message</h3>
            <p className="font-mono text-[11px] text-muted mb-6">I'll get back to you as soon as possible.</p>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-2xl">
                  ✓
                </div>
                <p className="font-cabinet font-extrabold text-[16px] text-emerald-400">Message Sent!</p>
                <p className="font-mono text-[11px] text-muted max-w-xs">
                  Thanks for reaching out. I'll reply within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 font-mono text-[11px] text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] text-muted tracking-[1px] block mb-1.5">NAME *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-muted tracking-[1px] block mb-1.5">EMAIL *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] text-muted tracking-[1px] block mb-1.5">SUBJECT</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="font-mono text-[10px] text-muted tracking-[1px] block mb-1.5">MESSAGE *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="font-mono text-[11px] text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2.5">
                    Failed to send. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-accent text-white py-3.5 rounded-lg font-cabinet font-bold text-[13px] transition-all duration-200 glow-accent hover:-translate-y-px hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Send Message ↗'
                  )}
                </button>

              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
