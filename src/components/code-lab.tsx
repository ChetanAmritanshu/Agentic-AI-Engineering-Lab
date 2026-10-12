"use client";

import { Check, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

const mockCode = `# This is a deterministic teaching model — no API key needed.
def mock_model(messages, tools):
    last = messages[-1]
    if last["role"] == "user":
        return {"tool_call": {"name": "weather", "args": {"city": "Delhi"}}}
    return {"final": f"The tool says: {last['content']}"}

def weather(city):
    return "Rain, 18°C (simulated)"

tools = {"weather": weather}
messages = [{"role": "user", "content": "Is it raining in Delhi?"}]

decision = mock_model(messages, tools)       # 1. model selects a tool
call = decision["tool_call"]
result = tools[call["name"]](**call["args"]) # 2. controller runs it
messages.append({"role": "tool", "content": result})
answer = mock_model(messages, tools)["final"] # 3. model uses observation
print(answer)`;

const realCode = `# Pseudocode: provider SDK details vary.
response = llm.respond(messages=messages, tools=tool_schemas)

while response.has_tool_calls:
    for call in response.tool_calls:
        validate(call)            # name, arguments, permission
        result = execute(call)     # timeout + error handling
        messages.append(tool_result(call.id, result))
    response = llm.respond(messages=messages, tools=tool_schemas)

return response.text`;

export function CodeLab(){const [copied,setCopied]=useState(false);const copy=async()=>{await navigator.clipboard.writeText(mockCode);setCopied(true);window.setTimeout(()=>setCopied(false),1500)};return <div className="space-y-4"><div className="panel overflow-hidden"><div className="flex items-center justify-between border-b border-white/10 px-5 py-3"><div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#ff5f78]"/><span className="h-2.5 w-2.5 rounded-full bg-[#ffca65]"/><span className="h-2.5 w-2.5 rounded-full bg-[#45e4a5]"/><span className="ml-2 font-mono text-[10px] text-[#728198]">first_agent.py · deterministic mock</span></div><button onClick={copy} className="inline-flex items-center gap-2 text-xs text-[#91a0b8] hover:text-white">{copied?<Check size={14}/>:<Copy size={14}/>} {copied?"Copied":"Copy"}</button></div><pre className="overflow-x-auto p-5 text-[12px] leading-6 text-[#c6d2e5]"><code>{mockCode}</code></pre></div><div className="grid gap-3 md:grid-cols-3">{[["01 · Decide","The mock returns a structured tool request. Keyword routing is not the same as real model tool selection."],["02 · Execute","The controller—not the model—validates and runs the named function."],["03 · Observe","The tool result becomes a new message. The model uses it for the final answer."]].map(([t,c])=><div key={t} className="rounded-2xl border border-white/10 bg-white/[.02] p-4"><p className="font-mono text-[10px] text-[#55e6ff]">{t}</p><p className="mt-3 text-xs leading-5 text-[#91a0b8]">{c}</p></div>)}</div><details className="panel group p-5"><summary className="flex cursor-pointer list-none items-center justify-between font-semibold">Optional: the real LLM integration shape <ExternalLink size={15} className="text-[#71819a]"/></summary><p className="mt-4 text-sm leading-6 text-[#91a0b8]">A provider API can select tool calls from schemas. Your application still owns validation, execution, timeouts, permissions, and stopping.</p><pre className="mt-4 overflow-x-auto rounded-xl bg-[#050910] p-4 text-[12px] leading-6 text-[#c6d2e5]"><code>{realCode}</code></pre></details></div>}
