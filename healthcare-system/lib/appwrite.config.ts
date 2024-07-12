import * as sdk from "node-appwrite";
import { Account, Client, Databases, Messaging, Storage } from "appwrite";

const clientSdk = new sdk.Client();
const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!)
  .setProject(process.env.PROJECT_ID!);
// .setKey(process.env.API_KEY!);

clientSdk
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!)
  .setProject(process.env.PROJECT_ID!)
  .setKey(process.env.API_KEY!);

export const databases = new Databases(client);
export const storage = new Storage(client);
export const messaging = new Messaging(client);
export const account = new Account(client);
export const users = new sdk.Users(clientSdk);
