export default async function getUserPosts(userId: string) {
  // next caches data by default;
  // incremental static generation: data gets updated frequently?
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } }
  );
  // set as undefined to use nextjs notFound()
  if (!res.ok) undefined;
  return res.json();
}
