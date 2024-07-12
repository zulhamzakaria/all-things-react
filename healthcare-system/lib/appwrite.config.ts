import * as sdk from "node-appwrite";
// import { Account, Client, Databases, Messaging, Storage } from "appwrite";

const clientSdk = new sdk.Client();
// const client = new Client();

// client
//   .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!)
//   .setProject(process.env.PROJECT_ID!);

clientSdk
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66913af900011d79a8ed")
  .setKey(
    "33abe4107b838411a4cc0e676f3636c4db57380ea4c0393f4e398f8af123407010506883b3f06444b15d368de2fe568100f203c8ba4027ffa5c16c4330ddf0c574975e4b0a7efb10b8ace089bf63994c69139dd91ae8c63d4288c9e8b13e22e191de340b0580aef2677cf4f72089a3a1fd1a4edca46ed0ea560a34eb96dc7141"
  );

// export const databases = new Databases(client);
// export const storage = new Storage(client);
// export const messaging = new Messaging(client);
// export const account = new Account(client);
export const databases = new sdk.Databases(clientSdk);
export const storage = new sdk.Storage(clientSdk);
export const messaging = new sdk.Messaging(clientSdk);
export const users = new sdk.Users(clientSdk);
