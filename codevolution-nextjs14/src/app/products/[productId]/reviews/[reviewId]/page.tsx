import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

type ReviewPageProps = {
  params: {
    reviewId: number;
    productId: number;
  };
};

export default function ReviewPage({ params }: ReviewPageProps) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error: 1...");
  }

  if (params.reviewId > 1000) return notFound();
  return (
    <h1>
      Review no {params.reviewId} for product no {params.productId}
    </h1>
  );
}
