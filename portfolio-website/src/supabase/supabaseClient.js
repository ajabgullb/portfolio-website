import { createClient } from "@supabase/supabase-js"
import {projectURL, supabaseKey} from "../config/config"

const supabase = createClient(projectURL, supabaseKey)

export default supabase
