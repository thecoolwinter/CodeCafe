require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(process.env.SUPA_URL, process.env.SUPA_KEY);
