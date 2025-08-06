import { serve } from 'inngest/next'

import { helloWorld } from '@/inngest/functions'
import { inngest } from '../../../inngest/client'

export const { POST, GET, PUT } = serve({
	client: inngest,
	functions: [
		helloWorld
	]
})