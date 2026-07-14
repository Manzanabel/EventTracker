export interface Show {
  id: string
  title: string
  place: string
  address: string
  type: string
  date: string
  isPaid: boolean
  price: number
  img: string
  description: string
  site: string
  capacity: number
}

type EventInputType = 'text' | 'radio' | 'number' | 'date' | 'textarea' | 'select' | 'checkbox'

export interface EventFields {
  id: string
  title: string
  placeholder: string
  type: EventInputType
  required: boolean
  disabled?: boolean
  onBlur?: () => void
}
