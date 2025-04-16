import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL } from "../utils/constants";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sdWVra2F3dWdnYWx1Z3R2YmlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3Nzc4MzUsImV4cCI6MjA1NzM1MzgzNX0.cOIPxVbZiQmDn9pGc92IHIaTggyEsBnA0bN4OUz0dvg";

const supabase = createClient(SUPABASE_URL, supabaseKey);

export default supabase;
