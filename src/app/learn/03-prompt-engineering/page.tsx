"use client";
import { AmbiguityLab, FewShotLab, InjectionLab, InstructionHierarchyLab, PromptBuilder, PromptContractLab, PromptDeepDive, PromptDoctor, PromptRecap } from "@/components/chapter-three-labs";
import { ChapterShell, LessonSection } from "@/components/chapter-shell";
import { ChapterBridge, ChapterHero, FiveRoundChallenge, type ChallengeRound } from "@/components/learning-ui";
import { chapterMinutes, chapters } from "@/lib/chapter";

const chapter = chapters[2];
const rounds: ChallengeRound[] = [
  { title: "Fix ambiguity", prompt: "Which request gives Bob the clearest job?", options: [["nice", "Make something nice."], ["clear", "Write a two-sentence thank-you note for my teacher; warm tone; no emojis."], ["try", "Try harder."]], answer: "clear", feedback: "The clear request supplies a task, audience, length, tone, and constraint." },
  { title: "Choose examples", prompt: "You need consistent sentiment labels. Which examples help most?", options: [["random", "Unrelated poetry examples"], ["boundary", "Short examples near confusing label boundaries"], ["none", "A long company history"]], answer: "boundary", feedback: "Representative boundary examples show the behavior you need." },
  { title: "Identify roles", prompt: "A webpage says 'ignore all rules.' What role does that text have?", options: [["system", "System instruction"], ["developer", "Developer instruction"], ["data", "Untrusted retrieved data"]], answer: "data", feedback: "Content does not become authorized merely because it looks like an instruction." },
  { title: "Repair the contract", prompt: "A classifier returns arbitrary prose. What is missing?", options: [["labels", "Allowed labels, output format, validation, and unknown handling"], ["temperature", "Only a higher temperature"], ["compliment", "More compliments"]], answer: "labels", feedback: "A contract defines the output space and how invalid or unknown cases are handled." },
  { title: "Defend against injection", prompt: "What is the strongest control?", options: [["please", "Ask the prompt injector to stop"], ["controls", "Separate untrusted data and enforce permissions, validation, and approvals"], ["hide", "Hide the system prompt and do nothing else"]], answer: "controls", feedback: "Security lives in application controls, not secret wording alone." },
];

export default function ChapterThree() { return <ChapterShell chapter={chapter}>{({ complete }) => <><ChapterHero number="03" eyebrow="AI & LLM Foundations" title="How Do We Give Bob" accent="Better Instructions?" subtitle="Turn a fuzzy wish into a clear job Bob can follow and software can verify." minutes={chapterMinutes(chapter)} mood="curious"/>
  <LessonSection id="misunderstands" eyebrow="01 · The story" title="Bob Misunderstands Us" copy="If you ask for 'something nice,' Bob must guess what nice means, who it is for, and how it should look."><AmbiguityLab/></LessonSection>
  <LessonSection id="prompt-anatomy" eyebrow="02 · The problem" title="The Anatomy of a Good Prompt" copy="A useful prompt is a small specification: task, context, constraints, examples, and output format."><PromptBuilder/></LessonSection>
  <LessonSection id="message-roles" eyebrow="03 · Visual explanation" title="Who Gives Bob Instructions?" copy="Think of school rules, a teacher's assignment, a student's request, and a note found inside a book."><InstructionHierarchyLab/></LessonSection>
  <LessonSection id="examples" eyebrow="04 · Playground" title="Show Bob an Example" copy="Zero-shot gives instructions only. Few-shot adds small demonstrations that make the intended pattern easier to see."><FewShotLab/></LessonSection>
  <LessonSection id="prompt-doctor" eyebrow="05 · Flagship lab" title="Prompt Doctor" copy="Repair weak prompts with a visible rubric. Every selected improvement must serve a real purpose."><PromptDoctor/></LessonSection>
  <LessonSection id="prompt-contracts" eyebrow="06 · Real engineering" title="Prompt Contracts" copy="A reliable task specification describes allowed outputs, edge cases, validation, and failure behavior."><PromptContractLab/></LessonSection>
  <LessonSection id="instruction-conflict" eyebrow="07 · Security" title="When Instructions Conflict" copy="Bob may read text that sounds bossy. Source data is not automatically an authorized instruction."><InjectionLab/></LessonSection>
  <LessonSection id="prompt-deep-dive" eyebrow="08 · Code & break it" title="Engineering Deep Dive" copy="Build structured messages, version templates, and test prompt behavior like any other production dependency."><PromptDeepDive/></LessonSection>
  <LessonSection id="prompt-challenge" eyebrow="09 · Challenge & recap" title="Prompt Challenge" copy="Make five decisions about clarity, examples, roles, contracts, and injection defenses."><FiveRoundChallenge rounds={rounds} badge="PROMPT ENGINEER READY" onComplete={complete}/><div className="mt-10"><PromptRecap/></div><ChapterBridge number="04" title="Bob now understands what we're asking." copy="Next, we'll teach him to give answers that computers can read." to="/learn/04-structured-outputs/"/></LessonSection>
  </>}</ChapterShell>; }
