const PricingTable = () => {
  return (
    <>
      <div className=" max-w-xl mx-auto text-center">
        <h1 className=" font-semibold text-primary">Pricing</h1>
        <h1 className=" mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Pricing Plans for <span className=" text-primary">everyone</span> and
          every <p className=" text-blue-500">budget</p>
        </h1>
      </div>
      {/* leading is for the spacing between paragraph */}
      <p className=" mx-auto mt-6 max-w-2xl text-center leading-tight text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
        sapien vel justo rhoncus ultricies. Fusce euismod, purus at tincidunt
        vestibulum, nisl justo bibendum libero, nec lacinia nunc justo vel nunc.
      </p>
    </>
  );
};

export default PricingTable;
