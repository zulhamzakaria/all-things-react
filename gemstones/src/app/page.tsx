import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        {/* reusable component that works as a 'container' for uniform design */}
        <MaxWidthWrapper
          className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 
        lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52"
        >
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image
                  src="/snake-1.png"
                  alt="snake-1"
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
              <h1
                className="relative w-fit tracking-tight text-balance mt-16 
                font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl"
              >
                Your image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                Immortalise your memories
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Satisfaction guaranteed
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <Image
                    className="inline-block h-10 w-10 object-cover rounded-full ring-2 ring-slate-100"
                    src="/phones/jn.jpg"
                    alt="😃"
                    width={10}
                    height={10}
                  />
                  <Image
                    className="inline-block h-10 object-cover w-10 rounded-full ring-2 ring-slate-100"
                    src="/phones/jn.jpg"
                    alt="🥱"
                    width={100}
                    height={100}
                  />
                  <Image
                    className="inline-block h-10 w-10 object-cover rounded-full ring-2 ring-slate-100"
                    src="/phones/jn.jpg"
                    alt="😆"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        className="h-4 w-4 text-green-600 fill-green-600"
                        key={index}
                      />
                    ))}
                  </div>
                  <p>
                    <span className="font-semibold">Bajillions </span>of happy
                    customers 😃
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:mx-w-xl">
              <Image
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none 
              hidden sm:block lg:hidden xl:block"
                alt="urImg"
                width={50}
                height={50}
              />
              <Image
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
                alt="line"
                width={50}
                height={50}
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition? */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              <span className="relative px-2">
                Tesimonies:
                <Icons.underline className="hidden sm:block inset-x-0 absolute -bottom-8 text-green-500  pointer-events-none" />
              </span>
            </h2>
            <img
              src="/snake-2.png"
              className="w-24 order-0 lg:order-2"
              alt="snake-2"
            />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gep-y-16">
            {/* first review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    className="h-5 w-5 text-green-600 fill-green-600"
                    key={index}
                  />
                ))}
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The case has the premium feels to it.{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    Recommended!
                  </span>{" "}
                  "
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-1.png"
                  alt="user-1"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonny</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified purchase</p>
                  </div>
                </div>
              </div>
            </div>
            {/* second review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    className="h-5 w-5 text-green-600 fill-green-600"
                    key={index}
                  />
                ))}
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The case has the premium feels to it.{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    Recommended!
                  </span>{" "}
                  "
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-1.png"
                  alt="user-1"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonny</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="pt-16">
          {/* not working */}
          <Reviews />
        </div>
      </section>
    </div>
  );
}
