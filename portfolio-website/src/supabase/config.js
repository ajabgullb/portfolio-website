
class Service {
  async signUpNewUser (email, password) {
    try {
      const { data, error } = await supabase.auth.singUp(email, password)
    } catch (error) {
      console.log("Supabase Errot :: signUpNewUser: ", error)
    }
  }
}

const authService = new Service
export default authService