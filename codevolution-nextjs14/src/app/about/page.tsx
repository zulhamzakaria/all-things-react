"use client";

import { cookies } from "next/headers";
import { useState } from "react";

// export const metadata = {
//   title: "About Page Metadata",
// };

const page = () => {
  const [clientComp, setClientComp] = useState("false");
  const cookieStore = cookies();
  const theme = cookieStore.get("theme")
  return <div>About Page</div>;
};

export default page;
