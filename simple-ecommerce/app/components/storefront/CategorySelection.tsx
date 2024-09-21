import Image from "next/image";
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
        <div className=" group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:row-span-2 sm:aspect-w-1 ">
          <Image src="/all.png" alt="all" fill className=" object-cover" />
          <div className=" bg-gradient-to-b from-transparent to-black opacity-10" />
          <div className=" p-6 flex items-end">
            <div>
              <Link href={"/products/all"}>
                <h3 className=" text-white font-semibold">All Products</h3>
                <p className=" mt-1 text-sm text-white">Shop now</p>
              </Link>
            </div>
          </div>
        </div>

        <div className=" group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-none sm:h-full sm:relative">
          <Image
            src="/all.png"
            alt="men"
            fill
            className=" object-cover sm:absolute sm:h-full sm:w-full sm:inset-0 "
          />
          <div className=" sm:absolute sm:inset-0 bg-gradient-to-b from-transparent to-black opacity-10" />
          <div className=" p-6 flex items-end sm:absolute sm:inset-0">
            <div>
              <Link href={"/products/men"}>
                <h3 className=" text-white font-semibold">Men Products</h3>
                <p className=" mt-1 text-sm text-white">Shop now</p>
              </Link>
            </div>
          </div>
        </div>
        <div className=" group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-none sm:h-full sm:relative">
          <Image
            src="/all.png"
            alt="women"
            fill
            className=" object-cover sm:absolute sm:h-full sm:w-full sm:inset-0 "
          />
          <div className=" sm:absolute sm:inset-0 bg-gradient-to-b from-transparent to-black opacity-10" />
          <div className=" p-6 flex items-end sm:absolute sm:inset-0">
            <div>
              <Link href={"/products/women"}>
                <h3 className=" text-white font-semibold">Women Products</h3>
                <p className=" mt-1 text-sm text-white">Shop now</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
