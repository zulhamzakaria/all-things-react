type ReviewPageProps = {
  params: {
    reviewId: number;
    productId: number;
  };
};

export default function ReviewPage({ params }: ReviewPageProps) {
  return (
    <h1>
      Review no {params.reviewId} for product no {params.productId}
    </h1>
  );
}
