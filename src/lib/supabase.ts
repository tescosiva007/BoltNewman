import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project-url.supabase.co'
const supabaseAnonKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Store = {
  id: string
  code: string
  name: string
  area: string
  status: string
  postcode: string
  created_at: string
}

export type Message = {
  id: string
  title: string
  body: string
  list_of_stores: string[]
  user_id: string
  date_created: string
}

export type Profile = {
  id: string
  full_name: string
  email: string
  created_at: string
}