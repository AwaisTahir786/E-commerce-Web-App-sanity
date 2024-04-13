import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, LinkedinIcon, ShoppingCart, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="flex lg:flex-row flex-col py-20 gap-10">
      {/* one */}
      <div className="flex flex-col flex-1 gap-10">
        <Image
          src="/images/Logo.png"
          alt="Picture of the author"
          width={150}
          height={150}
          className=""
        />

        <p className="leading-7 [&:not(:first-child)]:mt-0">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>

        <div className="flex flex-row gap-5">

        <div className="bg-gray-200 rounded-lg h-10 w-10 flex justify-center items-center">
          <Twitter className="h-6 w-6" />
        </div>
        <div className="bg-gray-200 rounded-lg h-10 w-10 flex justify-center items-center">
          <Facebook className="h-6 w-6" />
        </div>
        <div className="bg-gray-200 rounded-lg h-10 w-10 flex justify-center items-center">
          <LinkedinIcon className="h-6 w-6" />
        </div>
      </div>

        </div>

        

      {/* two */}
      <div className="flex-1">
        <ul className="ml-6  [&>li]:mt-2 flex flex-col gap-2">
        <li className="text-xl font-bold">Company</li>
        <li>About</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
          <li>How it Works</li>
          <li>Contact Us</li>
      </ul>
      </div>

      {/* three */}
      <div className="flex-1">
        <ul className="ml-6  [&>li]:mt-2 flex flex-col gap-2">
        <li className="text-xl font-bold">Support</li>
        <li>Support Carrer</li>
        <li>24h Service</li>
        <li>Quick Chat</li>
      </ul>
      </div>

      {/* FOur */}
      <div className="flex-1">
        <ul className="ml-6  [&>li]:mt-2 flex flex-col gap-2">
        <li className="text-xl font-bold">Contact</li>
        <li>Whatsapp</li>
        <li>Support 24h</li>
      </ul>
      </div>
    </footer>
  );
}

export default Footer;
