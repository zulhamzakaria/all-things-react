interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}

const Page = ({ params }: PageProps) => {
  return <p>{params.url}</p>;
};

export default Page;
