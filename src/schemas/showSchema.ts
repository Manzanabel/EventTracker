import * as z from 'zod'

export const showSchema = z
  .object({
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
    capacity: z.number().min(1),
  })
  .refine((val) => !val.isPaid || val.price > 0, {
    message: 'Le prix doit être supérieur à 0 si le spectacle est payant',
    path: ['price'],
  })

export type ShowType = z.infer<typeof showSchema>
