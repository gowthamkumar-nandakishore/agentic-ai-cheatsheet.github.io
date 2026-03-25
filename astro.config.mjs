import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://gowthamkumar-nandakishore.github.io",
  base: "/aicheatsheet",
  integrations: [
    starlight({
      title: "AI Cheatsheet",
      description:
        "Comprehensive reference for Prompt Engineering, Context Engineering, Agentic AI, and .claude/ Architecture.",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/gowthamkumar-nandakishore/aicheatsheet",
        },
      ],
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Getting Started",
          items: [{ slug: "guides/introduction" }],
        },
        {
          label: "Prompt Engineering",
          items: [
            { slug: "prompt-engineering/core-formula" },
            { slug: "prompt-engineering/techniques" },
            { slug: "prompt-engineering/templates" },
            { slug: "prompt-engineering/troubleshooting" },
          ],
        },
        {
          label: "Context Engineering",
          items: [
            { slug: "context-engineering/core-problem" },
            { slug: "context-engineering/three-tier-memory" },
            { slug: "context-engineering/loading-strategies" },
            { slug: "context-engineering/window-management" },
            { slug: "context-engineering/anti-patterns" },
          ],
        },
        {
          label: "Agentic AI",
          items: [
            { slug: "agentic-ai/what-is-agentic" },
            { slug: "agentic-ai/agent-loop" },
            { slug: "agentic-ai/core-patterns" },
            { slug: "agentic-ai/coordination-via-files" },
            { slug: "agentic-ai/failure-modes" },
          ],
        },
        {
          label: "The .claude/ Architecture",
          items: [
            { slug: "claude-architecture/project-level" },
            { slug: "claude-architecture/user-level" },
            { slug: "claude-architecture/core-components" },
          ],
        },
      ],
    }),
  ],
});
