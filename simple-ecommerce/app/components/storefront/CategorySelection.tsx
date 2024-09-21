import Link from "next/link";

export function CategorySelection() {
  return (
    <div className=" py-24 sm:py-32">
      <div className="flex justify-between">
        <h2 className=" text-2xl font-extrabold tracking-tight">
          Shop by category
        </h2>
        <Link
          className=" text-sm font-semibold text-primary hover:text-primary/80"
          href="/products/all"
        >
          Browse all products
        </Link>
      </div>
      <div className=" lg:gap-8 mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6">
        <div className=" group ">

        </div>
      </div>
    </div>
  );
}
