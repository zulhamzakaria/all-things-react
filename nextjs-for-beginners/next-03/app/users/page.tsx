import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const result: Promise<User[]> = getAllUsers();
  const users = await result;

  const content = (
    <section>
      <h2>
        <Link href="/">HomePage</Link>
        <br />
        {users.map((user) => {
          return (
            <>
              <p key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </p>
              <br />
            </>
          );
        })}
      </h2>
    </section>
  );

  return content;
}
