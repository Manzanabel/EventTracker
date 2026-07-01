import * as z from 'zod'

const showSchema = z.object({
  title: z.string().min(2).max(100),
  place: z.string().min(2).max(100),
  address: z.string().min(2).max(200),
  type: z.string().min(2).max(100),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  isPaid: z.boolean(),
  price: z.number().min(1),
  img: z.string().url(),
  description: z.string().min(10).max(200),
  site: z.string().url(),
  capacity: z.number().min(0),
})

export type ShowType = z.infer<typeof showSchema>
