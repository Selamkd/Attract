import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;

// export const supabase = createClient(supabaseUrl, supabaseKey);

const supabase = createClient(
  process.env.NEXT_PUBLIC_URL,
  process.env.NEXT_PUBLIC_ANON_KEY
);

export default supabase;
