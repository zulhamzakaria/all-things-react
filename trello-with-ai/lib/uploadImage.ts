import { storage } from "@/appwrite";
import { ID } from "appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;
  const fileUploaded = await storage.createFile("bucket-id", ID.unique(), file);
  return fileUploaded;
};

export default uploadImage;
