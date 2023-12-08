import React, { FC } from "react";

interface pageProps {
  params: { id: number };
}

const page: FC<pageProps> = ({ params }) => {
  return <div>page: {params.id}</div>;
};

export default page;
