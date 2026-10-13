"use client";
import Link from "next/link";
import { ArrowRight, RotateCw } from "lucide-react";
import { useEffect, useState } from "react";
import { chapters } from "@/lib/chapter";
import { parseSavedProgress, progressKey } from "@/lib/progress";
import { href } from "@/lib/site";

type ResumeTarget = { chapter: (typeof chapters)[number]; section: string; label: string };
export function ResumeLearning() { const [target, setTarget] = useState<ResumeTarget | null>(null); useEffect(() => { const candidates = chapters.map((chapter) => ({ chapter, progress: parseSavedProgress(window.localStorage.getItem(progressKey(chapter.id))) })).filter(({ progress }) => !progress.complete && progress.visited.length > 0).sort((a, b) => Date.parse(b.progress.updatedAt || "0") - Date.parse(a.progress.updatedAt || "0")); const latest = candidates[0]; const section = latest?.progress.visited.at(-1); const item = latest?.chapter.sections.find((entry) => entry.id === section); const timer = window.setTimeout(() => setTarget(latest && section && item ? { chapter: latest.chapter, section, label: item.shortTitle } : null), 0); return () => window.clearTimeout(timer); }, []); if (!target) return null; return <div className="shell -mt-10 pb-10"><div className="flex flex-col gap-4 rounded-2xl border border-[#55e6ff]/20 bg-[#0b1821] p-4 shadow-2xl md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#55e6ff]/10 text-[#55e6ff]"><RotateCw size={16}/></span><div><p className="text-xs font-semibold">Continue where you left off</p><p className="mt-1 text-[11px] text-[#7f8da3]">Chapter {target.chapter.number} · {target.label}</p></div></div><Link href={href(`${target.chapter.path}#${target.section}`)} className="inline-flex items-center gap-2 text-xs font-bold text-[#8cefff]">Resume learning <ArrowRight size={13}/></Link></div></div>; }
