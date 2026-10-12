"use client";

import { useState } from "react";
import { BrainCircuit, ClipboardList, Cpu, FileText, NotebookPen, UserRound, Wrench } from "lucide-react";

const parts = [
  {id:"goal",title:"User goal",simple:"The job Bob was asked to do.",real:"A request, success condition, and any constraints.",icon:UserRound},
  {id:"model",title:"Language model",simple:"Bob's pattern-finding brain.",real:"A model proposes the next message or structured tool call.",icon:BrainCircuit},
  {id:"instructions",title:"Instructions",simple:"The rules Bob must follow.",real:"System and developer policies constrain behavior.",icon:FileText},
  {id:"tools",title:"Available tools",simple:"Gadgets in Bob's backpack.",real:"Typed capabilities with names, schemas, permissions, and error contracts.",icon:Wrench},
  {id:"controller",title:"Execution controller",simple:"The coach who runs each turn.",real:"Application code validates calls, executes tools, enforces limits, and stops the loop.",icon:Cpu},
  {id:"state",title:"Working state",simple:"Bob's little notebook.",real:"The messages, observations, and intermediate status for this run.",icon:NotebookPen},
  {id:"response",title:"Final response",simple:"What Bob tells the user.",real:"A grounded result produced after the goal or a safe stopping condition is reached.",icon:ClipboardList},
];
export function AgentArchitecture(){const [open,setOpen]=useState("model");return <div className="grid gap-4 lg:grid-cols-[.8fr_1.2fr]"><div className="panel p-4">{parts.map(({id,title,icon:Icon})=><button key={id} onClick={()=>setOpen(id)} aria-expanded={open===id} className={`flex w-full items-center gap-3 rounded-xl p-3 text-left text-sm transition ${open===id?"bg-[#55e6ff]/10 text-white":"text-[#96a5ba] hover:bg-white/[.04]"}`}><span className={`grid h-9 w-9 place-items-center rounded-lg ${open===id?"bg-[#55e6ff] text-[#07101b]":"bg-white/[.04]"}`}><Icon size={17}/></span>{title}<span className="ml-auto text-[#596a82]">{open===id?"−":"+"}</span></button>)}</div><div className="panel relative grid min-h-96 place-items-center overflow-hidden p-8 grid-bg">{parts.map(({id,title,simple,real,icon:Icon})=>open===id&&<div key={id} className="relative max-w-md text-center"><div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl border border-[#55e6ff]/30 bg-[#55e6ff]/10 text-[#55e6ff] shadow-[0_0_45px_rgba(85,230,255,.1)]"><Icon size={34}/></div><p className="eyebrow mt-8">Inside an agent</p><h3 className="font-heading mt-3 text-3xl font-semibold">{title}</h3><p className="mt-4 text-lg text-white">{simple}</p><p className="mt-4 text-sm leading-6 text-[#8d9bb0]">Engineering view: {real}</p></div>)}</div><p className="lg:col-span-2 text-sm leading-6 text-[#91a0b8]"><strong className="text-white">Important:</strong> working state may disappear when a run ends. Persistent memory is a separate system you must deliberately design. A language model does not automatically remember every past conversation.</p></div>}
