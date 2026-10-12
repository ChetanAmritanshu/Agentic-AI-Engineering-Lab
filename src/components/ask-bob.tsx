"use client";

import { useState } from "react";
import { CloudRain } from "lucide-react";
import { Bob } from "./bob";

export function AskBob(){const [asked,setAsked]=useState(false);return <div className="panel grid items-center gap-5 p-6 md:grid-cols-[auto_1fr_auto] md:p-8"><Bob mood={asked?"thinking":"curious"} size="md"/><div><p className="font-mono text-[10px] text-[#55e6ff]">CONVERSATION 001</p><p className="font-heading mt-3 text-2xl font-semibold">“Bob, is it raining outside?”</p><div aria-live="polite" className="mt-5 min-h-16 rounded-2xl rounded-tl-sm border border-white/10 bg-[#070b12] p-4 text-sm leading-6 text-[#a9b6c8]">{asked?<span>I&apos;m good at words, but I cannot see the sky. I need information from a <strong className="text-[#55e6ff]">weather tool</strong> before I can answer honestly.</span>:<span className="text-[#68778e]">Bob is waiting for your question…</span>}</div></div><button onClick={()=>setAsked(true)} disabled={asked} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#55e6ff] px-5 py-3 text-sm font-bold text-[#07101b] disabled:opacity-40"><CloudRain size={16}/>{asked?"Asked":"Ask Bob"}</button></div>}
