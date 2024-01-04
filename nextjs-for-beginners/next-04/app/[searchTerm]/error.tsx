import Link from "next/link";
import React, { useEffect } from "react";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <main>
      <h2>somn wrong...</h2>
      <button onClick={() => reset()}>Try again</button>
      <p>
        or go back to <Link href="/">Homepage</Link>
      </p>
    </main>
  );
}
