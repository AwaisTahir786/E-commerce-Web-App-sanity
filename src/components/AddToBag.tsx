"use client";

import React from 'react'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import { useShoppingCart } from 'use-shopping-cart'
import { useToast } from "@/components/ui/use-toast"
import { urlFor } from '@/app/lib/sanity';

interface AddToBagTypes{
    name:string,
    gender:string,
    category:string,
    images:any,
    description:string,
    price:number
    
}

function AddToBag({name,gender,category,images,description,price}:AddToBagTypes) {

    const{addItem,handleCartClick}=useShoppingCart();
    const { toast } = useToast();


    const product:any={
        name:name,
        gender:gender,
        category:category,
        images:urlFor(images[0]).url(),
        description:description,
        price:price
        
    }
  return (
    <Button className='bg-black h-10 px-5 rounded-none' onClick={()=>{addItem(product);toast({
      title:`${name} has been added to the cart.`,
    })}}>
        <ShoppingCart className="mr-2" />
                  Start Shopping
    </Button>
  )
}

export default AddToBag