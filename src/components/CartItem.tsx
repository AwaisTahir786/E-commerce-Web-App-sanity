"use client";

import React from "react";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { FaPlus, FaMinus, FaX } from "react-icons/fa6";

function CartItem({ item }: any) {
  // console.log(item);

  const { removeItem , incrementItem, decrementItem} = useShoppingCart();
  return (
    <div className="flex justify-between border-b mt-5 pb-2 ">
      {/* image */}
      <div>
        <Image
          src={item.images}
          alt="cart image"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* content  */}
      <div className="p-3 flex flex-col gap-5 justify-center w-full max-w-[180px]">
        <div className="flex justify-between gap-2">
          <h1 className="text-sm font-bold">{item.name}</h1>
          <button onClick={() => removeItem(item.id)}>
            <FaX className="text-sm" />{" "}
          </button>
        </div>

        {/* increment, decrement */}
        <div className="flex justify-between">
          <div className="flex gap-3">
            <button onClick={()=>decrementItem(item.id)}>
              <FaMinus />
            </button>
            <div>{item.quantity}</div>
            <button onClick={()=>incrementItem(item.id)}>
              <FaPlus />
            </button>
          </div>
          <h1 className="font-bold text-sm text-balance text-right">${item.price * item.quantity}</h1>
        </div>



      </div>
    </div>
  );
}

export default CartItem;
