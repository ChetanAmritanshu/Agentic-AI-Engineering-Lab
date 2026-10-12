"use client";

import { useEffect, useState } from "react";
import { Pause, Play, RotateCcw, StepForward } from "lucide-react";
import { motion } from "motion/react";
import { AGENT_STAGES, stageCopy } from "@/lib/simulations";

export function AgentLoop() {
  const [index, setIndex] = useState(-1);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => {
      setIndex((i) => {
        const next = i + 1;
        if (next >= AGENT_STAGES.length - 1) setPlaying(false);
        return Math.min(next, AGENT_STAGES.length - 1);
      });
    }, 900);
    return () => window.clearTimeout(id);
  }, [index, playing]);
  const step = () => setIndex((i) => i >= AGENT_STAGES.length - 1 ? 0 : i + 1);
  const active = index >= 0 ? AGENT_STAGES[index] : null;
  return <div className="panel p-5 md:p-8"><div className="flex flex-wrap items-center justify-between gap-4"><div><p className="eyebrow">Execution 001</p><p className="mt-2 text-sm text-[#91a0b8]">Goal: Find the weather and help the user prepare.</p></div><div className="flex gap-2"><Control label={playing ? "Pause" : index < 0 || index === 4 ? "Start" : "Resume"} onClick={() => {if(index === 4)setIndex(-1);setPlaying(!playing)}} icon={playing ? Pause : Play}/><Control label="Step" onClick={() => {setPlaying(false);step()}} icon={StepForward}/><Control label="Reset" onClick={() => {setPlaying(false);setIndex(-1)}} icon={RotateCcw}/></div></div><div className="mt-8 grid gap-2 md:grid-cols-5">{AGENT_STAGES.map((stage,i)=><div key={stage} className="relative"><motion.div animate={active === stage ? { y: [0,-4,0] } : {}} className={`min-h-32 rounded-2xl border p-4 ${active === stage ? "border-[#55e6ff]/60 bg-[#55e6ff]/10" : i < index ? "border-[#45e4a5]/25 bg-[#45e4a5]/[.04]" : "border-white/10 bg-black/10"}`}><p className="font-mono text-[10px] text-[#6f7f97]">0{i+1}</p><h3 className={`font-heading mt-6 font-semibold ${active === stage ? "text-[#87efff]" : ""}`}>{stageCopy[stage].label}</h3><p className="mt-2 text-xs leading-5 text-[#8493a9]">{stageCopy[stage].summary}</p></motion.div>{i<4&&<span className="absolute -right-2.5 top-1/2 z-10 hidden text-[#46566d] md:block">→</span>}</div>)}</div><div aria-live="polite" className="mt-5 rounded-xl border border-white/[.08] bg-[#050910] p-4 font-mono text-xs text-[#9eb0c8]">{active ? <><span className="text-[#55e6ff]">bob/{active}</span> › {stageCopy[active].summary}</> : <span>Ready. Press Start or Step.</span>}</div><p className="mt-4 text-xs leading-5 text-[#74839a]">These are short, visible decision summaries for teaching. They are not hidden model reasoning. A real agent may repeat Decide → Act → Observe many times.</p></div>;
}
function Control({label,onClick,icon:Icon}:{label:string;onClick:()=>void;icon:typeof Play}) { return <button onClick={onClick} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-2 text-xs font-semibold hover:bg-white/[.08]"><Icon size={13}/>{label}</button> }
