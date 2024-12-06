
import {z} from 'zod'

export const generalInfoSchema = z.object({
    title: z.string().trim().optional().or(z.literal(''))
})