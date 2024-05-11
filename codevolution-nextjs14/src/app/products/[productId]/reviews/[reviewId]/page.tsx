import { notFound } from "next/navigation";

type ReviewPageProps = {
  params: {
    reviewId: number;
    productId: number;
  };
};

export default function ReviewPage({ params }: ReviewPageProps) {
  if (params.reviewId > 1000) return notFound();
  return (
    <h1>
      Review no {params.reviewId} for product no {params.productId}
    </h1>
  );
}
