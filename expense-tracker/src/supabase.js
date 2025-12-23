import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  "https://supabase.com/dashboard/project/hikeogvkeqgguoqxfqqd",        // Project URL
  "sb_publishable__c7df8wW8HJpG4GiaPBOyw_Jp5Rjqra"     // Publishable key
);
