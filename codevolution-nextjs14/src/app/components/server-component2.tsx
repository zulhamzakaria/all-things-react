import fs from "fs";

export default function ServerComponentTwo() {
  fs.readFileSync("src/app/components/server-component2.tsx", "utf-8");
  return <div>Server Component Two</div>;
}
