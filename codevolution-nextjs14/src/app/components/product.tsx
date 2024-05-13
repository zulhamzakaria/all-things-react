const Product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Product Page!</div>;
};

export default Product;
