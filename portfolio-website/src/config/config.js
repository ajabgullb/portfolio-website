const appwriteProjectURL = String(import.meta.env.VITE_APPWRITE_URL)
const appwriteProjectId = String(import.meta.env.VITE_APPWRITE_PROJECT_ID)
const appwriteDatabaseId = String(import.meta.env.VITE_APPWRITE_DATABASE_ID)
const appwriteCollecitonId = String(import.meta.env.VITE_APPWRITE_COLLECTION_ID)
const appwriteBucketId = String(import.meta.env.VITE_APPWRITE_BUCKET_ID)

export {
  appwriteProjectURL,
  appwriteProjectId,
  appwriteDatabaseId,
  appwriteCollecitonId,
  appwriteBucketId,
}

