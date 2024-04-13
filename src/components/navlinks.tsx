import React from "react";
import Link from "next/link";

function NavLinks() {
  return (
    <>
      <ul className="flex flex-row gap-x-10">
        <li className="text-xl  hover:border-b-2 border-black" >
          <Link href="/category/female">Female</Link>
        </li>
        <li className="text-xl hover:border-b-2 border-black">
          <Link href="/category/male">Male</Link>
        </li>
        <li className="text-xl hover:border-b-2 border-black">
          <Link href="/category/kids">Kids</Link>
        </li>
        <li className="text-xl hover:border-b-2 border-black">
          <Link href="/allProducts">All Products</Link>
        </li>
      </ul>
    </>
  );
}
export default NavLinks;
