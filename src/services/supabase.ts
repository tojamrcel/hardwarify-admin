import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL } from "../utils/constants";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sdWVra2F3dWdnYWx1Z3R2YmlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDY0NTcsImV4cCI6MjA2MjAyMjQ1N30.OdGq1B1_KCEjEAyDeotaMzM5FSyUNCaalw_BQLVkQYo";

const supabase = createClient(SUPABASE_URL, supabaseKey);

export default supabase;
