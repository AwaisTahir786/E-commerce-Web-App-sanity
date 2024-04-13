"use client";

import React from "react";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

function Quantity({data}:any) {
  const [num, setnum] = useState(0);

  const{decrementItem,incrementItem, cartCount}=useShoppingCart();
  function add() {
    setnum(num + 1);
  }

  // function subtract() {
  //   {
  //     num <= 1 ? 1 : setnum(num - 1);
  //   }
  // }

  return (
    <div className="flex items-center gap-x-2">
      

      <span >{cartCount}</span>

     
    </div>
  );
}

export default Quantity;
