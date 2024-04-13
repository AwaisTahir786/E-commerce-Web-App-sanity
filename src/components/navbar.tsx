"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "./ui/input";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import NavLinks from "./navlinks";
import CartSideBar from "./CartSideBar";
import { useShoppingCart } from "use-shopping-cart";

function Navbar() {
  const [isopen, setIsopen] = useState(false);

  function toogleNavbar() {
    setIsopen(!isopen); // we treat reverse method
  }

  const { cartCount, handleCartClick } = useShoppingCart();
  return (
    <>
      <div className="lg:flex justify-between items-center py-6 px-8 hidden ">
        <Link href={"/"}>
          <Image
            src="/images/Logo.png"
            alt="Picture of the author"
            width={150}
            height={150}
          />
        </Link>

        <NavLinks />
        <span>
          <Input
            type="email"
            placeholder="What are you looking for"
            className="border-none"
          />
        </span>

        <div onClick={()=>handleCartClick()} className="bg-gray-200 relative rounded-full h-10 w-10 flex justify-center items-center">
          <ShoppingCart className="h-6 w-6 cursor-pointer" />
          <div className="w-[18px] h-[18px] bg-red-500 flex justify-center items-center rounded-full absolute -right-1 -bottom-1 text-white font-semibold text-sm">
            {cartCount}
          </div>
        </div>

        <CartSideBar />
      </div>

      <div className="lg:hidden flex flex-row justify-end ">
        <button onClick={toogleNavbar} className="pt-10 pr-10">
          {isopen ? <X /> : <Menu />}
        </button>
      </div>
      {isopen && (
        <div className="flex flex-col items-center gap-y-8">
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default Navbar;
