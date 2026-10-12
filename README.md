# Agentic AI Engineering Lab

An interactive, browser-first engineering lab for learning how AI agents work—from the first tool call to production-grade systems.

**Live URL (after GitHub Pages is enabled):** https://ChetanAmritanshu.github.io/Agentic-AI-Engineering-Lab/

## Phase 1

- Premium responsive homepage with a deterministic agent-network demo
- Complete Chapter 01: **Meet Your First AI Agent**
- Nine lessons following Story → Problem → Visualize → Play → Engineer → Break → Challenge → Takeaway
- Interactive agent loop, tool-selection playground, architecture explorer, failure lab, and five-round challenge
- Local progress persistence with no account required
- Static-export and GitHub Pages support

All weather, time, and model behavior shown in Phase 1 is simulated in the browser and clearly labeled. No API key or backend is required.

## Stack

- Next.js 16 App Router
- React 19 and strict TypeScript
- Tailwind CSS 4
- Motion for React
- Lucide icons
- Vitest

The project includes `@xyflow/react` for future graph-heavy labs. Chapter 01 uses lighter custom diagrams to keep the initial bundle and interactions focused.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Validation

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run build:pages
```

The Pages build writes a static export to `out/` and applies the `/Agentic-AI-Engineering-Lab` base path only in the GitHub Pages environment.

## Deployment

The workflow at `.github/workflows/deploy-pages.yml` builds and deploys `out/` whenever `main` is pushed. In repository settings, set **Pages → Source** to **GitHub Actions**.

## Roadmap

Future phases will cover retrieval and context, tool-calling patterns, durable state and memory, evaluation, observability, security, cost controls, multi-agent systems, MCP, and capstone projects. These are roadmap items, not shipped features.

## License

MIT © 2026 Chetan Amritanshu
