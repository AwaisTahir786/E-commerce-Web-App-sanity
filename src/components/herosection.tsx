import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

function Herosection() {
  return (
    <section className=" flex py-6 flex-col gap-y-10 lg:flex-row">
      
      <div className="flex-1 gap-10">

        <Badge className="bg-blue-200 text-blue-700 rounded-lg py-3 px-6 font-semibold hover:bg-blue-200 mt-20">Sale 70%</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl  mt-10">
        An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-10 line-clamp-2">
      Anyone can beat you but no one can beat your 
      <span>outfit as long as you wear Dine outfits.</span>
      </p>


      <Link href={"/allProducts"}>
      <Button className="bg-black h-12 mt-12 px-8">
        <ShoppingCart className="mr-2"/>Start Shopping</Button>
      </Link>




      
        <div className="flex flex-wrap gap-5 mt-32">
        <Image src={"/images/Featured1.png"} alt="Main Image" width={100} height={100} />
        <Image src={"/images/Featured2.png"} alt="Main Image" width={100} height={100} />
        <Image src={"/images/Featured3.png"} alt="Main Image" width={100} height={100} />
        <Image src={"/images/Featured4.png"} alt="Main Image" width={100} height={100} />


        </div>

        </div>
       


      {/*right side  */}
      <div className="flex-1">
        <div className="bg-[#ffece3] rounded-full flex justify-center items-center  ">
        <Image src={"/images/header.png"} alt="Main Image" width={600} height={600}/>

        </div>
</div>

    </section>
  );
}

export default Herosection;
