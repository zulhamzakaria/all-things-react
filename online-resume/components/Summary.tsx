import useSWR from "swr";

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
  const { data, error, isLoading } = useSWR(
    "https://online-resume-with-minimal-api.azurewebsites.net/api/summaries",
    fetcher
  );
  if (error) return <div>Failed to get data... (`${error.message}`)</div>;
  if (isLoading) return <div>Loading...</div>;
  return <div>{data?.description}</div>;
};

export default Summary;
