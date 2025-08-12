import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lwontcecrbiucjrvskjh.supabase.co'; // Substitua pela sua URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3b250Y2VjcmJpdWNqcnZza2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5NTY0NzYsImV4cCI6MjA3MDUzMjQ3Nn0.MqPa8XN_1vtHmzSW5cQ08TVPmQhildV0IhvH2zsI8Tc'; // Substitua pela sua chave

export const supabase = createClient(supabaseUrl, supabaseKey);