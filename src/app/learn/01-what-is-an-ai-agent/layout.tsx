import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chapter 01: Meet Your First AI Agent",
  description: "Teach Bob the robot to choose tools, run an agent loop, manage state, and recover safely from failures.",
};

export default function ChapterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
