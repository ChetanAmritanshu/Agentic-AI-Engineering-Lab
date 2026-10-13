"use client";

import { motion } from "motion/react";
import { useId } from "react";

export function Bob({ mood = "curious", size = "md" }: { mood?: "curious" | "happy" | "thinking" | "error"; size?: "sm" | "md" | "lg" }) {
  const instanceId = useId().replaceAll(":", "");
  const gradientId = `bob-${mood}-${instanceId}`;
  const glowId = `bob-glow-${instanceId}`;
  const px = { sm: 92, md: 150, lg: 210 }[size];
  return <motion.div aria-label={`Bob the robot is ${mood}`} role="img" className="relative shrink-0" style={{ width: px, height: px }} animate={mood === "thinking" ? { y: [0,-5,0], rotate: [0,-1,1,0] } : { y: [0,-3,0] }} transition={{ duration: mood === "thinking" ? 1.2 : 3.2, repeat: Infinity, ease: "easeInOut" }}>
    <svg viewBox="0 0 220 220" width="100%" height="100%" aria-hidden>
      <defs><linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1"><stop stopColor={mood === "error" ? "#ff5f78" : "#55e6ff"}/><stop offset="1" stopColor="#8b6cf4"/></linearGradient><filter id={glowId}><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <ellipse cx="110" cy="196" rx="62" ry="10" fill="#02050a" opacity=".6"/>
      <path d="M110 38V22" stroke="#73819a" strokeWidth="5" strokeLinecap="round"/><circle cx="110" cy="17" r="7" fill={mood === "error" ? "#ff5f78" : "#55e6ff"} filter={`url(#${glowId})`}/>
      <rect x="43" y="41" width="134" height="105" rx="38" fill="#111b2c" stroke={`url(#${gradientId})`} strokeWidth="3"/>
      <rect x="56" y="55" width="108" height="72" rx="26" fill="#060b13" stroke="#283751"/>
      <motion.ellipse cx="87" cy="88" rx={mood === "happy" ? 8 : 9} ry={mood === "thinking" ? 4 : 10} fill="#55e6ff" animate={{ opacity: [1,.65,1] }} transition={{ duration: 2, repeat: Infinity }}/>
      <ellipse cx="133" cy="88" rx={mood === "happy" ? 8 : 9} ry={mood === "thinking" ? 4 : 10} fill={mood === "error" ? "#ff5f78" : "#55e6ff"}/>
      <path d={mood === "error" ? "M93 112 Q110 100 127 112" : mood === "happy" ? "M91 104 Q110 122 129 104" : "M96 108 Q110 114 124 108"} fill="none" stroke="#c8f8ff" strokeWidth="4" strokeLinecap="round"/>
      <path d="M76 147v28c0 14 13 25 29 25h10c16 0 29-11 29-25v-28" fill="#101827" stroke="#566681" strokeWidth="3"/>
      <rect x="86" y="157" width="48" height="21" rx="9" fill={`url(#${gradientId})`} opacity=".85"/>
      <path d="M75 158 48 174M145 158l27 16" stroke="#687896" strokeWidth="8" strokeLinecap="round"/>
    </svg>
  </motion.div>;
}
