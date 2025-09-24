import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseURL || !supabaseAnonKey) {
  throw new Error("Missing supabase environment variable. please cheak your");
}

export const supabase = createClient(supabaseURL, supabaseAnonKey);

export const auth = {
  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  },
  getCurrentUser: () => {
    return supabase.auth.getUser();
  },
  onAuthStateChange: (callback) => {
    return supabase.auth.onAuthStateChange(callback);
  },
};


export const database = {
  getTasks: async () => {
    const { data, error } = await supabase
      .from("tasks")
      .select("*"); // kalau perlu bisa ditambah .eq("user_id", user.id)

    return { data, error };
  },

  addTasks: async (taskName) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { data: null, error: { message: "User not authenticated" } };
    }

    const { data, error } = await supabase
      .from("tasks")
      .insert([
        {
          task_name: taskName, // pastikan sesuai nama field
          user_id: user.id,
          is_complete: false,
        },
      ])
      .select();
    return { data, error };
  },

  updateTasks: async (taskId, updates) => {
    const { data, error } = await supabase
      .from("tasks")
      .update(updates)
      .eq("id", taskId)
      .select("*");
    return { data, error };
  },

  deleteTasks: async (taskId) => {
    const { data, error } = await supabase
      .from("tasks")
      .delete()
      .eq("id", taskId);
    return { data, error };
  },
};
