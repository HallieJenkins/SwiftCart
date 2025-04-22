// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sesoykpotjajhdmumqrw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlc295a3BvdGphamhkbXVtcXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNzM1OTAsImV4cCI6MjA2MDg0OTU5MH0.dvTD8vqUBPq-bBmN_QXqt1aJ0CFF-rYZsIp-p0Z5goQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
