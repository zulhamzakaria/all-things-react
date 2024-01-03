export default async function getAllUsers() {
  const res = fetch("https://jsonplaceholder.typicode.com/users");

  //check response
  if (!(await res).ok) throw new Error("failed to retrieve users");
  return (await res).json();
}
