import { ID, Query } from "node-appwrite";
import { account } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await account.create(
      ID.unique(),
      user.email,
      "undefined",
      user.name
    );
    return parseStringify(newUser);
  } catch (error: any) {
    // if (error && error?.code === 409) {
    //   const existingUser = await accounts.list([
    //     Query.equal("email", [user.email]),
    //   ]);
    //   return existingUser.users[0];
    // }
  }
};
