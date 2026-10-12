"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Bot, BrainCircuit, Check, CloudRain, MessageSquareText, Play, RotateCcw, Wrench } from "lucide-react";

const nodes = [
  { label: "User", icon: MessageSquareText, x: "8%", y: "42%" },
  { label: "AI Agent", icon: Bot, x: "39%", y: "12%" },
  { label: "Tools", icon: Wrench, x: "71%", y: "10%" },
  { label: "Memory", icon: BrainCircuit, x: "39%", y: "70%" },
  { label: "Response", icon: Check, x: "73%", y: "67%" },
];
const steps = [0, 1, 2, 1, 3, 1, 4];

export function HeroAgent() {
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(-1);
  const [mode, setMode] = useState<"agent" | "llm">("agent");

  useEffect(() => {
    if (!running) return;
    const last = mode === "agent" ? steps.length - 1 : 2;
    const timer = window.setTimeout(() => setStep((s) => {
      const next = s + 1;
      if (next >= last) setRunning(false);
      return Math.min(next, last);
    }), 650);
    return () => window.clearTimeout(timer);
  }, [running, step, mode]);

  const active = mode === "agent" ? steps[step] : [0, 1, 4][step];
  const run = () => { setStep(-1); setRunning(true); };

  return <div className="panel noise relative overflow-hidden p-5 md:p-7">
    <div className="flex items-center justify-between gap-4"><div><p className="font-mono text-[10px] tracking-[.16em] text-[#8fa1bb]">LIVE LAB · SIMULATED</p><p className="mt-1 text-sm font-semibold">Should I carry an umbrella?</p></div><div className="flex rounded-full border border-white/10 bg-black/20 p-1 text-xs"><button onClick={() => {setMode("llm"); setStep(-1); setRunning(false)}} className={`rounded-full px-3 py-1.5 ${mode === "llm" ? "bg-white/10 text-white" : "text-[#7f8da3]"}`}>LLM</button><button onClick={() => {setMode("agent"); setStep(-1); setRunning(false)}} className={`rounded-full px-3 py-1.5 ${mode === "agent" ? "bg-[#55e6ff] text-[#041017]" : "text-[#7f8da3]"}`}>Agent</button></div></div>
    <div className="relative mt-5 h-[340px] overflow-hidden rounded-2xl border border-white/[.08] bg-[#060a11] grid-bg">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden><path d="M18 50 C28 50 29 24 43 24 S63 20 75 21 M48 31 V69 M51 75 C61 75 65 74 77 75" fill="none" stroke="#263750" strokeWidth=".45" strokeDasharray="2 2"/><motion.circle r="1.15" fill="#55e6ff" filter="drop-shadow(0 0 4px #55e6ff)" animate={running ? { offsetDistance: ["0%","100%"] } : {}} transition={{ duration: 3.8, ease: "linear" }} style={{ offsetPath: "path('M18 50 C28 50 29 24 43 24 S63 20 75 21')" }}/></svg>
      {nodes.map(({ label, icon: Icon, x, y }, index) => <motion.div key={label} className={`absolute grid w-[82px] place-items-center rounded-2xl border p-3 text-center transition md:w-[96px] ${active === index ? "border-[#55e6ff]/70 bg-[#55e6ff]/10 shadow-[0_0_35px_rgba(85,230,255,.13)]" : "border-white/10 bg-[#0c1421]"}`} style={{ left: x, top: y }} animate={active === index ? { scale: [1,1.06,1] } : { scale: 1 }}><Icon size={20} className={active === index ? "text-[#55e6ff]" : "text-[#7f8da3]"}/><span className="mt-2 text-[10px] font-semibold">{label}</span></motion.div>)}
      {step >= 2 && mode === "agent" && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-[#55e6ff]/20 bg-[#07141a]/90 px-3 py-2 text-[10px] text-[#bceff7]"><CloudRain size={13}/>Weather tool → Rain, 18°C</motion.div>}
    </div>
    <div className="mt-4 flex items-center justify-between gap-4"><p aria-live="polite" className="text-xs leading-5 text-[#91a0b8]">{step < 0 ? "Choose a system, then run it." : mode === "llm" ? (step < 2 ? "The LLM generates from its existing context…" : "It cannot verify live weather.") : (["The user gives a goal.","Bob decides information is missing.","Bob calls the weather tool.","The result returns to Bob.","Bob keeps the observation in working state.","Bob decides the goal is complete.","Take an umbrella—simulated rain detected."][step])}</p><button onClick={running ? () => {setRunning(false); setStep(-1)} : run} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#07101b]">{step >= 0 && !running ? <RotateCcw size={14}/> : <Play size={14}/>} {step >= 0 && !running ? "Again" : "Run agent"}</button></div>
  </div>;
}
