import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://qztxgzehrwhijvfbirla.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6dHhnemVocndoaWp2ZmJpcmxhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTU4MzE1MCwiZXhwIjoyMDc1MTU5MTUwfQ.5ACzD5kzRLPA6Y7N2Vkqn2EZIH8He5TkIDVESJhq5wQ" // ✅ Only use this on the server!
);

export default supabase;
