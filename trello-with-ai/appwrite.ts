import { Client, Account, ID, Databases, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6684fe6e0027c991760d");

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export {client, account, databases, storage, ID}
