export default async function getUser(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  //set as undefined to use nextjs notFound()
  if (!res.ok) undefined;
  return res.json();
}
