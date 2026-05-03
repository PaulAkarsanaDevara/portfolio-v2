import { CONTACT_LINKS } from '../data'

export default function Contact() {
  return (
    <div className="animate-fade-up px-10 py-14">
      <h2 className="text-[42px] font-black tracking-[-1.5px] mb-2">Contact</h2>
      <p className="font-mono text-[12px] text-muted mb-12">// Let's build something great together</p>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {CONTACT_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-bg-2 border border-border rounded-xl p-8 transition-all duration-200 hover:border-accent/40 hover:-translate-y-0.5 cursor-pointer no-underline"
          >
            <div className="text-[28px] mb-4">{link.icon}</div>
            <div className="text-[17px] font-extrabold mb-[6px] group-hover:text-accent transition-colors">{link.title}</div>
            <div className="font-mono text-[12px] text-accent-2">{link.value}</div>
          </a>
        ))}
      </div>

      {/* Available banner */}
      <div className="bg-gradient-to-br from-accent/[0.08] to-accent-2/[0.08] border border-accent/20 rounded-xl px-8 py-7 flex items-center justify-between flex-wrap gap-5">
        <div>
          <h3 className="text-xl font-extrabold mb-[6px] flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Freelance
          </h3>
          <p className="font-mono text-[11px] text-muted">Currently open to new projects and collaborations. Response within 24 hours.</p>
        </div>
        <a
          href="mailto:arya@pratama.dev"
          className="bg-accent text-white px-7 py-3 rounded-lg font-cabinet font-bold text-[13px] transition-all duration-200 glow-accent hover:-translate-y-px no-underline"
        >
          Send Message ↗
        </a>
      </div>
    </div>
  )
}
