import { createClient } from '@supabase/supabase-js';

const supabaseURL = "https://pazbrkyxuutxfqebunxy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhemJya3l4dXV0eGZxZWJ1bnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwMTEwMzcsImV4cCI6MTk5MzU4NzAzN30.ZYMh2f6NCUHJvux2ErnlI4co1JltjjJQrf8cAeTOQCQ";

export const supabase = createClient(supabaseURL, supabaseAnonKey);