import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ienupusryoxcvucfkdqm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbnVwdXNyeW94Y3Z1Y2ZrZHFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzOTAwNzEsImV4cCI6MjA2ODk2NjA3MX0.zJnppHqtAhovY6_08RSPuawB0Uv1kanXKxPvJoYh1ds";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
