import supabase from "./supabaseClient"

class Service {
  async signUpNewUser (email, password) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })

      if (error) {
        console.error("Supabase Errot :: signUpNewUser: ", error)
        return {success: false, error: error}
      }

      return {success: true, data: data}
    } catch (error) {
      console.error("Supabase Errot :: signUpNewUser: ", error)
    }
  }

  async signInWithEmail (email, password) {
    try {
      const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })

      if (error) {
        console.error("Supabase Errot :: signInWithEmail: ", error)
        return {success: false, error: error}
      }

      return {success: true, data: data}
    } catch (error) {
      console.error("Supabase Errot :: signUpNewUser: ", error)
    }
  }

  async resetPassword (email) {
    try {
      const isPasswordReset = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "/login"
      })

      if (!isPasswordReset) {
        console.error("Supabase Errot :: resetPassword: ", error)
        return {success: false, error: error}
      }
    } catch (error) {
      console.error("Supabase Errot :: resetPassword: ", error)
    }
  }
}

const authService = new Service
export default authService
