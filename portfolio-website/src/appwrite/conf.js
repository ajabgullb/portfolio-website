import config from "../config/config";
import { Client, Databases, Storage, Query, ID } from "appwrite"

export class Service {
  client = new Client()
  databases;
  bucket;

  constructor () {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId)

    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
  }

  async createPost ({title, slug, content, featuredImage, status, userId}) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {title, content, featuredImage, status, userId},
      )
    } catch (error) {
      console.log("Appwrite Servie :: createPost :: error", error)
    }
  }

  async updatePost (slug, {title, content, featuredImage, status}) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {title, content, featuredImage, status}
      )
    } catch (error) {
      console.log("Appwrite Servie :: updatePost :: error", error)
    }
  }

  async deletePost (slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
      )

      return true
    } catch (error) {
      console.log("Appwrite Servie :: deletePost :: error", error)
      return false
    }
  }

  async getPost (slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
      )

    } catch (error) {
      console.log("Appwrite Servie :: getPost :: error", error)
      return false
    }
  }

  async getPosts (queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries,
      )
    } catch (error) {
      console.log("Appwrite Servie :: getPosts :: error", error)
      return false
    }
  }

  async uploadFile (file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBuckedId,
        ID.unique(),
        file,
      )
    } catch (error) {
      console.log("Appwrite Servie :: uploadFile :: error", error)
      return false
    }
  }

  async deleteFile (fileId) {
    try {
      await this.bucket.deleteFile(
        config.appwriteBuckedId,
        fileId
      )

      return true
    } catch (error) {
      console.log("Appwrite Servie :: deleteFile :: error", error)
      return false
    }
  }

  getFilePreview (fileId) {
    return this.bucket.getFilePreview(
      config.appwriteBuckedId,
      fileId,
    )
  }

}

const appwriteService = new Service
export default appwriteService
