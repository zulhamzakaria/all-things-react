"use client";

import queryString from "query-string";
import { Search } from "lucide-react";
import { useDebounceValue, useDebounceCallback } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [debouncedValue, setDebounceValue] = useDebounceValue(value, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setDebounceValue(e.target.value);
  };

  useEffect(() => {
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debouncedValue, router]);
  return (
    <div className="w-full relative">
      <Search className="absolute top1/2 left-3 transform translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[900px] pl-9"
        placeholder="search boards..."
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
