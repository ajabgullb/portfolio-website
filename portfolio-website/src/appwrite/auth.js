import config from "../config/config.js"
import { Account, Client, ID } from "appwrite"

export class AuthService {
  client = new Client()
  account;

  constructor () {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId)

    this.account = new Account(this.client)
  }

  async createAccount ({email, password, name}) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name)
      if (userAccount) {
        // Call another method
        return this.login({email, password})
      } else {
        return userAccount
      }
    } catch (error) {
      console.log("Appwrite Servie :: createAccount :: error", error)
    }
  }

  async login ({email, password}) {
    try {
      const userLogin = await this.account.createEmailPasswordSession(email, password)
      if (!userLogin) throw Error("Error Login!")

      return userLogin
    } catch (error) {
      console.log("Appwrite Servie :: login :: error", error)
    }
  }

  async getCurrentUser() {
    try {
      const currentUser = await this.account.get()
      if (!currentUser) return null

      return currentUser
    } catch (error) {
      console.log("Appwrite Servie :: getCurrentUser :: error", error)
    }
  }

  async logout () {
    try {
      return this.account.deleteSessions()
    } catch (error) {
      console.log("Appwrite Servie :: logout :: error", error)
    }
  }

}

const authService = new AuthService()
export default authService
