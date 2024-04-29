"use client";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];

  if (!data?.length && query.search) {
    return <div>Try searching for somn else</div>;
  }

  if (!data?.length && query.favorites) {
    return <div>No favorites!</div>;
  }

  if (!data?.length) {
    return <div>No board found</div>;
  }

  return <div>{JSON.stringify(query)}</div>;
};

export default BoardList;
