import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

function FeaturesSection() {
  return (
    <section className="flex lg:flex-row  flex-col gap-y-10 bg-[#fbfcff] py-20 mt-10 ">
      {/* left side */}
      <div className="flex flex-1">
        {/* sub dives */}
        <div className="flex py-5">
          <span className="flex flex-col gap-y-16 ">
            <div>
              <h2 className="mt-10 scroll-m-20 pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">
                Using Good Quality Materials
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-3">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit{" "}
              </p>
            </div>

            <div>
              <h2 className="mt-10 scroll-m-20 pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">
                100% Handmade Products
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-3">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit{" "}
              </p>
            </div>
          </span>

          {/* right sub dives */}
          <span className="flex flex-col gap-y-16 ">
            <div>
              <h2 className="mt-10 scroll-m-20 pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">
                Modern Fashion Design{" "}
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-3">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.{" "}
              </p>
            </div>

            <div>
              <h2 className="mt-10 scroll-m-20 pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0">
                Discount for Bulk Orders{" "}
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-3">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.{" "}
              </p>
            </div>
          </span>
        </div>
      </div>

      {/* right side */}

      <div className="flex border flex-1 ">
        {/* all data div */}
        <div className="flex lg:flex-row gap-10 flex-col justify-center items-center ">
          <div className="flex-1">
            <Image
              src={"/images/feature.png"}
              alt={"All products Image"}
              width={300}
              height={350}
            />
          </div>

          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="justify-start">
              <h2 className="mt-10 scroll-m-20 pb-2 text-md font-semibold tracking-tight transition-colors first:mt-0 text-start">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </h2>

              <Button className="mt-4 flex ">All Products</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
