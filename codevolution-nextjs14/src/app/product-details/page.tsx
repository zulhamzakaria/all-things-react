import { Suspense } from "react";
import ReviewsPage from "../components/reviews";
import ProductPage from "../components/product";

const ProductDetailPage = () => {
  return (
    <div>
      <h1>ProductDetailPage</h1>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <ReviewsPage />
      </Suspense>
      <Suspense fallback={<p>Loading product...</p>}>
        <ProductPage />
      </Suspense>
    </div>
  );
};

export default ProductDetailPage;
