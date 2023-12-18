import useSWR from "swr";
import * as cheerio from "cheerio";
import { useEffect, useState } from "react";
import { sanitize } from "dompurify";

const Summary = () => {
  const [sanitizedHtml, setSanitizedHtml] = useState("Loading summaries...");
  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://online-resume-with-minimal-api.azurewebsites.net/api/summaries",
    fetcher
  );

  useEffect(() => {
    if (!isLoading && data) {
      const result = processHtml(sanitize(data.description));
      setSanitizedHtml(result);
    }
  }, [isLoading, data]);

  const processHtml = (html: string): string => {
    const $ = cheerio.load(html);
    $("ul").contents().unwrap();
    return $.html();
  };

  if (error) return <div>Failed to get data... (`${error.message}`)</div>;
  return (
    <div
      className="pl-5 pt-1 text-xs font-extrabold font-mono text-justify w-full"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default Summary;
