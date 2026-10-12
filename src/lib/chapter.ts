export type ChapterSection = {
  id: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  time: number;
};

export const chapterOneSections: ChapterSection[] = [
  { id: "meet-bob", eyebrow: "The story", title: "Meet Bob", shortTitle: "Meet Bob", time: 4 },
  { id: "chatbot-vs-agent", eyebrow: "The problem", title: "A chatbot versus an agent", shortTitle: "Chatbot vs agent", time: 5 },
  { id: "agent-loop", eyebrow: "Visual explanation", title: "The Agent Loop", shortTitle: "Agent Loop", time: 7 },
  { id: "toolbox", eyebrow: "Playground", title: "Bob's Toolbox", shortTitle: "Toolbox", time: 5 },
  { id: "inside-agent", eyebrow: "Real engineering", title: "Inside an Agent", shortTitle: "Architecture", time: 7 },
  { id: "first-agent", eyebrow: "Code", title: "Your First Agent in Python", shortTitle: "Python agent", time: 9 },
  { id: "break-bob", eyebrow: "Break it", title: "Break Bob", shortTitle: "Failure lab", time: 7 },
  { id: "challenge", eyebrow: "The challenge", title: "The Agent Challenge", shortTitle: "Challenge", time: 9 },
  { id: "recap", eyebrow: "The takeaway", title: "What You Learned", shortTitle: "Recap", time: 4 },
];

export const totalChapterMinutes = chapterOneSections.reduce((sum, item) => sum + item.time, 0);
