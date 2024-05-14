"use client";

import { useState } from "react";

export default function ClientComponentOne() {
  const [name, setName] = useState("Batman");
  return <div>Client Component One</div>;
}
