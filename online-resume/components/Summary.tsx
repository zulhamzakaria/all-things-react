import useSWR from "swr";
import * as DOMPurify from "dompurify";

const fetcher = async () => {
  const response = await fetch(
    "https://online-resume-with-minimal-api.azurewebsites.net/api/summaries"
  );
  if (!response.ok) {
    console.log("Failed to get summary data");
  }
  return response.json();
};

const Summary: React.FC = () => {
  const { data, error } = useSWR(
    "https://online-resume-with-minimal-api.azurewebsites.net/api/summaries",
    fetcher
  );
  const sanitizedHtml = data
    ? DOMPurify.sanitize(data.description)
    : "Error getting data...";

  if (error) return <div>Failed to get data... (`${error.message}`)</div>;
  return (
    <div
      className="text-sm text-left w-full"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
};

export default Summary;
