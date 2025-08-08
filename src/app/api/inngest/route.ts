import { serve } from "inngest/next";

import { codeAgentFunction } from "@/inngest/functions";
import { inngest } from "../../../inngest/client";

export const { POST, GET, PUT } = serve({
  client: inngest,
  functions: [codeAgentFunction],
});
