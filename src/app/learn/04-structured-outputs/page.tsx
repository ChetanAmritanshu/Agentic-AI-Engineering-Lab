"use client";
import { DataFailureLab, DataRecap, JsonExplorer, JsonRepairWorkshop, MessyAnswerLab, PydanticLab, ReliableOutputsLab, SchemaDesigner, ValidationPipelineSimulator } from "@/components/chapter-four-labs";
import { ChapterShell, LessonSection } from "@/components/chapter-shell";
import { ChapterHero, FiveRoundChallenge, type ChallengeRound } from "@/components/learning-ui";
import { chapterMinutes, chapters } from "@/lib/chapter";

const chapter = chapters[3];
const rounds: ChallengeRound[] = [
  { title: "Read JSON", prompt: "In {\"name\":\"Bob\"}, what is 'name'?", options: [["value", "A value"], ["key", "A key"], ["array", "An array"]], answer: "key", feedback: "A key is the string label on the left side of a key–value pair." },
  { title: "Identify types", prompt: "What type is the value true?", options: [["string", "String"], ["boolean", "Boolean"], ["number", "Number"]], answer: "boolean", feedback: "true and false are JSON booleans. They are not quoted strings." },
  { title: "Repair syntax", prompt: "Which fragment is valid JSON?", options: [["single", "{'price': 2}"], ["double", "{\"price\": 2}"], ["trailing", "{\"price\": 2,}"]], answer: "double", feedback: "JSON object keys use double quotes and the final field has no trailing comma." },
  { title: "Fix the schema", prompt: "The schema requires price: number, but output has \"price\": \"24.99\". What failed?", options: [["syntax", "JSON syntax"], ["type", "Schema type validation"], ["nothing", "Nothing"]], answer: "type", feedback: "The JSON parses, but the field has a string where the schema requires a number." },
  { title: "Design the pipeline", prompt: "Which order is reliable?", options: [["trust", "Generate → trust immediately"], ["pipeline", "Generate → parse → schema validate → semantic validate → accept or recover"], ["forever", "Generate → retry forever"]], answer: "pipeline", feedback: "Each stage catches a different class of failure and recovery remains bounded." },
];

export default function ChapterFour() { return <ChapterShell chapter={chapter}>{({ complete }) => <><ChapterHero number="04" eyebrow="AI & LLM Foundations" title="Teaching Bob to Answer in a" accent="Perfect Format" subtitle="Give Bob a form, check every box, and keep messy data away from the rest of your software." minutes={chapterMinutes(chapter)} mood="happy"/>
  <LessonSection id="messy-answers" eyebrow="01 · The story" title="Bob's Messy Answers" copy="Humans understand flexible sentences. Programs usually need stable labels and predictable value types."><MessyAnswerLab/></LessonSection>
  <LessonSection id="meet-json" eyebrow="02 · The problem" title="Meet JSON" copy="JSON is a set of labeled boxes that people and programs can both read."><JsonExplorer/></LessonSection>
  <LessonSection id="answer-template" eyebrow="03 · Visual explanation" title="Bob's Answer Template" copy="A schema is like a form: it names fields, types, required boxes, allowed values, and nested structures."><SchemaDesigner/></LessonSection>
  <LessonSection id="json-repair" eyebrow="04 · Flagship lab" title="JSON Repair Workshop" copy="Edit broken responses and ask two separate questions: does it parse, and does it match the schema?"><JsonRepairWorkshop/></LessonSection>
  <LessonSection id="validation-pipeline" eyebrow="05 · Playground" title="What Happens When Bob Gets It Wrong?" copy="A safe pipeline checks syntax, shape, and business meaning before accepting generated data."><ValidationPipelineSimulator/></LessonSection>
  <LessonSection id="pydantic" eyebrow="06 · Real engineering" title="Meet Pydantic" copy="Pydantic v2 turns validation rules into typed Python models and structured errors."><PydanticLab/></LessonSection>
  <LessonSection id="reliable-outputs" eyebrow="07 · Production depth" title="Reliable Structured Outputs" copy="Provider features can help generation, but your application still owns validation and recovery."><ReliableOutputsLab/></LessonSection>
  <LessonSection id="break-pipeline" eyebrow="08 · Break it" title="Break Bob's Data Pipeline" copy="Choose safe recovery for invalid syntax, missing fields, impossible values, and repeated failure."><DataFailureLab/></LessonSection>
  <LessonSection id="data-challenge" eyebrow="09 · Challenge & recap" title="Structured Output Challenge" copy="Read, repair, validate, and design a reliable extraction pipeline in five rounds."><FiveRoundChallenge rounds={rounds} badge="STRUCTURED OUTPUTS MASTERED" onComplete={complete}/><div className="mt-10"><DataRecap/></div><div className="panel mt-10 p-7"><p className="eyebrow">Chapter 04 complete</p><h3 className="font-heading mt-4 text-2xl font-semibold">Bob can now give clean, predictable answers.</h3><p className="mt-2 text-sm text-[#91a0b8]">Next, we&apos;ll teach him how to use real tools. Chapter 05 is coming soon.</p><button disabled className="mt-6 rounded-full border border-white/10 px-5 py-3 text-sm text-[#65758c]">Chapter 05 · Coming soon</button></div></LessonSection>
  </>}</ChapterShell>; }
