"use client";

import Link from "next/link";
import { ArrowRight, RotateCw } from "lucide-react";
import { useEffect, useState } from "react";
import { chapterOneSections } from "@/lib/chapter";
import { PROGRESS_KEY } from "@/lib/progress";
import { href } from "@/lib/site";

export function ResumeLearning(){const [section,setSection]=useState<string|null>(null);useEffect(()=>{let last:string|undefined;try{const raw=window.localStorage.getItem(PROGRESS_KEY);if(raw){const value=JSON.parse(raw) as {visited?:string[];complete?:boolean};if(!value.complete)last=value.visited?.at(-1)}}catch{}const valid=last&&chapterOneSections.some(item=>item.id===last)?last:null;const timer=window.setTimeout(()=>setSection(valid),0);return()=>window.clearTimeout(timer)},[]);if(!section)return null;const label=chapterOneSections.find(item=>item.id===section)?.shortTitle;return <div className="shell -mt-10 pb-10"><div className="flex flex-col gap-4 rounded-2xl border border-[#55e6ff]/20 bg-[#0b1821] p-4 shadow-2xl md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#55e6ff]/10 text-[#55e6ff]"><RotateCw size={16}/></span><div><p className="text-xs font-semibold">Continue where you left off</p><p className="mt-1 text-[11px] text-[#7f8da3]">Chapter 01 · {label}</p></div></div><Link href={href(`/learn/01-what-is-an-ai-agent/#${section}`)} className="inline-flex items-center gap-2 text-xs font-bold text-[#8cefff]">Resume learning <ArrowRight size={13}/></Link></div></div>}
