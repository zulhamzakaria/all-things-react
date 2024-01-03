export default async function getAllUsers() {
  const res = fetch("https://jsonplaceholder.typicode.com/users");

  //check response
  // set as undefined to use nextjs notFound
  if (!(await res).ok) undefined;
  return (await res).json();
}
