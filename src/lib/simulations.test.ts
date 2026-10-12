import { describe, expect, it } from "vitest";
import { AGENT_STAGES, failureOutcomes, gradeChallenge, gradeToolChoice, toolTasks } from "./simulations";

describe("agent loop", () => {
  it("keeps the safe teaching order", () => {
    expect(AGENT_STAGES).toEqual(["goal", "decide", "act", "observe", "finish"]);
  });
});

describe("tool selection", () => {
  it.each(toolTasks)("grades $prompt deterministically", (task) => {
    expect(gradeToolChoice(task, task.answer).correct).toBe(true);
  });
  it("does not encourage unnecessary tool calls", () => {
    expect(gradeToolChoice(toolTasks[3], "weather").correct).toBe(false);
  });
});

describe("failure policies", () => {
  it("accepts bounded retry and honest failure", () => {
    expect(failureOutcomes.bounded.safe).toBe(true);
    expect(failureOutcomes.honest.safe).toBe(true);
  });
  it("rejects invention and infinite retries", () => {
    expect(failureOutcomes.invent.safe).toBe(false);
    expect(failureOutcomes.forever.safe).toBe(false);
  });
});

describe("challenge grading", () => {
  it.each([[0, "agent"], [1, "calculator"], [2, "goal,decide,act,observe,finish"], [3, "bounded"], [4, "calendar"]] as const)("accepts round %s", (round, answer) => {
    expect(gradeChallenge(round, answer).correct).toBe(true);
  });
});
