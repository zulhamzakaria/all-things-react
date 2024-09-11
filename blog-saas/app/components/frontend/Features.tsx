import { CloudRain } from "lucide-react";
import React from "react";

const features = [
  {
    name: "Sign up for free",
    description:
      "Quod rerum nemo accusantium accusamus ipsam dolorem voluptas. Laudantium quia dolor delectus. Quis vel inventore et. Ut omnis aliquid in est.",
    Icon: CloudRain,
  },
  {
    name: "Blazing fast",
    description:
      "Quod rerum nemo accusantium accusamus ipsam dolorem voluptas. Laudantium quia dolor delectus. Quis vel inventore et. Ut omnis aliquid in est.",
    Icon: CloudRain,
  },
  {
    name: "Secured by Kinde",
    description:
      "Quod rerum nemo accusantium accusamus ipsam dolorem voluptas. Laudantium quia dolor delectus. Quis vel inventore et. Ut omnis aliquid in est.",
    Icon: CloudRain,
  },
  {
    name: "Easy to use",
    description:
      "Quod rerum nemo accusantium accusamus ipsam dolorem voluptas. Laudantium quia dolor delectus. Quis vel inventore et. Ut omnis aliquid in est.",
    Icon: CloudRain,
  },
];

const Features = () => {
  return (
    <div className=" py-24 sm:py-32">
      <div className=" max-w-2xl mx-auto lg:text-center">
        <p className=" font-semibold leading-7 text-primary">Blog Faster</p>
        <h1 className=" mt-2 text-3xl font-bold sm:text-4xl">
          Get your blog up and running in minutes
        </h1>
      </div>

      <div className=" mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <div className=" grid max-w-xl grid-cols-1 lg:gap-y-16 lg:grid-cols-2  gap-x-8 gap-y-10 lg:max-w-none ">
          {features.map((feature, index) => (
            <div key={index} className=" relative pl-16">
              <div className=" text-base font-semibold leading-7">
                <div className=" absolute left-0 top-0 rounded-lg bg-primary/10 flex size-10 items-center justify-center">
                  <feature.Icon className=" w-6 h-6 text-muted-foreground" />
                </div>
                {feature.name}
              </div>
              <p className=" mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
