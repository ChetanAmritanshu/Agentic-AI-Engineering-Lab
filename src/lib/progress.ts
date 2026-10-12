"use client";

import { useCallback, useEffect, useState } from "react";

export const PROGRESS_KEY = "agentic-ai-lab:chapter-01";

type SavedProgress = { visited: string[]; complete: boolean; updatedAt: string };
const empty: SavedProgress = { visited: [], complete: false, updatedAt: "" };

export function useChapterProgress() {
  const [progress, setProgress] = useState<SavedProgress>(empty);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let restored = empty;
    try {
      const saved = window.localStorage.getItem(PROGRESS_KEY);
      if (saved) restored = JSON.parse(saved) as SavedProgress;
    } catch {
      window.localStorage.removeItem(PROGRESS_KEY);
    }
    const timer = window.setTimeout(() => {
      setProgress(restored);
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const persist = useCallback((next: SavedProgress) => {
    setProgress(next);
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
  }, []);

  const visit = useCallback((id: string) => {
    setProgress((current) => {
      if (current.visited.includes(id)) return current;
      const next = { ...current, visited: [...current.visited, id], updatedAt: new Date().toISOString() };
      window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const complete = useCallback(() => persist({ ...progress, complete: true, updatedAt: new Date().toISOString() }), [persist, progress]);
  const reset = useCallback(() => persist(empty), [persist]);

  return { progress, ready, visit, complete, reset };
}
