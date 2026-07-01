import type { EventFields } from '@/types/Show'

export const EVENT_FIELDS: EventFields[] = [
  {
    id: 'type',
    title: "Type d'événement",
    placeholder: '',
    type: 'select',
    required: true,
  },
  {
    id: 'title',
    title: 'Titre',
    placeholder: "Titre de l'événement",
    type: 'text',
    required: true,
  },
  {
    id: 'place',
    title: 'Lieu',
    placeholder: "Lieu de l'événement",
    type: 'text',
    required: true,
  },
  {
    id: 'site',
    title: 'Site',
    placeholder: 'Site internet',
    type: 'text',
    required: false,
  },
  {
    id: 'capacity',
    title: 'Capacité',
    placeholder: "Capacité maximale de l'événement",
    type: 'number',
    required: false,
  },
  {
    id: 'address',
    title: 'Adresse',
    placeholder: 'Adresse',
    type: 'text',
    required: true,
  },
  {
    id: 'isPaid',
    title: 'Événement payant ?',
    placeholder: 'Événement payant ?',
    type: 'checkbox',
    required: true,
  },
  {
    id: 'price',
    title: 'Prix',
    placeholder: 'Prix',
    type: 'number',
    required: false,
  },
  {
    id: 'date',
    title: 'Date',
    placeholder: "Date de l'événement",
    type: 'date',
    required: true,
  },
  {
    id: 'description',
    title: 'Description',
    placeholder: "Description de l'événement",
    type: 'textarea',
    required: true,
  },
  {
    id: 'img',
    title: 'Image',
    placeholder: "Image de l'événement",
    type: 'text',
    required: false,
  },
]

export const EVENT_TYPES = ['Atelier', 'Musique', 'Danse', 'Theatre', 'Festival']
