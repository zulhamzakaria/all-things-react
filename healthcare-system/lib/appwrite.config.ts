import * as sdk from "node-appwrite";

const clientSdk = new sdk.Client();

clientSdk
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!)
  .setProject(process.env.PROJECT_ID!)
  .setKey(process.env.API_KEY!);

export const databases = new sdk.Databases(clientSdk);
export const storage = new sdk.Storage(clientSdk);
export const messaging = new sdk.Messaging(clientSdk);
export const users = new sdk.Users(clientSdk);
