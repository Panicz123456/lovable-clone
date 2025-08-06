import { openai, createAgent } from "@inngest/agent-kit";

import { inngest } from "./client";

export  const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event}) => {
    const codeAgent = createAgent({
      name: "code-agent",
      system: "You are a expert next.js developer. You write readable, maintainable code. You write simple Next.js & React snippets",
      model: openai({ model: "gpt-4o" }),
    });

    const { output } = await codeAgent.run(
      `Write the following snippets: ${event.data.value}`
    );

    return { output };
  }
);
