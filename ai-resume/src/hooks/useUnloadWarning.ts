import { useEffect } from "react";

export default function useUnloadWarning(condition = true) {
  useEffect(() => {
    if (!condition) return;

    const listener = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    //triggered on refresh
    window.addEventListener("beforeunload", listener);

    return () => window.removeEventListener("beforeunload", listener);
  }, [condition]);
}
