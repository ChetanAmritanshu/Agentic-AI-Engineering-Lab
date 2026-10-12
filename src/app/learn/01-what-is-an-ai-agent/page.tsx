"use client";

import { ArrowRight, BrainCircuit, CheckCircle2, CircleStop, Database, RefreshCw, ShieldAlert, Wrench } from "lucide-react";
import { AgentArchitecture } from "@/components/architecture";
import { AgentChallenge } from "@/components/challenge";
import { ChapterShell, LessonSection } from "@/components/chapter-shell";
import { CodeLab } from "@/components/code-lab";
import { FailureLab } from "@/components/failure-lab";
import { AgentLoop } from "@/components/agent-loop";
import { AskBob } from "@/components/ask-bob";
import { AgentComparison } from "@/components/agent-comparison";
import { Toolbox } from "@/components/toolbox";
import { Bob } from "@/components/bob";

export default function ChapterOne(){return <ChapterShell>{({complete})=><>
  <header className="relative overflow-hidden border-b border-white/[.07] px-4 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28"><div className="grid-bg absolute inset-0"/><div className="relative mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="eyebrow">Chapter 01 · AI & LLM Foundations</p><h1 className="font-heading mt-5 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.055em] md:text-7xl">Meet Your First <span className="gradient-text">AI Agent.</span></h1><p className="mt-6 text-lg leading-8 text-[#9aa8bc] md:text-xl">Let&apos;s teach a little robot how to solve problems.</p><div className="mt-8 flex flex-wrap gap-2 font-mono text-[10px] text-[#7f8ea4]"><span className="rounded-full border border-white/10 px-3 py-2">9 LESSONS</span><span className="rounded-full border border-white/10 px-3 py-2">57 MINUTES</span><span className="rounded-full border border-[#45e4a5]/20 bg-[#45e4a5]/[.04] px-3 py-2 text-[#6ce8b7]">NO API KEY</span></div></div><Bob mood="happy" size="lg"/></div></header>

  <LessonSection id="meet-bob" eyebrow="01 · The story" title="Meet Bob" copy="Bob is very good at talking. But what happens when you ask him something he cannot know by himself?"><div className="mb-8 grid gap-4 md:grid-cols-2"><Concept title="What Bob has" copy="Words, instructions, and patterns learned by a language model."/><Concept title="What Bob lacks" copy="Eyes on your window, a live clock, or automatic access to outside systems."/></div><AskBob/><p className="mt-7 max-w-3xl text-sm leading-7 text-[#91a0b8]">Bob should not guess. He can ask a trusted tool to observe something for him. An <strong className="text-white">AI agent</strong> is software that uses a model to choose useful actions in pursuit of a goal.</p></LessonSection>

  <LessonSection id="chatbot-vs-agent" eyebrow="02 · The problem" title="A chatbot versus an agent" copy="Both can write. Only one is connected to a controlled way of acting and observing."><AgentComparison/><div className="mt-8 rounded-2xl border border-[#ffca65]/20 bg-[#ffca65]/[.04] p-5 text-sm leading-6 text-[#d7c9aa]"><strong className="text-[#ffdf93]">A useful distinction:</strong> adding one fixed tool call does not automatically create an autonomous agent. Agency grows when a system can inspect a goal, choose among actions, observe results, and decide whether to continue or stop.</div></LessonSection>

  <LessonSection id="agent-loop" eyebrow="03 · Visual explanation" title="The Agent Loop" copy="A safe agent does not just act. It checks what happened and decides what to do next."><AgentLoop/></LessonSection>

  <LessonSection id="toolbox" eyebrow="04 · Playground" title="Bob's Toolbox" copy="A good agent uses a tool when the task needs outside information or reliable computation—not merely because a tool exists."><Toolbox/></LessonSection>

  <LessonSection id="inside-agent" eyebrow="05 · Real engineering" title="Inside an Agent" copy="The little robot is a friendly picture. Underneath it is a group of clear, separable engineering parts."><AgentArchitecture/></LessonSection>

  <LessonSection id="first-agent" eyebrow="06 · Code" title="Your First Agent in Python" copy="This tiny program makes every step visible. Its model decision is deliberately fixed, so you can study the control flow without an API key."><CodeLab/></LessonSection>

  <LessonSection id="break-bob" eyebrow="07 · Break it" title="Break Bob" copy="Reliable agents are honest when tools fail. Inject a weather outage and choose how Bob should recover."><FailureLab/><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><Mini icon={ShieldAlert} title="Timeout" copy="Stop waiting after a known limit."/><Mini icon={RefreshCw} title="Bounded retry" copy="Retry temporary errors only a few times."/><Mini icon={CircleStop} title="Stopping condition" copy="Every loop needs a clear exit."/><Mini icon={Database} title="Error contract" copy="Separate retryable from permanent failures."/></div></LessonSection>

  <LessonSection id="challenge" eyebrow="08 · The challenge" title="The Agent Challenge" copy="Five clear rounds. No trick questions. Use what you just learned to help Bob build a safe loop."><AgentChallenge onComplete={complete}/></LessonSection>

  <LessonSection id="recap" eyebrow="09 · The takeaway" title="What You Learned" copy="You began with a talking robot. You now have the first real mental model of an agent."><div className="grid gap-3 md:grid-cols-2">{[[BrainCircuit,"An agent pursues a goal","It uses a model inside a controlled application loop."],[Wrench,"Tools connect it to capabilities","They provide observations or actions the model alone does not have."],[RefreshCw,"The loop turns results into decisions","Goal → Decide → Act → Observe → Repeat or Finish."],[Database,"State holds the current work","It is not automatically permanent memory."],[ShieldAlert,"Failures must stay visible","Use timeouts, bounded retries, and honest fallback responses."],[CircleStop,"Stopping is a feature","Limits prevent runaway loops, wasted cost, and unsafe behavior."]].map(([Icon,title,copy])=>{const I=Icon as typeof BrainCircuit;return <div key={String(title)} className="rounded-2xl border border-white/10 bg-white/[.02] p-5"><I size={20} className="text-[#55e6ff]"/><h3 className="font-heading mt-5 text-lg font-semibold">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-[#8e9db2]">{String(copy)}</p></div>})}</div><div className="panel mt-10 flex flex-col gap-6 p-7 md:flex-row md:items-center md:justify-between"><div><div className="flex items-center gap-2 text-[#45e4a5]"><CheckCircle2 size={18}/><span className="font-mono text-[10px] font-bold tracking-wider">CHAPTER 01 COMPLETE</span></div><p className="font-heading mt-4 text-2xl font-semibold">You just learned how an AI agent works.</p><p className="mt-2 text-sm text-[#91a0b8]">Next, we&apos;ll discover what makes Bob&apos;s brain tick.</p></div><button disabled className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-[#65758c]">Chapter 02 preview · Coming soon <ArrowRight size={15}/></button></div></LessonSection>
</>}</ChapterShell>}

function Concept({title,copy}:{title:string;copy:string}){return <div className="rounded-2xl border border-white/10 bg-white/[.02] p-5"><h3 className="font-heading font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#8b9aaf]">{copy}</p></div>}
function Mini({icon:Icon,title,copy}:{icon:typeof Wrench;title:string;copy:string}){return <div className="rounded-2xl border border-white/10 p-4"><Icon size={17} className="text-[#ffca65]"/><p className="mt-4 text-sm font-semibold">{title}</p><p className="mt-2 text-xs leading-5 text-[#7f8ea4]">{copy}</p></div>}
