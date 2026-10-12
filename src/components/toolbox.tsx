"use client";

import { useState } from "react";
import { Calculator, Clock3, CloudRain, MessageCircle } from "lucide-react";
import { gradeToolChoice, toolTasks, type ToolName } from "@/lib/simulations";

const tools: {name:ToolName;label:string;icon:typeof Calculator}[] = [{name:"weather",label:"Weather Checker",icon:CloudRain},{name:"calculator",label:"Calculator",icon:Calculator},{name:"clock",label:"Clock",icon:Clock3},{name:"none",label:"No tool",icon:MessageCircle}];

export function Toolbox() {
  const [task,setTask]=useState(0); const [choice,setChoice]=useState<ToolName|null>(null);
  const result=choice?gradeToolChoice(toolTasks[task],choice):null;
  const next=()=>{setTask((task+1)%toolTasks.length);setChoice(null)};
  return <div className="panel p-5 md:p-8"><div className="grid gap-6 lg:grid-cols-[.72fr_1.28fr]"><div className="rounded-2xl border border-[#8b6cf4]/20 bg-[#8b6cf4]/[.06] p-6"><p className="font-mono text-[10px] text-[#a995ff]">TASK {task+1} OF {toolTasks.length}</p><p className="font-heading mt-8 text-2xl font-semibold">“{toolTasks[task].prompt}”</p><p className="mt-3 text-sm leading-6 text-[#91a0b8]">Which gadget should Bob take from his backpack?</p></div><div className="grid grid-cols-2 gap-3">{tools.map(({name,label,icon:Icon})=><button key={name} onClick={()=>setChoice(name)} className={`min-h-28 rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 ${choice===name?"border-[#55e6ff]/60 bg-[#55e6ff]/10":"border-white/10 bg-white/[.025]"}`}><Icon size={20} className="text-[#55e6ff]"/><span className="mt-4 block text-sm font-semibold">{label}</span></button>)}</div></div>{result&&<div aria-live="polite" className={`mt-5 flex flex-col gap-3 rounded-xl border p-4 text-sm md:flex-row md:items-center md:justify-between ${result.correct?"border-[#45e4a5]/25 bg-[#45e4a5]/[.05]":"border-[#ffca65]/25 bg-[#ffca65]/[.05]"}`}><p><strong>{result.correct?"Good choice. ":"Try once more. "}</strong>{result.message}</p>{result.correct&&<button onClick={next} className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#07101b]">Next task</button>}</div>}</div>;
}
