import { serverSideFunction } from "@/utils/server-utils";

export default function ServerOnlyPage() {
  const result = serverSideFunction();
  return (
    <div>
      This is a server only component <p>{result}</p>
    </div>
  );
}
