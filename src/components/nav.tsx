"use client";

import Link from "next/link";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { href, SITE } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.07] bg-[#070b12]/80 backdrop-blur-xl"><div className="shell flex h-18 items-center justify-between"><Link href={href("/")} className="font-heading text-sm font-bold tracking-[.08em]">AGENTIC AI <span className="text-[#55e6ff]">LAB</span></Link><nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex"><Link href={href("/")} className="text-sm text-white">Home</Link><Link href={href("/learn/01-what-is-an-ai-agent/")} className="text-sm text-[#aebbd0] hover:text-white">Learn</Link><span className="text-sm text-[#66748c]">Playground <small className="ml-1 rounded-full border border-white/10 px-1.5 py-0.5 text-[9px]">SOON</small></span><span className="text-sm text-[#66748c]">Challenges <small className="ml-1 rounded-full border border-white/10 px-1.5 py-0.5 text-[9px]">SOON</small></span><a href={SITE.repository} aria-label="GitHub repository" target="_blank" rel="noreferrer"><Github size={18}/></a><Link href={href("/learn/01-what-is-an-ai-agent/")} className="rounded-full bg-[#55e6ff] px-5 py-2.5 text-sm font-bold text-[#041017]">Start learning</Link></nav><button className="rounded-lg p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div>{open && <nav className="shell grid gap-2 border-t border-white/10 py-5 md:hidden"><Link href={href("/")} onClick={() => setOpen(false)} className="rounded-lg p-3">Home</Link><Link href={href("/learn/01-what-is-an-ai-agent/")} onClick={() => setOpen(false)} className="rounded-lg p-3">Learn</Link><span className="p-3 text-[#66748c]">Playground · Coming soon</span><span className="p-3 text-[#66748c]">Challenges · Coming soon</span><a href={SITE.repository} className="p-3">GitHub</a></nav>}</header>;
}
