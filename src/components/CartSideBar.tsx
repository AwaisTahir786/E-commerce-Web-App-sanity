"use client";

import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
import { useShoppingCart } from 'use-shopping-cart';
import { ScrollArea } from './ui/scroll-area';
import CartItem from './CartItem';
import { Button } from './ui/button';

function CartSideBar() {

    const {cartCount, shouldDisplayCart, cartDetails, handleCartClick, totalPrice }= useShoppingCart();

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={()=>handleCartClick()}>
    <SheetContent>
      <SheetHeader>
        <SheetTitle className='mb-5 text-semibold'>My shopping Cart({cartCount})</SheetTitle>
      </SheetHeader>
      <>
      {cartCount === 0?(
        <div className='text-black/50'>Your Cart is Empty.</div>
      ):(

        // Object.values(): 
        // This is a built-in JavaScript method 
        // that returns an array containing the property values of an object.
        //  In other words, it extracts the values of each property of the object and puts them into an array.

        // cartDetails ?? {}: 
        // The nullish coalescing operator is used to provide a default value when dealing with null or undefined values.
        //  If cartDetails is null or undefined, it will use an empty object {} instead.


            <ScrollArea className='pr-4 mb-4 h-[70vh] xl:h-[74vh] '>
              {Object.values(cartDetails ?? {}).map((item)=>{
                return <CartItem key={item.id} item={item}/>
              })}

                
            </ScrollArea>
      )}
      </>

      {cartCount && cartCount > 0 && (
        <div className='flex flex-col justify-center items-center'>
          <div className='flex'>
          <div className='uppercase'>Total:</div>
          <div className='font-bold'>${totalPrice}</div>

          </div>

          <Button className='w-full bg-black text-white mt-4 uppercase'>
            Checkoutbutton
          </Button>
          
        </div>
      )}
    
        
      
    </SheetContent>
  </Sheet>
  )
}

export default CartSideBar;