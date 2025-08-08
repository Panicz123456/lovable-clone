import { serve } from 'inngest/next'

import { inngest } from '../../../inngest/client'
import { codeAgentFunction } from "@/inngest/functions";

export const { POST, GET, PUT } = serve({
  client: inngest,
	functions: [
		codeAgentFunction
	],
});