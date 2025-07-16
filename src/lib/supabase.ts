import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'http://172.205.248.111:8000'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE'

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
