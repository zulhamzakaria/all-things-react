"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Resume() {
  const params = useSearchParams();
  const query = params.get("userId");

  useEffect(() => {
    alert(JSON.stringify(query));
  }, [query]);

  return (
    <div className=" flex flex-col items-center justify-between p-24">
      Resume! is this the page?
    </div>
  );
}
