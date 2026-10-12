export const AGENT_STAGES = ["goal", "decide", "act", "observe", "finish"] as const;
export type AgentStage = (typeof AGENT_STAGES)[number];

export const stageCopy: Record<AgentStage, { label: string; summary: string }> = {
  goal: { label: "Goal", summary: "Find the weather outside." },
  decide: { label: "Decide", summary: "I need weather information." },
  act: { label: "Act", summary: "Call the weather tool." },
  observe: { label: "Observe", summary: "The tool returned: Rain." },
  finish: { label: "Finish", summary: "Tell the user to carry an umbrella." },
};

export type ToolName = "weather" | "calculator" | "clock" | "none";
export type ToolTask = { id: string; prompt: string; answer: ToolName; explanation: string };

export const toolTasks: ToolTask[] = [
  { id: "rain", prompt: "Is it raining?", answer: "weather", explanation: "Bob needs an outside observation, so the Weather Checker is useful." },
  { id: "math", prompt: "What is 12 × 8?", answer: "calculator", explanation: "The Calculator can compute 96 exactly." },
  { id: "time", prompt: "What time is it?", answer: "clock", explanation: "Current time changes, so Bob checks the Clock." },
  { id: "joke", prompt: "Tell me a joke.", answer: "none", explanation: "Bob can write a simple joke without calling a tool." },
];

export function gradeToolChoice(task: ToolTask, choice: ToolName) {
  return { correct: task.answer === choice, message: task.answer === choice ? task.explanation : `Not quite. Ask what information Bob is missing. ${task.explanation}` };
}

export type FailureChoice = "invent" | "bounded" | "honest" | "forever";
export const failureOutcomes: Record<FailureChoice, { safe: boolean; title: string; detail: string; trace: string[] }> = {
  invent: { safe: false, title: "Bob made something up", detail: "A believable guess is still a lie. Never turn missing tool data into a fact.", trace: ["weather_tool → timeout", "agent → guessed sunny", "response → unsafe"] },
  bounded: { safe: true, title: "Good recovery", detail: "Retry only when the error might be temporary, wait briefly, and stop after a small limit.", trace: ["attempt 1 → timeout", "wait → 250 ms", "attempt 2 → rain", "response → take an umbrella"] },
  honest: { safe: true, title: "Safe and honest", detail: "When the tool stays unavailable, explain the limit and offer a useful next step.", trace: ["weather_tool → unavailable", "controller → no retry", "response → I can't verify the weather"] },
  forever: { safe: false, title: "The loop never ends", detail: "Unbounded retries waste time and money. Every loop needs a timeout and stopping condition.", trace: ["attempt 1 → fail", "attempt 2 → fail", "attempt 3 → fail", "attempt 4… → still running"] },
};

export const challengeAnswers = ["agent", "calculator", "goal,decide,act,observe,finish", "bounded", "calendar"] as const;

export function gradeChallenge(round: number, answer: string) {
  const correct = challengeAnswers[round] === answer;
  const feedback = [
    "An agent works toward a goal and can choose an action; a chatbot only produces a reply.",
    "The calculator supplies exact arithmetic that the agent can observe and use.",
    "A safe loop starts with a goal, decides, acts, observes, and then finishes or repeats.",
    "A bounded retry policy limits attempts and gives the loop a stopping condition.",
    "For planning a meeting, check the calendar, observe free slots, then propose a time.",
  ][round];
  return { correct, feedback: correct ? feedback : `Try again. Hint: ${feedback}` };
}
