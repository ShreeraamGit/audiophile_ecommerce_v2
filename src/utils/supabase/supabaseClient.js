import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://olckwfmgbdilggjtprkg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sY2t3Zm1nYmRpbGdnanRwcmtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM4ODcxMDIsImV4cCI6MTk3OTQ2MzEwMn0.s7IfaxNjS5PSd1Bi1yfspkpMUEsZqOkgdMuMYxX4u0M";
export default createClient(supabaseUrl, supabaseKey);
