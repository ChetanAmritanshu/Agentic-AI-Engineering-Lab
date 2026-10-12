import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { href, SITE } from "@/lib/site";

export function ButtonLink({ children, to, secondary = false }: { children: React.ReactNode; to: string; secondary?: boolean }) {
  return <Link href={href(to)} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition ${secondary ? "border border-white/15 bg-white/[.035] hover:bg-white/[.07]" : "bg-[#55e6ff] text-[#041017] shadow-[0_0_28px_rgba(85,230,255,.2)] hover:-translate-y-0.5 hover:bg-[#7bedff]"}`}>{children}<ArrowRight size={16} aria-hidden /></Link>;
}

export function SiteFooter() {
  return <footer className="border-t border-white/10 py-12"><div className="shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><div className="font-heading text-lg font-bold tracking-tight">AGENTIC AI <span className="text-[#55e6ff]">LAB</span></div><p className="mt-3 max-w-xl text-sm leading-6 text-[#91a0b8]">Part of the Engineering Labs ecosystem. Free educational material for learning how agentic systems work—not production, legal, or safety advice.</p></div><a className="inline-flex items-center gap-2 text-sm font-semibold text-[#c8d3e7] hover:text-white" href={SITE.repository} target="_blank" rel="noreferrer"><Github size={17} />GitHub repository</a></div></footer>;
}

export function SectionHeading({ eyebrow, title, copy, center = false }: { eyebrow: string; title: string; copy?: string; center?: boolean }) {
  return <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><p className="eyebrow">{eyebrow}</p><h2 className="section-title mt-4">{title}</h2>{copy && <p className="mt-5 text-base leading-7 text-[#91a0b8] md:text-lg">{copy}</p>}</div>;
}
