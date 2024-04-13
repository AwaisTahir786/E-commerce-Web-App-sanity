import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";


function Check() {
  return (
    <section className="flex flex-col gap-8 lg:flex-row">
      {/* left side */}
      <div className="flex flex-col flex-1 gap-5">
        {/* top */}
        <div className="border flex flex-row justify-between h-52 bg-[#d6d6d8]">
          {/* top things */}
          <div className="flex flex-col justify-center pl-10">
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
              <span className="lg:text-3xl text-2xl">GET UP TO </span>60%
            </h1>
            <p className="  leading-4 lg:leading-7 [&:not(:first-child)]:mt-2">
              For the summer season
            </p>
          </div>

          <Image
            src={"/images/event1.png"}
            alt="promotion image"
            width={260}
            height={200}
          />
        </div>

        {/* bottem */}
        <div className="border flex  flex-col justify-center items-center h-52 bg-black text-white">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            GET 30% OFF
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">USE PROMO CODE</p>
          <Button className="bg-[#d6d6d850] px-14 h-8 tracking-widest font-bold">
            DINEWEEKENDSALE
          </Button>
        </div>
      </div>




      {/* right side */}
      <div className="flex-1">
        <div className="lg:flex grid grid-cols-2 gap-5 ">
          {/* image 1 */}
          <div className="pt-5 pl-5 bg-[#e8cea1]">
            <h1>Flex Sweatshirt</h1>
            <p className="">
              {" "}
              <span className="line-through">$100.00 </span>
              <span className="font-bold ml-2">$75.00</span>
            </p>
            <Image
              src={"/images/event2.png"}
              alt="Main Image"
              width={280}
              height={340}
            />
          </div>
          {/* image 1 */}
          <div className=" pt-5 pl-5 bg-[#d6d6d8] ">
            <h1>Flex Push Button Bomber</h1>
            <p className="flex flex-row">
              {" "}
              <span className=" line-through lg:block hidden">$225.00</span>
              <span className="font-bold ml-2">$190.00</span>
            </p>
            <Image
              src={"/images/event3.png"}
              alt="Main Image"
              width={280}
              height={340}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Check;
