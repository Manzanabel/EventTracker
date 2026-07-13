import * as z from 'zod'

export const showSchema = z
  .object({
    title: z
      .string()
      .min(2, 'Le titre doit contenir au moins 2 caractères')
      .max(100, 'Le titre ne doit pas dépasser 100 caractères'),
    place: z
      .string()
      .min(2, 'Le lieu doit contenir au moins 2 caractères')
      .max(100, 'Le lieu ne doit pas dépasser 100 caractères'),
    address: z
      .string()
      .min(2, "L'adresse doit contenir au moins 2 caractères")
      .max(200, "L'adresse ne doit pas dépasser 200 caractères"),
    type: z
      .string()
      .min(2, 'Le type doit contenir au moins 2 caractères')
      .max(100, 'Le type ne doit pas dépasser 100 caractères'),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'La date doit être au format AAAA-MM-JJ'),
    isPaid: z.boolean(),
    price: z.number().min(0, 'Le prix doit être positif'),
    img: z.string().url("L'image doit être une URL valide"),
    description: z
      .string()
      .min(10, 'La description doit contenir au moins 10 caractères')
      .max(200, 'La description ne doit pas dépasser 200 caractères'),
    site: z.string().url('Le site doit être une URL valide'),
    capacity: z.number().min(1, 'La capacité doit être supérieure à 0'),
  })
  .refine((val) => !val.isPaid || val.price > 0, {
    message: 'Le prix doit être supérieur à 0 si le spectacle est payant',
    path: ['price'],
  })

export type ShowType = z.infer<typeof showSchema>
