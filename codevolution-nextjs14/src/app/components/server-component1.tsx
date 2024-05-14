import fs from "fs";

export default function ServerComponentOne() {
  fs.readFileSync("src/app/components/server-component1.tsx", "utf-8");
  return <div>Server Component One</div>;
}
